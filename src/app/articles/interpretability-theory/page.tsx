"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const resources = [
  { slug: 'explainable-ai', title: 'Explainable AI: Attribution Techniques' },
  { slug: 'theory-of-llms-notes', title: 'Theory of LLMs — Notion Notes' },
];

const summaryPoints = [
  'Attribution techniques for Interpretability',
  'Enhancing Trust in LLMs',
  'Transformers for Non-parametric Regression',
];

const detailSections = [
  {
    heading: 'Enhancing Trust',
    bullets: [
      'Developed a compute-efficient, post-hoc repair method for distilled LLMs that mitigates trustworthiness degradation via EK-FAC-preconditioned gradient ascent (PBRF curvature correction), avoiding cost of full retraining or RLHF',
      'Estimated PBRF curvature using surrogate proxy datasets (Dolly, UnNI, S-NI) to remove dependence on the original transfer corpus, and extended the framework to preference-based supervision through an odds-ratio objective',
      'Benchmarked against SFT and DPO across seven distilled model sizes (GPT-2 and Qwen-based, 120M–1.7B parameters) on trust metrics (bias/ethics/truth log-odds, TruthfulQA, toxicity) and capability metrics (ROUGE-L, perplexity)',
      'Achieved up to 8% improvement in trustworthiness regression with under 1% perplexity degradation',
    ],
  },
  {
    heading: 'Attribution',
    paragraph:
      'Developing attribution techniques (Integrated Gradients, Manifold IG, Guided IG) towards neural network interpretability, extending to sequential models and LLMs.',
  },
  {
    heading: 'Transformers for Non-parametric Regression',
    paragraph:
      'Breakdown of paper: Efficient and Minimax Optimal In-context Nonparametric Regression with Transformers',
  },
];

const sectionAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const InterpretabilityTheoryPage = () => {
  const [expanded, setExpanded] = useState(false);

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
        <h1 className="text-4xl md:text-5xl font-headline mb-4">Safety, Interpretability &amp; Theory of LLMs</h1>
        <div className="text-lg text-foreground/85 leading-relaxed max-w-3xl">
          <p className="mb-3">I worked on some disjoint topics around this broad track.</p>

          <ul className="list-disc pl-5 space-y-1.5 text-base">
            {summaryPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          {expanded && (
            <div className="mt-4 space-y-5">
              {detailSections.map((section) => (
                <div key={section.heading}>
                  <p className="font-semibold underline mb-1">{section.heading}</p>
                  {section.paragraph && <p className="text-base">{section.paragraph}</p>}
                  {section.bullets && (
                    <ul className="list-disc pl-5 space-y-1.5 text-base">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            aria-expanded={expanded}
          >
            {expanded ? 'Show less' : 'Show more'}
            <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </button>
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
