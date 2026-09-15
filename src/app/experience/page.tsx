"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import { GraduationCap, CalendarDays } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import ExperienceCarousel from '@/components/experience/ExperienceCarousel';
import placeholderImages from '@/app/lib/placeholder-images.json';

const experienceData = [
  {
    id: 'exp_iisc_drl_1',
    role: 'Research Assistant',
    institution: 'Deep Representation Learning Lab, Indian Institute of Science (IISc), Bangalore',
    logoSrc: '/images/iisc-drl-logo.png',
    logoAlt: 'IISc Deep Representation Learning Lab Logo',
    dataAiHint: 'university research lab',
    supervisor: 'Dr. Prathosh A. P.',
    supervisorLink: '#',
    period: 'Jun 2026 – Present',
    description: [
      'Working on enhancing trustworthiness in fine-tuned LLMs by implementing the EK-FAC preconditioned gradient ascent pipeline for post-hoc bias repair in Qwen2 and Pythia LLMs using Dolly for curvature estimation and CrowS-Pairs for targeted repair gradients.',
      'Evaluating the repair pipeline across multiple model families, integrating submodular subset selection to reduce redundancy in gradient signals without downstream performance degradation.',
      'Evaluating effectiveness of repair across stereotype, machine ethics, and toxicity dimensions, tracking agreeability index, ethics accuracy, and toxicity log-probability before and after repair.'
    ],
    links: [],
    badges: ['LLM Trustworthiness', 'EK-FAC', 'Bias Repair', 'Interpretability', 'Deep Learning']
  },
  {
    id: 'exp_aiisc_1',
    role: 'Research Intern',
    institution: 'IRT Group, AI Institute of South Carolina | DETONATE Group',
    logoSrc: '/images/aiisc_logo.png',
    logoAlt: 'AIISC Logo',
    dataAiHint: 'university research lab',
    supervisor: 'Dr. Amit Sheth & Dr. Amitava Das',
    supervisorLink: 'https://aiisc.ai/',
    period: 'Feb 2026 – Present',
    description: [
      'Working on safety alignment of Text-to-Image & T2V diffusion and flow matching models using a neurosymbolic approach called scene graphs.',
      'Developing a novel methodology to reduce hate content in T2I Diffusion models using a safety potential-guided rectified flow matching in the CLIP embedding space.',
      'Benchmarked debiasing and safety methodologies — TRCE, CURE, SAEUron, and DoCo — on lab\u2019s DETONATE dataset.'
    ],
    links: [],
    badges: ['T2I/T2V Diffusion', 'Safety Alignment', 'Flow Matching', 'DETONATE Dataset', 'Deep Learning']
  },
  {
    id: 'exp_iisc_1',
    role: 'Machine Learning Research Fellow',
    institution: 'SPIRE Lab, Indian Institute of Science (IISc) Bangalore',
    logoSrc: '/images/spire-lab-logo.jpg',
    logoAlt: 'SPIRE Lab Logo',
    dataAiHint: 'university campus science',
    supervisor: 'Prof. Prasanta Kumar Ghosh',
    supervisorLink: '#',
    period: 'Jul 2025 – Present (Summer Research Fellowship 2025)',
    description: [
      'Research on unsupervised speech TSM using Generative Models. Working with VAEs, GANs, Diffusion, and Flow Matching based speech TSM models to preserve speaker identity, naturalness and intelligibility.',
      'Implemented and trained DiffATSM, ScalerGAN, TSM-Net and Neural ATSM from scratch in PyTorch, improving upon previous ScalerGAN results through better alignment and denoising processes.',
      'Tested and analyzed ScalerGAN duration accuracy (MSE = 0.00957, correlation = 0.638) against MFA ground truth, revealing phoneme-level misalignments.',
      'Conducted a comprehensive study of 10 models across 3 methodology classes on 19 experiments, evaluating Pitch Error, MCD, STOI, and LSD across diverse acoustic conditions.',
      'Currently implementing Rectified Flow Matching and Diffusion to reduce inference time and further improve model accuracy.'
    ],
    links: [{ label: 'Project Report', url: '#' }],
    badges: ['Speech Processing', 'GANs', 'Diffusion', 'Flow Matching', 'Time-Scale Modification']
  },
  {
    id: 'exp_iitkgp_1',
    role: 'Deep Learning Research Intern',
    institution: 'Indian Institute of Technology (IIT) Kharagpur',
    logoSrc: '/images/iit-kgp-logo.png',
    logoAlt: 'IIT Kharagpur Logo',
    dataAiHint: 'university building india',
    supervisor: 'Dr. Niloy Ganguly',
    supervisorLink: '#',
    period: '2025',
    description: [
      'Worked on developing attribution techniques using Integrated gradients, Manifold IG, Guided IG towards neural network interpretability.',
      'Currently extending these methods to sequential models and large language models (LLMs) using Granger causality and Randomized Path Integrals.',
      'Reproduced the results of Integrated gradients and Manifold Integrated gradients and tested a new methodology on MIG to improve performance.',
      'Future work involves computer vision applications.'
    ],
    links: [],
    badges: ['Explainable AI', 'Attribution Methods', 'Integrated Gradients', 'LLMs', 'Deep Learning']
  },
  {
    id: 'exp_jk_1',
    role: 'Machine Learning Research Intern',
    institution: 'Institute of Nuclear Medicine and Allied Sciences-DRDO, Ministry of Defence',
    logoSrc: '/images/drdo-inmas-logo.png',
    logoAlt: 'DRDO INMAS Logo',
    dataAiHint: 'government research',
    supervisor: 'Dr. Shilpi Modi',
    supervisorLink: 'https://www.researchgate.net/profile/Shilpi-Modi',
    period: '2024',
    description: [
      'Developed a Convolutional Neural Network (CNN) ResNet model for classifying sEMG stress measurements, focusing on improving accuracy and generalization.',
      'Preprocessed sEMG data using PyEMGPipeline, determining that raw data provided better performance for CNN classification.',
      'Improved model accuracy from 91% to 97.98% with ResNet architecture, achieving 98% overall accuracy and near-perfect precision, recall, and F1 scores.',
      'Implemented AlexNet architecture into the model to further enhance accuracy.',
      'Currently incorporating and optimizing sequence models such as RNNs and LSTMs to improve classification performance and generalizability with expanded and reacquired datasets.',
      'Research work selected for a presentation in the SUMMIT 2.0 Conference.'
    ],
    links: [
      { label: 'Certificate', url: '#' },
      { label: 'Project Report', url: '#' },
      { label: 'Conference Certificate', url: '#' }
    ],
    badges: ['Machine Learning', 'CNN', 'sEMG Classification', 'ResNet', 'RNNs', 'LSTMs']
  },
  {
    id: 'exp_jk_2',
    role: 'Machine Learning Research Intern',
    institution: 'Institute of Nuclear Medicine and Allied Sciences-DRDO, Ministry of Defence',
    logoSrc: '/images/drdo-inmas-logo.png',
    logoAlt: 'DRDO INMAS Logo',
    dataAiHint: 'government research',
    supervisor: 'Dr. Shilpi Modi',
    supervisorLink: 'https://www.researchgate.net/profile/Shilpi-Modi',
    period: 'Present',
    description: [
      'Working on the application of network control theory to understand cognitive state transitions in the brain.',
      'Developing deep learning models to extract insights from diffusion spectrum imaging (DSI) and diffusion tensor imaging (DTI) data.',
      'Implementing graph neural networks (GNNs) to study the role of hubs and weakly connected regions in cognitive function.'
    ],
    links: [],
    badges: ['Cognitive Neuroscience', 'Deep Learning', 'GNNs', 'DSI/DTI Analysis', 'Network Control Theory']
  },
  {
    id: 'exp_jk_3',
    role: 'Statistics Research Intern',
    institution: 'University of California Santa Cruz, CA (ISRP)',
    logoSrc: '/images/UCSC.png',
    logoAlt: 'UCSC Logo',
    dataAiHint: 'university campus',
    supervisor: 'Prof. Bruno Sans\u00f3',
    supervisorLink: 'https://users.soe.ucsc.edu/~bruno/',
    period: '2024',
    description: [
      'Conducted advanced research in Analysis of Time-Varying Quantiles for Environmental Variables, under the mentorship of Professor Dr. Bruno Sans\u00f3.',
      'Focused on developing and applying statistical methodologies to environmental data, specifically in the context of Atmospheric Rivers along the California coast.',
      'Gained expertise in data analysis, statistical modelling, and interpretation of time-varying quantiles.',
      'Performed data pre-processing and statistical analysis of time series data of NetCDF files using Python libraries: statsmodels, NumPy, Pandas, Matplotlib.'
    ],
    links: [],
    badges: ['Statistics', 'Environmental Data', 'Time Series Analysis', 'Python', 'NetCDF']
  },
  {
    id: 'exp_jk_4',
    role: 'Machine Learning Intern',
    institution: 'RightProfile by Syntellect',
    logoSrc: '/images/sytellect.jpg',
    logoAlt: 'RightProfile Logo',
    dataAiHint: 'tech company',
    supervisor: undefined,
    period: 'Dec 2024 – Present',
    description: [
      'Part of the Research and Development team to develop Computer Vision and Deep Learning models to automate the annotation of 10,000+ raw images.',
      'Conducting R&D on object detection models such as YOLOv8, YOLOv5, Detectron2, and Faster R-CNN to retrain and enhance performance of the existing model.'
    ],
    links: [],
    badges: ['Computer Vision', 'Object Detection', 'Deep Learning', 'YOLO', 'Detectron2']
  },
  {
    id: 'exp_jk_5',
    role: 'Machine Learning Intern',
    institution: 'The Habitats Trust',
    logoSrc: '/images/THT.jpg',
    logoAlt: 'The Habitats Trust Logo',
    dataAiHint: 'conservation organization',
    supervisor: undefined,
    period: 'Dec 2024 – Present',
    description: [
      'Conducting research and development on modern Computer Vision and object detection models such as MegaDetector, Zamba, and Timelapse to classify and analyze wildlife in camera trap images.',
      'Part of the Tech4Conservation Project.'
    ],
    links: [{ label: 'Certificate', url: '#' }],
    badges: ['Wildlife AI', 'Computer Vision', 'Conservation Tech', 'Object Detection', 'MegaDetector']
  }
];

export type ExperienceItem = typeof experienceData[0];

const sectionAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: {
    delay: 0.1,
    duration: 0.5,
    ease: "easeInOut",
  },
};


const ExperiencePageContent = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentExperience, setCurrentExperience] = useState<ExperienceItem | null>(null);
  const isMobile = useIsMobile();

  const handleOpenDialog = (exp: ExperienceItem) => {
    setCurrentExperience(exp);
    setDialogOpen(true);
  };

  const renderGrid = () => (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {experienceData.map((exp, index) => (
        <motion.div
          key={exp.id}
          custom={index}
          variants={cardVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
          className="h-full flex flex-col"
        >
          {renderCard(exp)}
        </motion.div>
      ))}
    </div>
  );

  const renderCard = (exp: ExperienceItem) => (
      <div
        className="p-6 rounded-lg border border-border bg-card shadow-lg hover:shadow-primary/20 hover:border-primary transition-all duration-300 cursor-pointer flex-grow flex flex-col h-full"
        onClick={() => handleOpenDialog(exp)}
      >
        <div className="flex items-start space-x-4 mb-3">
          {exp.logoSrc && (
            <div className="flex-shrink-0 pt-1">
              <Image
                src={exp.logoSrc}
                alt={exp.logoAlt || `${exp.institution} logo`}
                width={80}
                height={40}
                className="rounded object-contain"
                data-ai-hint={exp.dataAiHint}
              />
            </div>
          )}
          <div className="flex-grow">
            <h2 className="text-xl font-headline text-primary mb-1">{exp.role}</h2>
            <p className="text-md font-medium text-foreground/90 mb-1">{exp.institution}</p>
          </div>
        </div>
        {exp.supervisor && (
          <p className="text-sm text-muted-foreground mb-1 flex items-start">
            <GraduationCap size={16} className="mr-1.5 text-accent flex-shrink-0 mt-0.5" />
            <span className="mr-1">Supervisor:</span>
            {exp.supervisorLink && exp.supervisorLink !== "#" ? (
              <Link href={exp.supervisorLink} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline inline-block" onClick={(e) => e.stopPropagation()}>
                {exp.supervisor}
              </Link>
            ) : (
              <span className="inline-block">{exp.supervisor}</span>
            )}
          </p>
        )}
        <p className="text-sm text-muted-foreground mb-2 flex items-center">
          <CalendarDays size={15} className="mr-1.5 text-accent flex-shrink-0" />
          <span className="mr-1">Period:</span> {exp.period}
        </p>
        <p className="text-sm text-foreground/90 line-clamp-3 mt-2 flex-grow">
          {exp.description[0]}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {exp.badges.slice(0, 3).map(badge => (
            <span key={badge} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">{badge}</span>
          ))}
          {exp.badges.length > 3 && <span className="px-2 py-1 text-xs bg-secondary/70 text-secondary-foreground rounded-full">...</span>}
        </div>
      </div>
  );


  return (
    <div id="experience-section" className="container mx-auto px-4 py-12 md:py-20">
      <motion.header {...sectionAnimationProps} className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline mb-4">My Experience</h1>
      </motion.header>

      {isMobile === undefined ? (
        <div className="text-center py-10">Loading...</div>
      ) : isMobile ? (
        <ExperienceCarousel experiences={experienceData} onCardClick={handleOpenDialog} renderCardContent={renderCard} />
      ) : (
        renderGrid()
      )}


      {currentExperience && (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <div className="flex items-start space-x-4 mb-2">
                {currentExperience.logoSrc && (
                  <div className="flex-shrink-0 pt-1">
                    <Image
                      src={currentExperience.logoSrc}
                      alt={currentExperience.logoAlt || `${currentExperience.institution} logo`}
                      width={100}
                      height={50}
                      className="rounded object-contain"
                      data-ai-hint={currentExperience.dataAiHint}
                    />
                  </div>
                )}
                <div className="flex-grow">
                  <DialogTitle className="text-2xl font-headline text-primary mb-1">{currentExperience.role}</DialogTitle>
                  <DialogDescription className="text-lg font-medium text-foreground/90">
                    {currentExperience.institution}
                  </DialogDescription>
                </div>
              </div>
              {currentExperience.supervisor && (
                <p className="text-sm text-muted-foreground mt-1 flex items-start">
                  <GraduationCap size={16} className="mr-1.5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="mr-1">Supervisor:</span>
                  {currentExperience.supervisorLink && currentExperience.supervisorLink !== "#" ? (
                    <Link href={currentExperience.supervisorLink} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline inline-block">
                      {currentExperience.supervisor}
                    </Link>
                  ) : (
                    <span className="inline-block">{currentExperience.supervisor}</span>
                  )}
                </p>
              )}
              <p className="text-sm text-muted-foreground flex items-center">
                <CalendarDays size={15} className="mr-1.5 text-accent flex-shrink-0" />
                 <span className="mr-1">Period:</span> {currentExperience.period}
              </p>
            </DialogHeader>

            <ScrollArea className="max-h-[50vh] pr-4 my-4 text-sm">
              <ul className="list-disc list-outside pl-5 space-y-1.5 text-foreground/90">
                {currentExperience.description.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
              {currentExperience.links && currentExperience.links.length > 0 && (
                <div className="mt-4 pt-3 border-t border-border/50">
                  <h4 className="font-semibold mb-2 text-foreground">Links:</h4>
                  {currentExperience.links.map((link, i) => (
                    <Button key={i} asChild variant="link" className="text-accent p-0 h-auto mr-4 mb-1">
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.label} &rarr;
                        </a>
                    </Button>
                  ))}
                </div>
              )}
              <div className="mt-4 pt-3 border-t border-border/50">
                 <h4 className="font-semibold mb-2 text-foreground">Key Areas:</h4>
                <div className="flex flex-wrap gap-2">
                    {currentExperience.badges.map(badge => (
                    <span key={badge} className="px-2.5 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">{badge}</span>
                    ))}
                </div>
              </div>
            </ScrollArea>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ExperiencePageContent;
