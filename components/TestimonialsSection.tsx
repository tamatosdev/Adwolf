"use client";

const quotes = [
  { dataC: "ai", slot: "Add a poster frame", name: "Client name", title: "Title, Company", line: "Add a one-line pull quote from the video." },
  { dataC: "d3", slot: "Add a poster frame", name: "Client name", title: "Title, Company", line: "Add a one-line pull quote from the video." },
  { dataC: "code", slot: "Add a poster frame", name: "Client name", title: "Title, Company", line: "Add a one-line pull quote from the video." },
];

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 5v14l12-7z" />
    </svg>
  );
}

export function TestimonialsSection() {
  function openModal(dataVideo: string, vertical: boolean) {
    window.postMessage({ type: "open-video-modal", url: dataVideo, vertical }, "*");
  }

  return (
    <section className="sec tight" aria-labelledby="quotes-h">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="big cond" id="quotes-h">Clients, on camera.</h2>
          <p>No anonymous quotes. Real clients, in their own words.</p>
        </div>
        <div className="quotes">
          {quotes.map((q, i) => (
            <button
              key={i}
              className="quote"
              type="button"
              onClick={() => openModal("", false)}
            >
              <div className="media grid-bg" data-c={q.dataC}>
                <span className="slot">{q.slot}</span>
                <span className="play"><PlayIcon /></span>
              </div>
              <span className="who">
                <b>{q.name}</b>
                <span>{q.title}</span>
              </span>
              <span className="line">{q.line}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
