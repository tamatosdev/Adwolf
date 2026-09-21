"use client";

export function QuoteButton({
  c,
  alt,
  slot,
  whoB,
  whoSpan,
  line,
  video,
  vertical,
}: {
  c: string;
  alt: string;
  slot: string;
  whoB: string;
  whoSpan: string;
  line: string;
  video: string;
  vertical: boolean;
}) {
  return (
    <button
      className="quote"
      type="button"
      data-video={video}
      data-vertical={vertical ? "true" : "false"}
      onClick={() =>
        window.postMessage({ type: "open-video-modal", url: video, vertical }, "*")
      }
    >
      <div className="media grid-bg" data-c={c} data-src="" data-alt={alt}>
        <span className="slot">{slot}</span>
        <span className="play">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M7 5v14l12-7z"></path>
          </svg>
        </span>
      </div>
      <span className="who">
        <b>{whoB}</b>
        <span>{whoSpan}</span>
      </span>
      <span className="line">{line}</span>
    </button>
  );
}