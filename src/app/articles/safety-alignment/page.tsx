"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const resources = [
  { slug: 'trce-paper-presentation', title: 'TRCE Paper Presentation' },
  { slug: 'csd722-depth-video-gen', title: 'CSD 722 Project presentation: Depth Conditioned Video Generation' },
];

const summaryPoint =
  'Designed SCFM, a training-free safety-alignment method for pretrained T2I diffusion models that steers denoising toward safer generations at inference time via safety-potential-guided rectified flow matching in frozen CLIP embedding space';

const detailPoints = [
  'Learned a lightweight velocity field that captures the unsafe to safe direction in embedding space while using a safety potential to repel trajectories from harmful dense regions; validated via parallel encoder ablations (CLIP, BLIP-ITM, EVA-CLIP-8B) and inference-time guidance tuning across 7 harm categories from the I2P and DETONATE benchmarks.',
  'Extending the formulation with Riemannian flow matching to respect the geometry of the embedding manifold better',
  'Developing a neurosymbolic scene-graph extension to steer generation using relational structure between objects, enabling safety alignment at the level of scene semantics rather than holistic image content.',
];

const sectionAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const SafetyAlignmentPage = () => {
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
        <h1 className="text-4xl md:text-5xl font-headline mb-4">Alignment &amp; Safety in T2I and T2V Models</h1>
        <div className="text-lg text-foreground/85 leading-relaxed max-w-3xl space-y-3">
          <p>{summaryPoint}</p>

          {expanded && (
            <ul className="list-disc pl-5 space-y-1.5 text-base">
              {detailPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
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

export default SafetyAlignmentPage;
