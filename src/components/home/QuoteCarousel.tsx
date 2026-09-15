"use client";
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { CurateQuotesOutput } from '@/ai/flows/curate-quotes';

interface QuoteCarouselProps {
  initialQuotes: CurateQuotesOutput['quotes'];
}

const QuoteCarousel = ({ initialQuotes }: QuoteCarouselProps) => {
  const [quotes, setQuotes] = useState<string[]>(initialQuotes);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // In a real app, you might fetch new quotes periodically or on user action
    // For now, we just use the initialQuotes passed from the server component
    setQuotes(initialQuotes);
  }, [initialQuotes]);

  if (!quotes || quotes.length === 0) {
    return (
      <div className="text-center py-10 text-muted-foreground">
        Loading inspirational quotes...
      </div>
    );
  }

  const nextQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
  };

  return (
    <motion.section 
      className="py-16 md:py-24 bg-card/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-headline text-center mb-12 text-primary">
          Words of Wisdom
        </h2>
        <div className="relative">
          <Card className="bg-card border-border shadow-xl overflow-hidden">
            <CardContent className="p-8 min-h-[200px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-xl md:text-2xl italic text-foreground/90 mb-4">
                    "{quotes[currentIndex]}"
                  </p>
                  {/* Author can be added if provided by the AI flow */}
                </motion.blockquote>
              </AnimatePresence>
            </CardContent>
          </Card>
          {quotes.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={prevQuote}
                className="absolute left-[-10px] md:left-[-60px] top-1/2 -translate-y-1/2 text-primary hover:text-primary/80"
                aria-label="Previous quote"
              >
                <ChevronLeft size={32} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextQuote}
                className="absolute right-[-10px] md:right-[-60px] top-1/2 -translate-y-1/2 text-primary hover:text-primary/80"
                aria-label="Next quote"
              >
                <ChevronRight size={32} />
              </Button>
            </>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default QuoteCarousel;
