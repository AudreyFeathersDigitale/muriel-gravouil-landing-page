import { AuditSection } from "@/components/landing/audit-section";
import { AuditTransition } from "@/components/landing/audit-transition";
import { Hero } from "@/components/landing/hero";
import { HumanDesignTransition } from "@/components/landing/human-design-transition";
import { MechanismSection } from "@/components/landing/mechanism-section";
import { RecognitionSection } from "@/components/landing/recognition-section";
import { StorySection } from "@/components/landing/story-section";
import { SiteHeader } from "@/components/layout/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />
        <RecognitionSection />
        <StorySection />
        <HumanDesignTransition />
        <MechanismSection />
        <AuditTransition />
        <AuditSection />
      </main>
    </>
  );
}