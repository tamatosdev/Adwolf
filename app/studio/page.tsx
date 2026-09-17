import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { TeamGrid } from "@/components/TeamGrid";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About the studio | Adwolf",
  description: "Adwolf is a small, senior production and software studio in Karachi working with brands in the US, the GCC and Pakistan.",
};

const team = [
  { name: "Shahmeer Hussain", role: "Founder and creative director", dataC: "ai", alt: "Shahmeer Hussain" },
  { name: "Abdullah", role: "Projects and client accounts", dataC: "d3", alt: "Abdullah" },
  { name: "Add name", role: "Add role", dataC: "d2", alt: "Add name" },
  { name: "Add name", role: "Add role", dataC: "code", alt: "Add name" },
];

export default function StudioPage() {
  return (
    <main id="main">
      <PageHero>
        <h1 className="huge cond">Small team. Senior hands.</h1>
        <p className="lede">
          Adwolf is a production and software studio in Karachi, working with brands in the US, the GCC and Pakistan.
          You talk to the people making the work, not an account layer in between.
        </p>
      </PageHero>

      <section className="sec tight">
        <div className="wrap two-col">
          <h2 className="big cond">How it started</h2>
          <div className="prose">
            <p>
              Our founder, Shahmeer Hussain, took on his first design client at 13. Since then he and the team
              have made work for Red Bull, Honda, Careem, Gloria Jean&apos;s and IBA, and grown from design into
              animation, CGI, AI production and software.
            </p>
            <p>
              <span className="todo">Add two or three sentences in your own words: why Adwolf exists and what you refuse to do that other agencies do.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="sec tight">
        <div className="wrap stats">
          <div>
            <strong>
              <span className="todo">00</span>
            </strong>
            <span>Years making work</span>
          </div>
          <div>
            <strong>
              <span className="todo">000</span>
            </strong>
            <span>Projects delivered</span>
          </div>
          <div>
            <strong>3</strong>
            <span>Markets: US, GCC and Pakistan</span>
          </div>
        </div>
      </section>

      <section className="sec tight">
        <div className="wrap">
          <div className="sec-head">
            <h2 className="big cond">The team</h2>
            <p>{"The people you\u2019ll actually work with."}</p>
          </div>
          <TeamGrid members={team} />
        </div>
      </section>

      <section className="sec tight">
        <div className="wrap two-col">
          <h2 className="big cond">How we work</h2>
          <div className="feat" style={{ gridTemplateColumns: "1fr" }}>
            <div>
              <h3>You talk to the makers</h3>
              <p>Directors, artists and developers join the calls. Nothing gets lost in a handover.</p>
            </div>
            <div>
              <h3>You see it before we make it</h3>
              <p>Storyboards, style frames or a prototype first, so the direction is agreed before production.</p>
            </div>
            <div>
              <h3>One team for Make and Build</h3>
              <p>The campaign and the website or system behind it come from the same studio.</p>
            </div>
            <div>
              <h3>You own the files</h3>
              <p>Project files, source files and code are handed over at the end.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
