
"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { ExperienceItem } from '@/app/experience/page';

interface ExperienceCarouselProps {
  experiences: ExperienceItem[];
  onCardClick: (experience: ExperienceItem) => void;
  renderCardContent: (experience: ExperienceItem) => React.ReactNode;
}

const ExperienceCarousel: React.FC<ExperienceCarouselProps> = ({ experiences, onCardClick, renderCardContent }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false, // Set to false if you don't want infinite looping
    align: 'start',
  });
  
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  if (!experiences || experiences.length === 0) {
    return <p className="text-muted-foreground text-center py-8">No experiences to display.</p>;
  }

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {experiences.map((experience) => (
            <div className="embla__slide" key={experience.id}>
               {/* We render the card content passed as a prop, making this component reusable */}
               {renderCardContent(experience)}
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        onClick={scrollPrev}
        className="embla__button embla__button--prev"
        disabled={prevBtnDisabled}
        aria-label="Previous experience"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        onClick={scrollNext}
        className="embla__button embla__button--next"
        disabled={nextBtnDisabled}
        aria-label="Next experience"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`embla__dot${index === selectedIndex ? ' embla__dot--selected' : ''}`}
            aria-label={`Go to experience ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceCarousel;

    