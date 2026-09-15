"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const resourceTitles: Record<string, string> = {
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
    slug: 'safety-alignment',
    title: 'Alignment & Safety in T2I and T2V Models',
    description: 'Working on safety alignment of Text-to-Image & T2V diffusion and flow matching models using a neurosymbolic approach called scene graphs.',
    resources: [
      'trce-paper-presentation',
      'csd722-depth-video-gen',
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
  {
    slug: 'interpretability-theory',
    title: 'Interpretability & Theory of DL',
    description: 'Developing attribution techniques (Integrated Gradients, Manifold IG, Guided IG) towards neural network interpretability, extending to sequential models and LLMs.',
    resources: [
      'explainable-ai',
      'theory-of-llms-notes',
    ],
  },
];

const sectionAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6, ease: "easeInOut" },
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
              <p>{track.description}</p>
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
