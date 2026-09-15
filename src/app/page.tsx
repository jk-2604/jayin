"use client";

import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

import AboutIntro from '@/components/about/AboutIntro';

import ExperiencePageContent from '@/app/experience/page';

const sectionAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <motion.section {...sectionAnimationProps} id="about-intro-section" className="container mx-auto px-4 py-12 md:py-20">
        <AboutIntro />
      </motion.section>
      <Separator className="my-12 md:my-16 bg-border/40" />

      <motion.section {...sectionAnimationProps} id="experience-section">
        <ExperiencePageContent />
      </motion.section>
    </div>
  );
}
