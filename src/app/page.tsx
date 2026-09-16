import { Separator } from '@/components/ui/separator';

import AboutIntro from '@/components/about/AboutIntro';

import ExperiencePageContent from '@/app/experience/page';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section id="about-intro-section" className="container mx-auto px-4 py-12 md:py-20">
        <AboutIntro />
      </section>
      <Separator className="my-12 md:my-16 bg-border/40" />

      <section id="experience-section">
        <ExperiencePageContent />
      </section>
    </div>
  );
}
