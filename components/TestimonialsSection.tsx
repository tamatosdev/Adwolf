"use client";

import Image from "next/image";
import { clients, type Client } from "@/data/clients";

const accents = ["ai", "d3", "code"];

function initials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0][0].toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 5v14l12-7z" />
    </svg>
  );
}

function ClientCard({ client, accent, index }: { client: Client; accent: string; index: number }) {
  const hasVideo = Boolean(client.videoUrl);
  const subtitle = [client.role, client.company, client.location].filter(Boolean).join(", ");

  const inner = (
    <>
      <div className={`media grid-bg${hasVideo ? " tall" : ""}`} data-c={accent}>
        {client.poster ? (
          <Image
            src={client.poster}
            alt={client.name}
            fill
            sizes="(max-width:560px) 100vw, (max-width:900px) 50vw, 33vw"
            priority={index < 3}
          />
        ) : (
          <span className="avatar" aria-hidden="true">
            {initials(client.name)}
          </span>
        )}
        {hasVideo && (
          <span className="play">
            <PlayIcon />
          </span>
        )}
      </div>
      <span className="who">
        <b>{client.name}</b>
        <span>{subtitle}</span>
      </span>
      {client.quote && <span className="line">{client.quote}</span>}
    </>
  );

  if (hasVideo) {
    return (
      <button
        className="quote has-video"
        type="button"
        onClick={() => window.postMessage({ type: "open-video-modal", url: client.videoUrl, vertical: false }, "*")}
      >
        {inner}
      </button>
    );
  }

  return <div className="quote">{inner}</div>;
}

export function TestimonialsSection() {
  return (
    <section className="sec tight" aria-labelledby="quotes-h">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="big cond" id="quotes-h">Clients, on camera.</h2>
          <p>No anonymous quotes. Real clients, in their own words.</p>
        </div>
        <div className="quotes">
          {clients.map((c, i) => (
            <ClientCard key={c.name} client={c} accent={accents[i % accents.length]} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}