"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const resources = [
  { slug: 'explainable-ai', title: 'Explainable AI: Attribution Techniques' },
  { slug: 'theory-of-llms-notes', title: 'Theory of LLMs — Notion Notes' },
];

const sectionAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const InterpretabilityTheoryPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <Link href="/articles" className="text-sm text-primary hover:underline mb-4 inline-block">
          &larr; All Research Tracks
        </Link>
        <h1 className="text-4xl md:text-5xl font-headline mb-4">Interpretability &amp; Theory of DL</h1>
        <div className="text-lg text-foreground/85 leading-relaxed max-w-3xl">
          <p className="mb-3">
            Worked on developing attribution techniques using Integrated Gradients, Manifold IG,
            and Guided IG towards neural network interpretability.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-base">
            <li>
              Currently extending these methods to sequential models and large language models
              (LLMs) using Granger causality and Randomized Path Integrals.
            </li>
            <li>
              Reproduced the results of Integrated Gradients and Manifold Integrated Gradients and
              tested a new methodology on MIG to improve performance.
            </li>
            <li>Future work involves computer vision applications.</li>
          </ul>
        </div>
      </motion.header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((r, index) => (
          <motion.div
            key={r.slug}
            {...sectionAnimationProps}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="rounded-lg border bg-card text-card-foreground shadow-sm hover:border-primary transition-all duration-300"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-lg font-semibold leading-snug tracking-tight">{r.title}</h3>
            </div>
            <div className="p-6 pt-0">
              <Link href={`/articles/${r.slug}/`} className="text-primary underline-offset-4 hover:underline text-sm font-medium">
                Read Article &rarr;
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InterpretabilityTheoryPage;
