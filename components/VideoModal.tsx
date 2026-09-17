"use client";

import { useState, useEffect, useCallback } from "react";

function embedUrl(url: string): string {
  const yt = url.match(/(?:youtu\.be\/|v=|shorts\/)([\w-]{11})/);
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1`;
  const vm = url.match(/vimeo\.com\/(\d+)/);
  if (vm) return `https://player.vimeo.com/video/${vm[1]}?autoplay=1`;
  return url;
}

export function VideoModal() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState("");
  const [vertical, setVertical] = useState(false);

  const close = useCallback(() => {
    setOpen(false);
    setSrc("");
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && open) close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.data?.type === "open-video-modal") {
        setSrc(e.data.url || "");
        setVertical(e.data.vertical || false);
        setOpen(true);
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div
      className={`modal${open ? " open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Client video"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className={`modal-box${vertical ? " vertical" : ""}`}>
        {src ? (
          embedUrl(src).includes("embed") ? (
            <iframe
              src={embedUrl(src)}
              allow="autoplay; fullscreen"
              allowFullScreen
              title="Client testimonial"
            />
          ) : (
            <video src={embedUrl(src)} controls autoPlay playsInline />
          )
        ) : (
          <div className="modal-empty">
            No video linked yet. Add the file or link to data-video on this testimonial.
          </div>
        )}
      </div>
      <button className="pill modal-close" type="button" onClick={close}>
        Close
      </button>
    </div>
  );
}
