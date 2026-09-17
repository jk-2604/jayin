"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const resourceTitles: Record<string, string> = {
  'enhancing-trust-llms-notes': 'Enhancing trust in LLMs notes',
  'thesis-poster': 'Thesis Poster',
  'speech-tsm-gans': 'Speech Time Scale Modification with GANs',
  'speech-tsm-gans-presentation': 'Speech TSM using GANs - Presentation',
  'statistics-generative-models': 'Statistics for Generative Models',
  'ddpm-notes': 'Denoising Diffusion Probabilistic Models Notes',
  'generative-models-overview': 'Generative Models: A Mathematical Overview',
  'latent-diffusion-presentation': 'Latent Diffusion Model Paper Presentation',
  'csd722-depth-video-gen': 'CSD 722: Depth Conditioned Video Generation',
  'contrastive-learning-simclr-ijepa': 'Contrastive Learning: SimCLR & I-JEPA',
  'variational-autoencoders': 'Variational Autoencoders (VAEs)',
  'vision-transformer-vit': 'Vision Transformer (ViT)',
  'flow-matching-lecture': 'Lecture on Flow Matching',
  'trce-paper-presentation': 'TRCE Paper Presentation',
  'principal-component-analysis': 'Principal Component Analysis',
  'cross-validation-techniques': 'Cross Validation Techniques',
  'sequential-models-rnns-overview': 'Sequential Models: RNNs Overview',
  'neural-networks-fundamentals': 'Neural Networks: Foundations and Architectures',
  'explainable-ai': 'Explainable AI: Attribution Techniques',
  'theory-of-llms-notes': 'Theory of LLMs — Notion Notes',
};

const tracks = [
  {
    slug: 'safety-alignment',
    title: 'Alignment & Safety in T2I and T2V Models',
    description:
      'Designed SCFM, a training-free safety-alignment method for pretrained T2I diffusion models that steers denoising toward safer generations at inference time via safety-potential-guided rectified flow matching in frozen CLIP embedding space',
    detailPoints: [
      'Learned a lightweight velocity field that captures the unsafe to safe direction in embedding space while using a safety potential to repel trajectories from harmful dense regions; validated via parallel encoder ablations (CLIP, BLIP-ITM, EVA-CLIP-8B) and inference-time guidance tuning across 7 harm categories from the I2P and DETONATE benchmarks.',
      'Extending the formulation with Riemannian flow matching to respect the geometry of the embedding manifold better',
      'Developing a neurosymbolic scene-graph extension to steer generation using relational structure between objects, enabling safety alignment at the level of scene semantics rather than holistic image content.',
    ],
    resources: [
      'trce-paper-presentation',
      'csd722-depth-video-gen',
    ],
  },
  {
    slug: 'interpretability-theory',
    title: 'Safety, Interpretability & Theory of LLMs',
    description: 'I worked on some disjoint topics around this broad track.',
    summaryPoints: [
      'Attribution techniques for Interpretability',
      'Enhancing Trust in LLMs',
      'Transformers for Non-parametric Regression',
    ],
    detailSections: [
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
    ],
    resources: [
      'enhancing-trust-llms-notes',
      'explainable-ai',
      'theory-of-llms-notes',
    ],
  },
  {
    slug: 'ug-thesis',
    title: 'UG Thesis',
    description: 'My undergraduate thesis on generative models for unsupervised speech time-scale modification, under the joint supervision of Prof. Prasanta Kumar Ghosh (SPIRE Lab, IISc) and Prof. Niteesh Sahni (SNIoE) — won 2nd Prize for Best UG Thesis.',
    resources: [
      'thesis-poster',
      'speech-tsm-gans',
      'speech-tsm-gans-presentation',
      'statistics-generative-models',
      'ddpm-notes',
      'generative-models-overview',
    ],
  },
  {
    slug: 'phd-courses',
    title: 'PhD Research Courses',
    description: 'I completed 5 PhD-level courses during my undergraduate degree. These are the resources and notes I created while completing them.',
    list: [
      'Advanced Deep Learning',
      'Advanced Computer Vision',
      'Special Topics in AI',
      'Measure & Integration',
      'Stochastic Processes',
    ],
    resources: [
      'latent-diffusion-presentation',
      'csd722-depth-video-gen',
      'contrastive-learning-simclr-ijepa',
      'variational-autoencoders',
      'vision-transformer-vit',
      'statistics-generative-models',
      'flow-matching-lecture',
      'ddpm-notes',
    ],
  },
  {
    slug: 'seminar-notes',
    title: 'Seminar and Lecture Notes',
    description: 'From my UG Seminar course, where we were taught how to write reports, papers, and give presentations — these are the resources and notes from that coursework.',
    resources: [
      'principal-component-analysis',
      'cross-validation-techniques',
      'sequential-models-rnns-overview',
      'neural-networks-fundamentals',
    ],
  },
];

const sectionAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const TrackDescription = ({ track }: { track: (typeof tracks)[number] }) => {
  const [expanded, setExpanded] = useState(false);

  const detailPoints = 'detailPoints' in track ? track.detailPoints : undefined;
  const summaryPoints = 'summaryPoints' in track ? track.summaryPoints : undefined;
  const detailSections = 'detailSections' in track ? track.detailSections : undefined;

  if (!detailPoints && !detailSections) {
    return <p>{track.description}</p>;
  }

  return (
    <div>
      <p>{track.description}</p>

      {summaryPoints && (
        <ul className="list-disc pl-5 space-y-1 mt-2 text-sm">
          {summaryPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}

      {expanded && detailPoints && (
        <ul className="list-disc pl-5 space-y-1.5 mt-2 text-sm">
          {detailPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}

      {expanded && detailSections && (
        <div className="mt-3 space-y-4">
          {detailSections.map((section) => (
            <div key={section.heading}>
              <p className="text-sm font-semibold underline mb-1">{section.heading}</p>
              {section.paragraph && <p className="text-sm">{section.paragraph}</p>}
              {section.bullets && (
                <ul className="list-disc pl-5 space-y-1 text-sm">
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
        className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        aria-expanded={expanded}
      >
        {expanded ? 'Show less' : 'Show more'}
        <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
};

const ArticlesLandingPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-7xl">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-headline mb-4">Research</h1>
        <p className="text-xl text-muted-foreground">
          A curated collection of my research, organised by track.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tracks.map((track, index) => (
          <motion.div
            key={track.slug}
            {...sectionAnimationProps}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="border border-primary/40 rounded-xl p-6 hover:border-primary transition-all duration-300 bg-card flex flex-col"
          >
            <h2 className="text-2xl font-headline text-primary mb-3 text-center">{track.title}</h2>
            <div className="text-base text-foreground/80 leading-relaxed mb-4">
              <TrackDescription track={track} />
              {track.list && (
                <ol className="list-decimal list-inside mt-2">
                  {track.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {track.resources.map((slug) => (
                <div
                  key={slug}
                  className="border border-border/40 rounded-lg p-4 hover:border-primary/60 transition-all duration-300 bg-background flex flex-col"
                >
                  <span className="text-sm font-medium text-foreground/90 mb-2 flex-1">
                    {resourceTitles[slug]}
                  </span>
                  <Link
                    href={`/articles/${slug}/`}
                    className="text-primary text-sm font-medium hover:underline underline-offset-4"
                  >
                    Read &rarr;
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs text-muted-foreground">{track.resources.length} resources</span>
              <Link
                href={`/articles/${track.slug}/`}
                className="text-primary text-sm font-medium hover:underline underline-offset-4"
              >
                View Track &rarr;
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesLandingPage;
