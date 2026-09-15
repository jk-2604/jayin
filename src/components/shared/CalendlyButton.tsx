
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CalendarPlus } from 'lucide-react';
import { motion } from 'framer-motion';

const CalendlyButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-6 right-20 z-50" 
    >
      <Button
        asChild
        variant="default" 
        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md shadow-lg" // Changed to rounded-md, default padding will apply
        aria-label="Schedule a meeting on Calendly"
      >
        <Link href="https://calendly.com/jayin-research/30min" target="_blank" rel="noopener noreferrer">
          <CalendarPlus /> {/* Icon will be sized by Button's CSS (size-4) and spaced by gap-2 */}
          Calendly - Let's meet!
        </Link>
      </Button>
    </motion.div>
  );
};

export default CalendlyButton;
