import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Mail, FileText, Linkedin, Github, NotebookText } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';
import { withBasePath } from '@/lib/utils';

const contactLinks = [
  { label: 'Email', href: SOCIAL_LINKS.email, icon: Mail },
  { label: 'CV', href: '/resume', icon: FileText },
  { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, icon: Linkedin },
  { label: 'GitHub', href: SOCIAL_LINKS.github, icon: Github },
  { label: 'Research Notes', href: '/articles', icon: NotebookText },
];

const AboutIntro = () => {
  return (
    <div>
      {/* Hero: photo left, name + intro right */}
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-12 items-start">
        <div className="mx-auto md:mx-0 max-w-[220px] w-full">
          <div className="relative w-full aspect-[3/4] overflow-hidden rounded-md border border-border bg-muted">
            <Image
              src={withBasePath('/images/my-photo.jpeg')}
              alt="Jayin Khanna"
              fill
              className="object-cover"
              data-ai-hint="professional portrait"
            />
          </div>
          <p className="text-center text-sm font-headline font-bold tracking-wider text-gradient-dreams mt-3">
            A HEAD FULL OF DREAMS
          </p>
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-headline text-foreground mb-6">Jayin Khanna</h1>

          <div className="space-y-4 text-base md:text-lg text-foreground/90">
            <p>
              I hold a BSc (Research) in Mathematics from Shiv Nadar Institution of Eminence
              (Batch Topper, 2026), and I&apos;m concurrently completing an online BS in Data
              Science from IIT Madras.
            </p>
            <p>
              I am currently working as a Project Associate at the{' '}
              <a
                href="https://prathosh.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                Deep Representation Learning Lab, IISc
              </a>{' '}
              (
              <a
                href="https://prathosh.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                Dr. Prathosh A. P.
              </a>
              )
            </p>
            <div>
              <p>My current research interests are in</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  <span className="text-primary font-medium">Generative models</span> (Diffusion
                  and Flow matching) — their applications and core theory.
                </li>
                <li>
                  <span className="text-primary font-medium">Interpretability, alignment &amp; safety</span>{' '}
                  in <span className="text-primary font-medium">LLMs</span>
                </li>
              </ul>
            </div>
            <p>
              I am more interested in developing a theory of Deep Learning and understanding why
              methods work before scaling them. My current work is on safety alignment in
              text-to-image/video diffusion and trustworthiness repair in fine-tuned LLMs.
            </p>
            <p>
              I&apos;m looking for a long-term research project aimed at publication at ICLR,
              ICML, NeurIPS, or TMLR.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm font-medium">
            {contactLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') || href.startsWith('mailto') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary hover:underline"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Publications */}
      <div className="mt-14 border-t border-border pt-10">
        <h2 className="text-2xl md:text-3xl font-headline text-foreground mb-6">Publications</h2>
        <div className="border border-border rounded-md p-5 bg-card">
          <p className="text-sm text-foreground/85">
            Kumar Shubham, Devendra Vyas, Vidushi Agarwal, Jayin Khanna, Prathosh AP.{' '}
            <span className="font-medium text-foreground">
              Repairing the Trustworthiness of Distilled Language Models.
            </span>{' '}
            AI4GOOD Workshop @ NeurIPS 2026 [Under Review].
          </p>
        </div>
      </div>

      {/* Current Research */}
      <div className="mt-10 border-t border-border pt-10">
        <h2 className="text-2xl md:text-3xl font-headline text-foreground mb-6">Current Research</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-border rounded-md p-5 bg-card">
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
          <div className="border border-border rounded-md p-5 bg-card">
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

      {/* Education & Honours */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-border rounded-md p-5 bg-card">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/80 mb-3">Education</p>
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

        <div className="border border-border rounded-md p-5 bg-card">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/80 mb-3">Honours &amp; Credits</p>
          <ul className="space-y-2 text-base text-foreground/85">
            <li>
              <a
                href="https://drive.google.com/file/d/13i87-tmIhcjmb_8I0IzB_Dm7drsekaeH/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                Program Batch Topper — SNIoE
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1QZlugsJLmoUqB1r7kUPfDfmEkF4-MJrS/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                2nd Prize, Best Thesis — SNIoE
              </a>
            </li>
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

      {/* Research Interests & Exploring */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-border rounded-md p-5 bg-card">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/80 mb-3">My Research Interests</p>
          <ul className="list-disc pl-5 space-y-1.5 text-foreground/80 text-base">
            <li>Core &amp; applications of Generative Models (DDPMs, Flow Matching); T2I and T2V models</li>
            <li>AI Interpretability and Alignment</li>
            <li>Representation learning</li>
            <li>Unsupervised and self-supervised learning</li>
          </ul>
        </div>

        <div className="border border-border rounded-md p-5 bg-card">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/80 mb-3">Exploring and Self Reading</p>
          <ul className="list-disc pl-5 space-y-1.5 text-foreground/80 text-base">
            <li>Theory of Deep Learning <span className="text-muted-foreground text-sm">(slow steady reading)</span></li>
            <li>Mechanistic Interpretability</li>
            <li>Geometric Deep Learning</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 space-y-6 text-lg text-foreground/90 border-t border-border pt-10">
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
            <li>
              <Link href="/articles/ug-thesis" className="text-primary font-medium hover:underline">
                Generative models for Unsupervised TSM (UG Thesis)
              </Link>
            </li>
            <li>
              <Link href="/articles/csd722-depth-video-gen/" className="text-primary font-medium hover:underline">
                Depth-Conditioned Video Generation using ControlNet &amp; AnimateDiff
              </Link>
            </li>
            <li>
              <Link href="/articles/interpretability-theory" className="text-primary font-medium hover:underline">
                Attribution/interpretability methods
              </Link>{' '}
              (IIT Kharagpur, Prof. Niloy Ganguly)
            </li>
            <li>
              <Link href="/projects/semg-cnn-classification/" className="text-primary font-medium hover:underline">
                Developing ML models for sEMG
              </Link>{' '}
              at DRDO-INMAS
            </li>
            <li>Statistical time-series modeling (UC Santa Cruz ISRP, Prof. Bruno Sansó)</li>
            <li>
              Summer research programs:{' '}
              <Link href="/academic-development#ad_mtts" className="text-primary font-medium hover:underline">
                MTTS 2024
              </Link>{' '}
              and{' '}
              <Link href="/academic-development#ad_polymath" className="text-primary font-medium hover:underline">
                Polymath Jr. 2024, 2025
              </Link>
            </li>
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

      </div>

      <div className="mt-10 flex justify-center md:justify-start">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/contact">
            Let&apos;s Connect! <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default AboutIntro;
