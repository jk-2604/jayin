"use client";
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import RotatingSubtitles from '@/components/home/RotatingSubtitles';

const AboutIntro = () => {
  return (
    <Card className="overflow-hidden shadow-xl">
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-xs aspect-[3/4] mx-auto mb-6 overflow-hidden rounded-lg shadow-lg mt-8">
          <Image
            src="/images/my-photo.jpeg"
            alt="Jayin Khanna"
            fill
            className="object-cover"
            data-ai-hint="professional portrait"
          />
        </div>
        <div className="p-8 md:p-12 text-center md:text-left w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-headline text-primary mb-2">Jayin Khanna</h1>
            <h2 className="text-lg md:text-xl font-headline font-bold tracking-wider text-gradient-dreams mb-4">
              A HEAD FULL OF DREAMS
            </h2>
            <RotatingSubtitles />
          </div>

          <div className="space-y-6 text-lg text-foreground/90">

            {/* Education & Honours cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div className="border border-primary/40 rounded-xl p-5">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary/70 mb-3">Education</p>
                <ul className="space-y-3 text-base text-foreground/85">
                  <li>
                    <span className="font-medium">BSc (Research) in Mathematics</span> — SNIoE, May 2026
                    <br />
                    <span className="text-sm text-muted-foreground">Minor in CSE · Specialisations: AI &amp; ML · Mathematical Finance</span>
                  </li>
                  <li>
                    <span className="font-medium">BS in Data Science &amp; Applications</span> — IIT Madras (ongoing)
                  </li>
                </ul>
              </div>

              <div className="border border-primary/40 rounded-xl p-5">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary/70 mb-3">Honours &amp; Credits</p>
                <ul className="space-y-2 text-base text-foreground/85">
                  <li>Program Batch Topper — SNIoE</li>
                  <li>2nd Prize, Best Thesis — SNIoE</li>
                  <li>
                    238 credits across 4 years (176 SNIoE + 52 IIT Madras) —{' '}
                    <a
                      href="https://drive.google.com/file/d/1FCkHxOlw0dFiy0MQkJ5pmZrJQER-XM9r/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline"
                    >
                      view course list
                    </a>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Research Interests & Exploring cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-border/40 pt-8">

            <div className="border border-primary/40 rounded-xl p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary/70 mb-3">My Research Interests</p>
              <ul className="list-disc pl-5 space-y-1.5 text-foreground/80 text-base">
                <li>Core &amp; applications of Generative Models (DDPMs, Flow Matching); T2I and T2V models</li>
                <li>AI Interpretability and Alignment</li>
                <li>Representation learning</li>
                <li>Unsupervised and self-supervised learning</li>
              </ul>
            </div>

            <div className="border border-primary/40 rounded-xl p-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary/70 mb-3">Exploring</p>
              <ul className="list-disc pl-5 space-y-1.5 text-foreground/80 text-base">
                <li>Theory of Deep Learning <span className="text-muted-foreground text-sm">(slow steady reading)</span></li>
                <li>Mechanistic Interpretability</li>
                <li>Geometric Deep Learning</li>
              </ul>
            </div>

          </div>

          <div className="mt-8 space-y-6 text-lg text-foreground/90 border-t border-border/40 pt-8">

            <p>
              I work on{' '}
              <span className="text-primary font-medium">interpretability, alignment, and safety</span>{' '}
              in{' '}
              <span className="text-primary font-medium">generative models</span>{' '}
              and{' '}
              <span className="text-primary font-medium">LLMs</span>{' '}
              — with a mathematical bias toward understanding why methods work before scaling
              them. My current focus is safety alignment in text-to-image/video diffusion and
              trustworthiness repair in fine-tuned LLMs.
            </p>

            <p>
              I&apos;m looking for a long-term research project aimed at publication at ICLR,
              ICML, NeurIPS, or TMLR.
            </p>

            <div className="border-t border-b border-border/40 py-6">
              <h3 className="text-xl font-headline text-primary mb-4">Current Research</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-primary/40 rounded-xl p-5">
                  <p className="text-sm text-foreground/85">
                    <span className="font-medium text-foreground">
                      Safety-guided flow matching for T2I/T2V diffusion
                    </span>{' '}
                    —{' '}
                    <a
                      href="https://amit.aiisc.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      AI Institute of South Carolina
                    </a>{' '}
                    (
                    <a
                      href="https://amit.aiisc.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Dr. Amit Sheth
                    </a>
                    ,{' '}
                    <a
                      href="https://www.bits-pilani.ac.in/goa/amitava-das/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Dr. Amitava Das
                    </a>
                    ). Developing a safety-potential-guided rectified flow-matching formulation in
                    CLIP embedding space to reduce harmful generations, benchmarked on the DETONATE
                    dataset against TRCE, CURE, SAEUron, and DoCo.
                  </p>
                </div>
                <div className="border border-primary/40 rounded-xl p-5">
                  <p className="text-sm text-foreground/85">
                    <span className="font-medium text-foreground">
                      Post-hoc trustworthiness repair in LLMs
                    </span>{' '}
                    —{' '}
                    <a
                      href="https://prathosh.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Deep Representation Learning Lab, IISc
                    </a>{' '}
                    (
                    <a
                      href="https://prathosh.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Dr. Prathosh A. P.
                    </a>
                    ). Combining EK-FAC curvature estimation with targeted gradient ascent to
                    mitigate bias, unethical outputs, and toxicity in fine-tuned models — a
                    compute-efficient alternative to retraining or RLHF, evaluated across Qwen2 and
                    Pythia with submodular subset selection for non-redundant repair signals.
                  </p>
                </div>
              </div>
            </div>

            <p>
              My undergraduate thesis on{' '}
              <Link href="/articles/thesis-poster/" className="text-primary font-medium hover:underline">
                generative models for unsupervised speech time-scale modification
              </Link>
              , under the joint supervision of Prof. Prasanta Kumar Ghosh (SPIRE Lab, IISc) and
              Prof. Niteesh Sahni (SNIoE), won 2nd Prize for Best UG Thesis. I document this work
              as detailed technical notes rather than leaving it in notebooks, posted on my{' '}
              <Link href="/articles" className="text-primary font-medium hover:underline">
                Research page
              </Link>{' '}
              (
              <Link href="/articles/ddpm-notes/" className="text-primary font-medium hover:underline">
                DDPMs
              </Link>
              ,{' '}
              <Link href="/articles/variational-autoencoders/" className="text-primary font-medium hover:underline">
                VAEs
              </Link>
              ,{' '}
              <Link href="/articles/generative-models-overview/" className="text-primary font-medium hover:underline">
                GANs
              </Link>
              ,{' '}
              <Link href="/articles/contrastive-learning-simclr-ijepa/" className="text-primary font-medium hover:underline">
                contrastive learning
              </Link>
              ).
            </p>

            <div>
              <p className="mb-2">My prior research spans:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-foreground/85">
                <li>Generative models for Unsupervised TSM</li>
                <li>Depth-Conditioned Video Generation using ControlNet &amp; AnimateDiff</li>
                <li>Attribution/interpretability methods (IIT Kharagpur, Prof. Niloy Ganguly)</li>
                <li>Developing ML models for sEMG at DRDO-INMAS</li>
                <li>Statistical time-series modeling (UC Santa Cruz ISRP, Prof. Bruno Sansó)</li>
                <li>Summer research programs: MTTS 2024 and Polymath Jr. 2024, 2025</li>
              </ul>
            </div>

            <p>
              I love doing research! Check out my{' '}
              <Link href="/academic-development" className="text-primary font-medium hover:underline">
                Academic Development
              </Link>
              {' '}&amp;{' '}
              <Link href="/projects" className="text-primary font-medium hover:underline">
                Projects
              </Link>
              .
            </p>

            <p>
              If you have cool project ideas, or want to discuss thought experiments or ideologies —
              regardless of the domain — and want to collaborate,{' '}
              <Link href="/contact" className="text-primary font-medium hover:underline">
                ping me
              </Link>
              ! I am always looking forward to interesting stuff!
            </p>
          </div>

          <div className="mt-10 flex justify-center md:justify-start">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">
                Let&apos;s Connect! <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </Card>
  );
};

export default AboutIntro;
