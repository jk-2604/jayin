"use client";
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ROTATING_SUBTITLES } from '@/lib/constants';

const RotatingSubtitles = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % ROTATING_SUBTITLES.length);
    }, 3000); // Change subtitle every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const currentSubtitle = ROTATING_SUBTITLES[index];
  const isSpecialBold = currentSubtitle.includes("I love applying it everywhere");

  return (
    <div className="relative flex min-h-[4.5rem] items-center justify-center overflow-hidden md:h-10">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentSubtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className={`text-lg text-muted-foreground text-center md:text-xl font-medium`}
        >
          {currentSubtitle}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default RotatingSubtitles;
