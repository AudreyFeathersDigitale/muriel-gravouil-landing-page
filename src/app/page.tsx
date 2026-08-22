import { AuditSection } from "@/components/landing/audit-section";
import { TwoWaysSection } from "@/components/landing/two-ways-section";
import { PillarsSection } from "@/components/landing/pillars-section";
import { AuditTransition } from "@/components/landing/audit-transition";
import { Hero } from "@/components/landing/hero";
import { HumanDesignTransition } from "@/components/landing/human-design-transition";
import { MechanismSection } from "@/components/landing/mechanism-section";
import { RecognitionSection } from "@/components/landing/recognition-section";
import { StorySection } from "@/components/landing/story-section";
import { SiteHeader } from "@/components/layout/site-header";
import { TransformationSection } from "@/components/landing/transformation-section";
import { ProcessSection } from "@/components/landing/process-section";
import { TrustSection } from "@/components/landing/trust-section";
import { FinalOfferSection } from "@/components/landing/final-offer-section";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
  <Hero />
<TwoWaysSection />
<RecognitionSection />
<StorySection />
<HumanDesignTransition />
<MechanismSection />
<AuditTransition />
<PillarsSection />
<TransformationSection />
<ProcessSection />
<TrustSection />
<FinalOfferSection />
</main>
    </>
  );
}