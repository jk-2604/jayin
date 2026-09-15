"use client";
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const sectionAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const ResumePage = () => {
  return (
    <div className="container mx-auto py-20 md:py-32 flex flex-col items-center justify-center text-center min-h-[calc(100vh-10rem)]">
      <motion.div {...sectionAnimationProps}>
        <FileText className="h-24 w-24 text-primary mb-8" />
        <h1 className="text-4xl md:text-5xl font-headline mb-6 text-primary">
          CV
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground">
          Coming Soon!
        </p>
        <p className="text-lg text-muted-foreground mt-4">
          For a copy of my formal CV, please email me.
        </p>
      </motion.div>
    </div>
  );
};

export default ResumePage;
