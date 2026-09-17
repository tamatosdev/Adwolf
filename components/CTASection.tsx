export function CTASection({
  headline = "Got a brief?",
  email = "hello@yourdomain.com",
  ctaLink,
  ctaLabel = "Start a project",
}: {
  headline?: string;
  email?: string;
  ctaLink?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="cta" aria-labelledby="cta-h">
      <div className="wrap">
        <h2 className="huge cond" id="cta-h">
          {headline}
        </h2>
        <div className="cta-row">
          <a className="mail" href={`mailto:${email}`}>
            {email}
          </a>
          <a className="pill dark" href={ctaLink ?? "/contact/"}>
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

export function LPCTASection({
  headline,
  formHref,
}: {
  headline: string;
  formHref: string;
}) {
  return (
    <section className="cta">
      <div className="wrap">
        <h2 className="huge cond" style={{ fontSize: "clamp(4rem,13vw,13rem)" }}>
          {headline}
        </h2>
        <div className="cta-row">
          <span style={{ fontSize: "1.25rem", fontWeight: 600 }}>
            A 20-minute call and a fixed quote. That&apos;s the whole process to start.
          </span>
          <a className="pill dark" href={formHref}>
            Get a quote
          </a>
        </div>
      </div>
    </section>
  );
}
