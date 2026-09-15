"use client";

import { motion } from "framer-motion";
import { CalendarDays, ExternalLink } from "lucide-react";

const academicData = [
  {
    id: 'ad_neurips_reviewer',
    title: 'Reviewer, NeurIPS 2026',
    subtitle: 'Conference on Neural Information Processing Systems',
    period: null,
    bullets: [],
    links: [],
  },
  {
    id: 'ad_polymath',
    title: 'Polymath Jr, Summer Research Intern',
    subtitle: null,
    period: 'June – Aug 2024, 2025',
    bullets: [
      'Engaged in research on Generative AI and optimal transport, Non-Local Models across two years.',
      'Focused on developing and analyzing mathematical models that incorporate non-local interactions & Optimal Transport based generative models.',
    ],
    links: [],
  },
  {
    id: 'ad_mtts',
    title: 'Mathematics Training and Talent Search Program (MTTS 24)',
    subtitle: null,
    period: 'May 2024',
    bullets: [
      'Selected from over 3,000 applicants all over India for one of 180 seats. Completed rigorous coursework and led discussions in Linear Algebra, Real Analysis, Proof writing and Number Theory.',
      'Engaged in daily discussions with leading professors and mentored peers during problem-solving sessions.',
    ],
    links: [{ label: 'Certificate', url: '#' }],
  },
  {
    id: 'ad_talks',
    title: 'Talk Series (3 Talks): "Generative AI: A Mathematical Exploration of How Machines Learn to Create"',
    subtitle: null,
    period: null,
    bullets: [
      'Delivered a first-principles, mathematical explanation of VAEs, GANs, and Diffusion Models.',
    ],
    links: [],
  },
  {
    id: 'ad_ta_mat161',
    title: 'Teaching Assistant for MAT161: Applied Linear Algebra',
    subtitle: null,
    period: 'Jan – Mar 2025',
    bullets: [],
    links: [],
  },
  {
    id: 'ad_tutor_mat101',
    title: 'Student Tutor for MAT101: Calculus I',
    subtitle: null,
    period: 'Aug – Dec 2025',
    bullets: [],
    links: [],
  },
  {
    id: 'ad_thesis_expo',
    title: 'Undergraduate Thesis Expo',
    subtitle: null,
    period: 'Apr 2026',
    bullets: [
      'Presented undergraduate thesis to a jury and the Departments of Mathematics and Computer Science; awarded 2nd Prize for Best UG Thesis.',
    ],
    links: [],
  },
];

const sectionAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const AcademicDevelopmentPage = () => {
  return (
    <div id="academic-development-section" className="container mx-auto px-4 py-12 md:py-20">
      <motion.header {...sectionAnimationProps} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline mb-4">Academic Development</h1>
      </motion.header>

      <div className="max-w-3xl mx-auto space-y-4">
        {academicData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="border border-primary/40 rounded-xl p-5 bg-card"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
              <h2 className="text-base font-semibold text-foreground leading-snug">
                {item.title}
              </h2>
              {item.period && (
                <span className="text-sm text-muted-foreground flex items-center gap-1.5 whitespace-nowrap sm:ml-4">
                  <CalendarDays size={14} className="text-accent" />
                  {item.period}
                </span>
              )}
            </div>

            {item.subtitle && (
              <p className="text-sm text-muted-foreground mb-2">{item.subtitle}</p>
            )}

            {item.bullets.length > 0 && (
              <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/80 leading-relaxed mt-2">
                {item.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}

            {item.links.length > 0 && (
              <div className="mt-3 flex gap-4">
                {item.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1"
                  >
                    {link.label} <ExternalLink size={12} />
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AcademicDevelopmentPage;
