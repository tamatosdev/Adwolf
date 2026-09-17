import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | Adwolf",
  description: "Adwolf privacy policy.",
};

export default function PrivacyPage() {
  return (
    <main id="main">
      <PageHero>
        <h1 className="huge cond">Privacy Policy</h1>
        <p className="lede">This page is under construction.</p>
      </PageHero>

      <section className="sec tight">
        <div className="wrap two-col">
          <h2 className="big cond">What we&apos;re doing</h2>
          <div>
            <p>
              This page is under construction. We&apos;re putting together a plain-language summary
              of what we collect through this site and how we handle it.
            </p>
            <p className="notice">
              <span className="todo">Add the full privacy policy text here.</span>
            </p>
            <p>
              Questions about privacy in the meantime:{" "}
              <a className="link" href="mailto:hello@yourdomain.com">
                hello@yourdomain.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}