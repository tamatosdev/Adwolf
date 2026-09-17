"use client";

import { useState, type FormEvent } from "react";

export function ContactForm({ formName, source }: { formName: string; source: string }) {
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
          brief: data.get("brief") || "",
          source,
          formName,
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
      <div className="form-panel">
        <div style={{ textAlign: "center", padding: "40px 20px" }}>
          <h2 className="mid cond" style={{ fontSize: "2.4rem", marginBottom: 18 }}>
            Thanks, we&apos;ll get back to you
          </h2>
          <p className="muted">You&apos;ll hear back within one working day.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="form-panel" id="form">
      <h2 className="mid cond" style={{ fontSize: "2.4rem", marginBottom: 18 }}>
        Tell us about the project
      </h2>
      <form className="form" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value={formName} />
        <input type="hidden" name="source" value={source} />
        <div className="field">
          <label htmlFor={`${formName}-name`}>Name</label>
          <input id={`${formName}-name`} name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor={`${formName}-email`}>Work email</label>
          <input id={`${formName}-email`} name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor={`${formName}-company`}>Company</label>
          <input id={`${formName}-company`} name="company" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor={`${formName}-brief`}>What are you working on?</label>
          <textarea id={`${formName}-brief`} name="brief" style={{ minHeight: 110 }} />
        </div>
        {status === "error" && <p className="error" role="alert">{errorMsg}</p>}
        <button className="pill" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Get a quote"}
        </button>
        <p className="hint">You&apos;ll hear back within one working day.</p>
      </form>
    </div>
  );
}
