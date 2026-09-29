import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { WorkExplore } from "@/components/work/WorkExplore";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Work | Adwolf",
  description: "Selected film, animation, design and software projects from Adwolf studio.",
};

export default function WorkPage() {
  return (
    <main id="main">
      <PageHero>
        <h1 className="page-title cond">Work</h1>
        <p className="lede">Films, ads, animation and systems. The rest we&apos;ll show you on a call.</p>
      </PageHero>

      <section className="sec tight">
        <div className="wrap">
          <Suspense fallback={<span className="muted">Loading work…</span>}>
            <WorkExplore />
          </Suspense>
        </div>
      </section>

      <CTASection />
    </main>
  );
}