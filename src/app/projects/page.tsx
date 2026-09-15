"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const projectsData = [
  {
    slug: 'fwi-seismic-velocity-prediction',
    title: 'Full-Waveform Inversion for Seismic Velocity Prediction',
    year: 'Ongoing',
    supervisorName: 'Naveen Gupta & Divakar Vashisth',
    supervisorLink: null,
    bullets: [
      'Extending advisor\u2019s ICLR 2025 latent-space-translation framework for subsurface forward/inverse problem to using Diffusion priors and flow matching',
      'Working on optimal-transport-based misfit functions (Wasserstein distance, unbalanced OT) as an alternative for L2 loss to mitigate cycle-skipping on Marmousi/Overthrust benchmarks',
      'Literature survey on diffusion- and flow-matching-based generative priors as regularizers for Bayesian FWI',
    ],
  },
  {
    slug: 'csd722-depth-video-gen',
    title: 'CSD722 Project: Depth-Conditioned Video Generation using ControlNet & AnimateDiff',
    year: 'Jan – May 2026',
    supervisorName: 'Dr. Sumit Shekhar & Dr. Saurabh Shigwan (CSE Dept, SNU)',
    supervisorLink: null,
    bullets: [
      'Extended ControlNet to text-to-video diffusion models using AnimateDiff and Motion LoRA',
      'Modified model architecture to prevent training collapse where generated videos ignored depth-map conditioning; stabilized training by adding auxiliary supervision losses',
      'Conducted ablation experiments on prompts, depth conditioning, and text guidance',
    ],
  },
  {
    slug: 'financial-markets-time-series-sentiment',
    title: 'Time Series and Sentiment Analysis in US Financial Markets using Deep Learning',
    year: '2024–2025',
    supervisorName: 'Dr. Charu Sharma (Mathematics Dept, SNU)',
    supervisorLink: 'https://snu.edu.in/faculty/charu-sharma/',
    bullets: [
      'Conducted time series pattern recognition and sentiment analysis in US financial markets using 7 years of daily data across 31 financial indicators to model 2, 5, and 10-year bond yields',
      'Applied PCA and Mutual Information (MI), identifying 10 key indicators explaining 95% of variance; optimised cluster timelines using rolling windows to identify dates with maximum regime separation',
      'Best Silhouette Score: 0.45; ANOVA p-value: 1.21 \u00d7 10\u207b\u00b9\u2075\u2074, Kruskal-Wallis p-value: 1.25 \u00d7 10\u207b\u00b2\u00b9\u00b9, confirming significant differences across clusters',
    ],
  },
  {
    slug: 'investor-behavior-analysis-dl',
    title: 'Research Assistant: Investor Behavior Analysis using Deep Learning',
    year: '2024–2025',
    supervisorName: 'Dr. Ashish Vazirani',
    supervisorLink: null,
    bullets: [
      'Developed an unsupervised multimodal model to analyze investor emotions and decision-making patterns in Shark Tank videos',
      'Combined facial expression recognition, RoBERTa-based transcript analysis, and tabular neural networks for financial characteristics, with cross-modal attention to model investor behavior',
      'Fine-tuned EmotioNet for facial expression recognition and RoBERTa for transcript analysis',
      'Generated time-series investment likelihood scores (\u20131 to 1) for each second, validated through accuracy of final decision',
    ],
  },
  {
    slug: 'mri-motion-correction-dl',
    title: 'OUR: MRI Motion Correction using Deep Learning Models',
    year: '2024–2025',
    supervisorName: 'Dr. Saurabh Janardan Shigwan',
    supervisorLink: null,
    bullets: [
      'Developing deep learning models to correct MRI motion artifacts in real-time using k-space data',
      'Using image processing and computer vision techniques alongside deep learning for motion artifact correction',
      'Exploring regression techniques and CNNs to improve motion estimation and reduce re-scanning',
      'Aiming to enhance image quality and diagnostic accuracy without requiring image reconstruction',
    ],
  },
];

const sectionAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-headline mb-4">Projects</h1>
        <p className="text-xl text-muted-foreground">
          Research projects, collaborations, and independent work.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.slug}
            {...sectionAnimationProps}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="border border-primary/40 rounded-xl p-6 hover:border-primary transition-all duration-300 bg-card flex flex-col"
          >
            {/* Header row */}
            <div className="flex flex-col gap-1 mb-3">
              <h2 className="text-lg font-semibold text-foreground leading-snug">
                {project.title}
              </h2>
              <span className="text-sm text-muted-foreground">
                {project.year}
              </span>
            </div>

            {/* Supervisor */}
            {project.supervisorName && (
              <div className="flex items-start gap-2 mb-3 text-sm text-muted-foreground">
                <GraduationCap className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <span>
                  Research Supervisor{project.supervisorName.includes('&') ? 's' : ''}:{' '}
                  {project.supervisorLink ? (
                    <a
                      href={project.supervisorLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      {project.supervisorName}
                    </a>
                  ) : (
                    <span>{project.supervisorName}</span>
                  )}
                </span>
              </div>
            )}

            {/* Bullets */}
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-foreground/80 leading-relaxed mb-4 flex-1">
              {project.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>

            {/* Link */}
            <Link
              href={`/projects/${project.slug}/`}
              className="text-primary text-sm font-medium hover:underline underline-offset-4 mt-auto"
            >
              View Full Project &rarr;
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
