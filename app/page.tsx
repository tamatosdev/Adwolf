import { HeroSection } from "@/components/HeroSection";
import { ReelSection } from "@/components/ReelSection";
import { StatementSection } from "@/components/StatementSection";
import { WorkSlider } from "@/components/WorkSlider";
import { MakeBuildSection } from "@/components/MakeBuildSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ClientNamesSection } from "@/components/ClientNamesSection";
import { BlogPreviewSection } from "@/components/BlogPreviewSection";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <main id="main">
      <HeroSection />
      <ReelSection />
      <StatementSection />
      <WorkSlider />
      <MakeBuildSection />
      <TestimonialsSection />
      <ClientNamesSection />
      <BlogPreviewSection />
      <CTASection />
    </main>
  );
}
