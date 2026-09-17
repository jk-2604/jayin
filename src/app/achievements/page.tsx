"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const achievements = [
  'Received the award for Program Topper of the BSc (Research) in Mathematics, 2026 batch',
  'Awarded 2nd Prize for the Best Undergraduate Thesis',
  'Awarded Dean’s List (Monsoon 2025) for ranking among the top-performing students based on academic excellence.',
  'Summer Research Fellowship at IISc Bangalore — awarded by the Indian Academy of Sciences, INSA, and NASI. Selected among the top 10% nationwide. Received stipend and travel grant.',
  'semg-summit',
  '99.59 Percentile (top 0.5%) in CUET Mathematics Exam 2022 among 2.29 lakh students.',
  'Certificate of Merit from CBSE for scoring 100% in the CBSE Class X Mathematics Board exams. (Awarded to top 0.1%)',
];

const sectionAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const AchievementsPage = () => {
  return (
    <div id="achievements-section" className="container mx-auto px-4 py-12 md:py-20">
      <motion.header {...sectionAnimationProps} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline mb-4">Achievements</h1>
      </motion.header>

      <div className="max-w-3xl mx-auto">
        <div className="border border-primary/40 rounded-xl p-5 bg-card">
          <ul className="list-disc pl-5 space-y-2 text-sm text-foreground/85 leading-relaxed">
            {achievements.map((achievement) =>
              achievement === 'semg-summit' ? (
                <li key={achievement}>
                  Research on{' '}
                  <Link href="/projects/semg-cnn-classification/" className="text-primary font-medium hover:underline">
                    Preprocessing Pipeline and Application of CNNs for Surface Electromyography (sEMG) Signal Classification
                  </Link>{' '}
                  selected for a presentation in the SUMMIT 2.0 Conference held at Shiv Nadar University.
                </li>
              ) : (
                <li key={achievement}>{achievement}</li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
