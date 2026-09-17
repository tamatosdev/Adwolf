import type { CSSProperties } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { WorkCard } from "@/components/WorkCard";

export const metadata: Metadata = {
  title: "Build: websites, ERP, automation and internal tools | Adwolf",
  description: "Websites, online stores, Odoo ERP, automation and internal tools, built by Adwolf.",
};

const buildFaq = [
  {
    q: "Do you work with the tools we already use?",
    a: "Usually, yes. We connect to common tools like Shopify, HubSpot, QuickBooks and payment gateways, and we\u2019ll tell you during scoping if something should be replaced instead.",
  },
  {
    q: "Who owns the code?",
    a: "You do. Code, credentials and documentation are handed over at the end of the project.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes, as a monthly plan or on request.",
  },
  {
    q: "Can you work with our in-house developers?",
    a: "Yes. We can own a piece of the build or work inside your team\u2019s process.",
  },
];

export default function BuildPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="wrap">
          <p className="word build cond" style={{ fontSize: "clamp(5rem,20vw,20rem)" }} aria-hidden="true">
            Build
          </p>
          <h1 className="mid cond" style={{ maxWidth: "20ch", marginTop: 12 }}>
            Software that runs the business behind the brand.
          </h1>
          <p className="lede">
            Websites, online stores, ERP systems, automation and internal tools, built by the same
            studio that makes the work your customers see.
          </p>
        </div>
      </section>

      <section className="sec tight">
        <div className="wrap two-col">
          <h2 className="big cond">What we build</h2>
          <div className="feat" style={{ gridTemplateColumns: "1fr" }}>
            <div>
              <h3>
                <Link className="link" href="/lp/websites-and-apps/">
                  Websites and online stores
                </Link>
              </h3>
              <p>Marketing sites, Shopify and WooCommerce stores, built fast and set up to measure.</p>
            </div>
            <div>
              <h3>Web apps and portals</h3>
              <p>Customer portals, booking systems and dashboards your team and clients log into.</p>
            </div>
            <div>
              <h3>
                <Link className="link" href="/lp/odoo-erp/">
                  ERP and Odoo
                </Link>
              </h3>
              <p>Sales, inventory, POS, purchasing and accounting in one system instead of five.</p>
            </div>
            <div id="automation">
              <h3>Automation and AI agents</h3>
              <p>
                Lead follow-ups, data entry, reporting and support tasks handled automatically, with a
                person in the loop where it matters.
              </p>
            </div>
            <div>
              <h3>Internal tools</h3>
              <p>The tool that replaces the spreadsheet everyone is afraid to edit.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec tight">
        <div className="wrap">
          <div className="sec-head">
            <h2 className="big cond">Build work</h2>
            <p>
              Most of it sits behind a login. We&apos;ll walk you through the relevant projects on a
              call.
            </p>
          </div>
          <div className="work-grid">
            <WorkCard
              project={{
                href: "/work/retail-odoo-erp/",
                title: "One back office for a growing retailer",
                client: "US retailer",
                tag: "Software",
                tagClass: "code",
                dataCat: "code",
                dataC: "code",
                spanClass: "s7",
                slot: "Add a still or clip",
                alt: "US retailer",
              }}
            />
          </div>
        </div>
      </section>

      <section className="sec tight">
        <div className="wrap">
          <h2 className="big cond" style={{ marginBottom: "clamp(28px,4vw,48px)" }}>
            How a build runs
          </h2>
          <ol className="steps" style={{ "--c": "var(--code)" } as CSSProperties}>
            <li>
              <h3>Scope and quote</h3>
              <p>We map what you need and what can stay. You get a plan, a timeline and a fixed quote.</p>
            </li>
            <li>
              <h3>Prototype first</h3>
              <p>A clickable prototype or a test setup with your real data before full development.</p>
            </li>
            <li>
              <h3>Build, launch, hand over</h3>
              <p>Development in stages, testing, launch, training and full handover.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="sec tight">
        <div className="wrap two-col">
          <h2 className="big cond">Questions</h2>
          <FAQ items={buildFaq} />
        </div>
      </section>

      <CTASection />
    </main>
  );
}