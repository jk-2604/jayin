"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const resources = [
  { slug: 'thesis-poster', title: 'Thesis Poster' },
  { slug: 'speech-tsm-gans', title: 'Speech Time Scale Modification with GANs' },
  { slug: 'speech-tsm-gans-presentation', title: 'Speech time-scale modification using GANs- Presentation' },
  { slug: 'statistics-generative-models', title: 'Statistics for Generative models' },
  { slug: 'ddpm-notes', title: 'Denoising Diffusion Probabilistic Models Notes' },
  { slug: 'generative-models-overview', title: 'Generative Models: A Mathematical Overview' },
];

const sectionAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const UGThesisPage = () => {
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
        <h1 className="text-4xl md:text-5xl font-headline mb-4">UG Thesis</h1>
        <p className="text-lg text-foreground/85 leading-relaxed max-w-3xl">
          My undergraduate thesis on{' '}
          <Link href="/articles/thesis-poster/" className="text-primary font-medium hover:underline">
            generative models for unsupervised speech time-scale modification
          </Link>
          , under the joint supervision of Prof. Prasanta Kumar Ghosh (SPIRE Lab, IISc) and
          Prof. Niteesh Sahni (SNIoE), won 2nd Prize for Best UG Thesis. I document this work as
          detailed technical notes rather than leaving it in notebooks, posted on my{' '}
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

export default UGThesisPage;
