"use client";

import { useRef, useEffect } from "react";

const S = 200;
const SIL = "M100 50 L82 54 Q62 30 44 8 Q34 44 40 84 Q30 100 22 118 L40 120 Q30 136 28 148 L52 150 Q70 160 84 176 L100 196 L116 176 Q130 160 148 150 L172 148 Q170 136 160 120 L178 118 Q170 100 160 84 Q166 44 156 8 Q138 30 118 54 Z";
const EYES = "M56 94 Q76 92 91 109 Q70 113 56 94 Z M144 94 Q124 92 109 109 Q130 113 144 94 Z";
const NOSE = "M85 148 Q100 140 115 148 Q111 163 100 166 Q89 163 85 148 Z";
const LINES = "M72 64 Q60 44 50 24 M128 64 Q140 44 150 24 M93 114 Q90 132 88 145 M107 114 Q110 132 112 145 M100 166 L100 177 M87 183 L100 177 L113 183 M46 124 Q64 138 82 146 M154 124 Q136 138 118 146";
const MODES: Record<string, { word: string; meta: string; dur: number }> = {
  ai: { word: "Generated.", meta: "Denoising", dur: 5200 },
  code: { word: "Coded.", meta: "Characters", dur: 4600 },
  d2: { word: "Drawn.", meta: "Line boil at 12 fps", dur: 4600 },
  d3: { word: "Rendered.", meta: "Normal pass", dur: 6200 },
};
const ORDER = ["ai", "code", "d2", "d3"];
const PAL: [number, number, number][] = [[255, 111, 181], [255, 181, 71], [140, 140, 255], [63, 224, 197]];
const GLYPHS = "{}<>/=;()[]01$#*+:".split("");

type WolfCanvasProps = {
  mode?: string;
  onModeChange?: (mode: string) => void;
  setModeRef?: { current: ((mode: string) => void) | null };
};

export function WolfCanvas({ mode: modeProp, onModeChange, setModeRef }: WolfCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<{
    N: number;
    P: {
      x: Float32Array; y: Float32Array; ox: Float32Array; oy: Float32Array;
      r: Float32Array; g: Float32Array; b: Float32Array; a: Float32Array;
      delay: Float32Array; seed: Float32Array; nx: Float32Array; ny: Float32Array;
    };
    T: { fill: Float32Array; lines: Float32Array; d3: Float32Array; d3n: Float32Array };
    cells: number[];
    glyphs: string[];
    W: number; H: number; dpr: number; sc: number; cx: number; cy: number;
    ctrl: { mode: string; modeStart: number; paused: number };
    setMode: (m: string, byUser?: boolean) => void;
    getMode: () => string;
    boil: number; lastBoil: number; lastStep: number;
    mx: number; my: number; tiltX: number; tiltY: number;
    visible: boolean;
    animId: number;
    destroy: () => void;
  } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const REDUCE = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const metaEl = document.getElementById("modeMeta");

    function rasterize(draw: (g: CanvasRenderingContext2D) => void) {
      const c = document.createElement("canvas");
      c.width = S;
      c.height = S;
      const g = c.getContext("2d")!;
      g.fillStyle = "#fff";
      g.strokeStyle = "#fff";
      draw(g);
      const d = g.getImageData(0, 0, S, S).data;
      const m = new Uint8Array(S * S);
      for (let i = 0; i < S * S; i++) m[i] = d[i * 4 + 3] > 100 ? 1 : 0;
      return m;
    }

    const fill = rasterize((g) => {
      g.fill(new Path2D(SIL));
      g.globalCompositeOperation = "destination-out";
      g.fill(new Path2D(EYES));
    });
    const noseData = rasterize((g) => g.fill(new Path2D(NOSE)));
    const lines = rasterize((g) => {
      g.lineCap = "round";
      g.lineJoin = "round";
      g.lineWidth = 3.4;
      g.stroke(new Path2D(SIL));
      g.lineWidth = 2.6;
      g.stroke(new Path2D(LINES));
      g.fill(new Path2D(EYES));
      g.fill(new Path2D(NOSE));
    });

    const dist = new Float32Array(S * S);
    for (let i = 0; i < S * S; i++) dist[i] = fill[i] ? 1e6 : 0;
    const at = (x: number, y: number) => (x < 0 || y < 0 || x >= S || y >= S) ? 0 : dist[y * S + x];
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
      const i = y * S + x; if (!dist[i]) continue;
      dist[i] = Math.min(dist[i], at(x - 1, y) + 1, at(x, y - 1) + 1, at(x - 1, y - 1) + 1.41, at(x + 1, y - 1) + 1.41);
    }
    for (let y = S - 1; y >= 0; y--) for (let x = S - 1; x >= 0; x--) {
      const i = y * S + x; if (!dist[i]) continue;
      dist[i] = Math.min(dist[i], at(x + 1, y) + 1, at(x, y + 1) + 1, at(x + 1, y + 1) + 1.41, at(x - 1, y + 1) + 1.41);
    }
    let maxD = 0; for (let i = 0; i < S * S; i++) if (dist[i] > maxD) maxD = dist[i];
    const H = new Float32Array(S * S);
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
      const i = y * S + x; if (!fill[i]) continue;
      let h = Math.sqrt(dist[i] / maxD);
      if (y > 88 && y < 176) h += 0.22 * Math.exp(-Math.pow((x - 100) / 11, 2));
      if (noseData[i]) h += 0.18;
      H[i] = h;
    }
    (function blur(r: number, passes: number) {
      const tmp = new Float32Array(S * S);
      for (let n = 0; n < passes; n++) {
        for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) { let s = 0, c = 0; for (let k = -r; k <= r; k++) { const xx = x + k; if (xx >= 0 && xx < S) { s += H[y * S + xx]; c++; } } tmp[y * S + x] = s / c; }
        for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) { let s = 0, c = 0; for (let k = -r; k <= r; k++) { const yy = y + k; if (yy >= 0 && yy < S) { s += tmp[yy * S + x]; c++; } } H[y * S + x] = fill[y * S + x] ? s / c : 0; }
      }
    })(3, 2);
    const hAt = (x: number, y: number) => H[Math.max(0, Math.min(S - 1, y)) * S + Math.max(0, Math.min(S - 1, x))];

    const rnd = (() => { let s = 7; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();
    function sample(mask: Uint8Array, n: number) {
      const out = new Float32Array(n * 2); let k = 0, guard = 0;
      while (k < n && guard++ < n * 400) {
        const x = rnd() * S, y = rnd() * S;
        if (mask[(y | 0) * S + (x | 0)]) { out[k * 2] = x; out[k * 2 + 1] = y; k++; }
      }
      return out;
    }

    let N = innerWidth < 760 ? 1700 : 3000;
    const P = {
      x: new Float32Array(N), y: new Float32Array(N), ox: new Float32Array(N), oy: new Float32Array(N),
      r: new Float32Array(N), g: new Float32Array(N), b: new Float32Array(N), a: new Float32Array(N),
      delay: new Float32Array(N), seed: new Float32Array(N), nx: new Float32Array(N), ny: new Float32Array(N),
    };
    for (let i = 0; i < N; i++) {
      P.delay[i] = rnd() * 420;
      P.seed[i] = rnd();
    }
    const T = {
      fill: sample(fill, N),
      lines: sample(lines, N),
      d3: sample(fill, N),
      d3n: new Float32Array(N * 4),
    };
    for (let i = 0; i < N; i++) {
      const x = T.d3[i * 2] | 0, y = T.d3[i * 2 + 1] | 0;
      const k = 11;
      let nx = (hAt(x - 1, y) - hAt(x + 1, y)) * k, ny = (hAt(x, y - 1) - hAt(x, y + 1)) * k, nz = 1;
      const l = Math.hypot(nx, ny, nz); T.d3n[i * 4] = nx / l; T.d3n[i * 4 + 1] = ny / l; T.d3n[i * 4 + 2] = nz / l; T.d3n[i * 4 + 3] = hAt(x, y);
    }
    const cells: number[] = [];
    const cs = 5.2;
    for (let y = cs / 2; y < S; y += cs) for (let x = cs / 2; x < S; x += cs) if (fill[(y | 0) * S + (x | 0)]) cells.push(x, y);
    const glyphs = new Array(cells.length / 2).fill(0).map(() => GLYPHS[(rnd() * GLYPHS.length) | 0]);

    let W = 0, Hh = 0, dpr = 1, sc = 1, cx = 0, cy = 0;
    function resize() {
      const r = canvas!.getBoundingClientRect();
      dpr = Math.min(devicePixelRatio || 1, 2);
      W = r.width; Hh = r.height;
      canvas!.width = Math.round(W * dpr); canvas!.height = Math.round(Hh * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      sc = Math.min(W, Hh) * 0.86 / S;
      cx = W / 2; cy = Hh / 2;
    }

    const ctrl = { mode: "ai", modeStart: 0, paused: 0 };
    let boil = 0, lastBoil = 0, lastStep = 0;
    let mx = -9999, my = -9999, tiltX = 0, tiltY = 0;
    let visible = true;
    const observer = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    observer.observe(canvas);

    function setMode(m: string, byUser?: boolean) {
      ctrl.mode = m;
      ctrl.modeStart = performance.now();
      if (byUser) ctrl.paused = ctrl.modeStart + 15000;
      onModeChange?.(m);
    }
    if (setModeRef) setModeRef.current = (m: string) => setMode(m, true);

    function frame(now: number) {
      const animId = requestAnimationFrame(frame);
      stateRef.current!.animId = animId;
      if (!visible) return;
      const el = now - ctrl.modeStart;
      if (!REDUCE && now > ctrl.paused && el > MODES[ctrl.mode].dur) setMode(ORDER[(ORDER.indexOf(ctrl.mode) + 1) % ORDER.length]);

      ctx!.clearRect(0, 0, W, Hh);
      const u = sc;
      let aiAmp = 0;
      if (ctrl.mode === "ai") {
        const p = Math.min(1, el / 2600);
        aiAmp = REDUCE ? 0 : 120 * Math.pow(1 - p, 2.2) + 0.6;
        if (now - lastStep > 85) { lastStep = now; for (let i = 0; i < N; i++) { P.nx[i] = (rnd() - .5) * 2; P.ny[i] = (rnd() - .5) * 2; } }
        if (metaEl) metaEl.textContent = "Denoising step " + Math.max(1, Math.round(p * 30)) + " of 30";
      }
      if (ctrl.mode === "d2" && !REDUCE && now - lastBoil > 83) { lastBoil = now; boil++; }
      if (ctrl.mode === "d2" && metaEl) metaEl.textContent = "Line boil at 12 fps";
      if (ctrl.mode === "d3" && metaEl) metaEl.textContent = "Normal pass";
      if (ctrl.mode === "code") {
        if (metaEl) metaEl.textContent = (cells.length / 2).toLocaleString() + " characters";
        if (!REDUCE) for (let k = 0; k < 6; k++) glyphs[(rnd() * glyphs.length) | 0] = GLYPHS[(rnd() * GLYPHS.length) | 0];
      }

      const ry = REDUCE ? -.35 : Math.sin(now / 1700) * .5 + tiltY * .5;
      const rx = REDUCE ? .08 : Math.sin(now / 2600) * .12 + tiltX * .3;
      const cyR = Math.cos(ry), syR = Math.sin(ry), cxR = Math.cos(rx), sxR = Math.sin(rx);

      const codeFont = Math.max(8, 5.2 * u * .95);
      if (ctrl.mode === "code") { ctx!.font = "600 " + codeFont + "px ui-monospace, Menlo, Consolas, monospace"; ctx!.textAlign = "center"; ctx!.textBaseline = "middle"; }

      const nCells = cells.length / 2;
      for (let i = 0; i < N; i++) {
        let tx: number, ty: number, tr: number, tg: number, tb: number, ta = 1, size = 2;
        if (ctrl.mode === "ai") {
          const sx = T.fill[i * 2], sy = T.fill[i * 2 + 1];
          tx = cx + (sx - 100 + P.nx[i] * aiAmp) * u; ty = cy + (sy - 100 + P.ny[i] * aiAmp) * u;
          const t = Math.min(1, Math.max(0, sy / 200 * .9 + P.seed[i] * .35 - .1));
          let c0: [number, number, number], c1: [number, number, number], m: number;
          if (t < .5) { c0 = PAL[2]; c1 = PAL[0]; m = t * 2; }
          else { c0 = PAL[0]; c1 = PAL[1]; m = (t - .5) * 2; }
          tr = c0[0] + (c1[0] - c0[0]) * m; tg = c0[1] + (c1[1] - c0[1]) * m; tb = c0[2] + (c1[2] - c0[2]) * m;
          size = 2.6;
        } else if (ctrl.mode === "code") {
          const c = i % nCells;
          tx = cx + (cells[c * 2] - 100) * u; ty = cy + (cells[c * 2 + 1] - 100) * u;
          ta = i < nCells ? 1 : 0; tr = 63; tg = 224; tb = 197;
          if (glyphs[c] === "<" || glyphs[c] === ">") { tr = 241; tg = 240; tb = 236; }
        } else if (ctrl.mode === "d2") {
          let sx = T.lines[i * 2], sy = T.lines[i * 2 + 1];
          const h = Math.sin(P.seed[i] * 999 + boil * 12.9898) * 43758.5453;
          const j = (h - Math.floor(h)) - .5, j2 = (Math.sin(P.seed[i] * 777 + boil * 78.233) * 12543.1) % 1;
          sx += j * 1.6; sy += j2 * 1.6;
          tx = cx + (sx - 100) * u; ty = cy + (sy - 100) * u;
          tr = 255; tg = 181; tb = 71; size = 1.9;
        } else {
          const X = T.d3[i * 2] - 100, Y = T.d3[i * 2 + 1] - 100, Z = T.d3n[i * 4 + 3] * 46;
          const x1 = X * cyR + Z * syR, z1 = -X * syR + Z * cyR;
          const y2 = Y * cxR - z1 * sxR, z2 = Y * sxR + z1 * cxR;
          const f = 520 / (520 - z2);
          tx = cx + x1 * u * f; ty = cy + y2 * u * f;
          let nx = T.d3n[i * 4], ny = T.d3n[i * 4 + 1], nz = T.d3n[i * 4 + 2];
          const nx1 = nx * cyR + nz * syR, nz1 = -nx * syR + nz * cyR;
          const ny2 = ny * cxR - nz1 * sxR, nz2 = ny * sxR + nz1 * cxR;
          tr = (nx1 * .5 + .5) * 255; tg = (-ny2 * .5 + .5) * 255; tb = (nz2 * .5 + .5) * 255;
          const lam = Math.max(0, nx1 * -.45 + -ny2 * .55 + nz2 * .7);
          const lift = .72 + .5 * lam;
          tr = Math.min(255, tr * lift + 14); tg = Math.min(255, tg * lift + 14); tb = Math.min(255, tb * lift + 14);
          size = 2.3 * f;
        }

        const go = el > P.delay[i] || REDUCE;
        const k = REDUCE ? 1 : (go ? (ctrl.mode === "ai" ? .22 : .1) : 0);
        P.x[i] += (tx - P.x[i]) * k; P.y[i] += (ty - P.y[i]) * k;
        P.r[i] += (tr - P.r[i]) * .12; P.g[i] += (tg - P.g[i]) * .12; P.b[i] += (tb - P.b[i]) * .12;
        P.a[i] += (ta - P.a[i]) * .12;

        const dx = P.x[i] - mx, dy = P.y[i] - my, d2 = dx * dx + dy * dy, R = 70;
        let px = 0, py = 0;
        if (d2 < R * R) { const d = Math.sqrt(d2) || 1, s = (1 - d / R) * 26; px = dx / d * s; py = dy / d * s; }
        P.ox[i] += (px - P.ox[i]) * .18; P.oy[i] += (py - P.oy[i]) * .18;

        if (P.a[i] < .03) continue;
        const X = P.x[i] + P.ox[i], Y = P.y[i] + P.oy[i];
        ctx!.globalAlpha = P.a[i];
        ctx!.fillStyle = "rgb(" + (P.r[i] | 0) + "," + (P.g[i] | 0) + "," + (P.b[i] | 0) + ")";
        if (ctrl.mode === "code" && i < nCells) ctx!.fillText(glyphs[i], X, Y);
        else if (ctrl.mode !== "code") ctx!.fillRect(X - size / 2, Y - size / 2, size, size);
      }
      ctx!.globalAlpha = 1;
    }

    resize();
    setMode("ai");

    function onPointerMove(e: PointerEvent) {
      const r = canvas!.getBoundingClientRect();
      mx = e.clientX - r.left; my = e.clientY - r.top;
      tiltY = (mx / W - .5); tiltX = (my / Hh - .5);
    }
    function onPointerLeave() { mx = my = -9999; tiltX = tiltY = 0; }
    function onResize() { resize(); }

    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("resize", onResize);

    stateRef.current = {
      N, P, T, cells, glyphs, W, H: Hh, dpr, sc, cx, cy,
      ctrl, setMode, getMode: () => ctrl.mode, boil, lastBoil, lastStep,
      mx, my, tiltX, tiltY, visible, animId: 0,
      destroy() {
        cancelAnimationFrame(stateRef.current?.animId ?? 0);
        if (setModeRef) setModeRef.current = null;
        observer.disconnect();
        canvas.removeEventListener("pointermove", onPointerMove);
        canvas.removeEventListener("pointerleave", onPointerLeave);
        window.removeEventListener("resize", onResize);
      },
    };

    const animId = requestAnimationFrame(frame);
    stateRef.current.animId = animId;

    return () => {
      stateRef.current?.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!modeProp) return;
    const s = stateRef.current;
    if (s && s.getMode() !== modeProp) s.setMode(modeProp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modeProp]);

  return <canvas ref={canvasRef} width={850} height={678} />;
}
