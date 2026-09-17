"use client";

import { useState, type FormEvent } from "react";

const serviceOptions = [
  "AI video",
  "CGI and 3D",
  "2D animation",
  "Social content",
  "Website or app",
  "ERP or Odoo",
  "Automation",
];

export function ContactPageForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get("name") as string || "").trim();
    const email = (data.get("email") as string || "").trim();

    if (!name) {
      setErrorMsg("Add your name so we know who to reply to.");
      setStatus("error");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErrorMsg("Add a valid work email.");
      setStatus("error");
      return;
    }

    const services = data.getAll("services") as string[];

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company: data.get("company") || "",
          website: data.get("website") || "",
          services,
          budget: data.get("budget") || "",
          timeline: data.get("timeline") || "",
          brief: data.get("brief") || "",
          source: "Contact page",
          formName: "contact",
        }),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
    } catch {
      setErrorMsg("Something went wrong. Please try again or email us directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "40px 20px" }}>
        <h2 className="mid cond" style={{ fontSize: "2.4rem", marginBottom: 18 }}>
          Thanks, we&apos;ll get back to you
        </h2>
        <p className="muted">You&apos;ll hear back within one working day.</p>
      </div>
    );
  }

  return (
    <form className="form" name="contact" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <p className="hp">
        <label>
          Leave this empty <input name="bot-field" />
        </label>
      </p>
        <div className="two">
          <div className="field">
            <label htmlFor="c-name">Name</label>
            <input id="c-name" name="name" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="c-email">Work email</label>
            <input id="c-email" name="email" type="email" autoComplete="email" required />
          </div>
        </div>
        <div className="two">
          <div className="field">
            <label htmlFor="c-company">Company</label>
            <input id="c-company" name="company" autoComplete="organization" />
          </div>
          <div className="field">
            <label htmlFor="c-site">Website</label>
            <input id="c-site" name="website" type="url" placeholder="https://" />
          </div>
        </div>
        <fieldset className="field">
          <legend>What do you need?</legend>
          <div className="checks">
            {serviceOptions.map((s) => (
              <label key={s}>
                <input type="checkbox" name="services" value={s} />
                <span>{s}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className="two">
          <div className="field">
            <label htmlFor="c-budget">Budget</label>
            <select id="c-budget" name="budget" defaultValue="">
              <option value="">Choose a range</option>
              <option>Under $5k</option>
              <option>$5k to $15k</option>
              <option>$15k to $50k</option>
              <option>$50k and up</option>
              <option>Not sure yet</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="c-time">Timeline</label>
            <select id="c-time" name="timeline" defaultValue="">
              <option value="">Choose one</option>
              <option>As soon as possible</option>
              <option>Within a month</option>
              <option>1 to 3 months</option>
              <option>Just exploring</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="c-brief">The brief</label>
          <textarea id="c-brief" name="brief" placeholder="What it is, who it&apos;s for, and when you need it" />
        </div>
        {status === "error" && <p className="error" role="alert">{errorMsg}</p>}
        <button className="pill" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send brief"}
        </button>
    </form>
  );
}
