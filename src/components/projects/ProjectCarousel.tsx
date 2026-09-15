
"use client";
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import type { Project } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCarouselProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

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

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects, onProjectClick }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
    },
    [Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })] 
  );
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
        emblaApi.off('select', onSelect);
        emblaApi.off('reInit', onSelect);
    }
  }, [emblaApi, onSelect]);

  if (!projects || projects.length === 0) {
    return <p className="text-muted-foreground text-center py-8">No projects to display.</p>;
  }

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {projects.map((project, index) => (
            <div className="embla__slide" key={project.slug}>
              <motion.div
                custom={index}
                variants={cardVariants}
                initial="initial"
                whileInView="whileInView"
                viewport={cardVariants.viewport}
                className="h-full"
              >
                <Card
                  onClick={() => onProjectClick(project)}
                  className="flex flex-col justify-between shadow-lg border-border hover:border-primary transition-all duration-300 hover:shadow-primary/20 cursor-pointer h-full"
                >
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{project.year}</p>
                    {project.supervisorName && (
                      <div className="text-xs text-muted-foreground flex items-center mt-1">
                        <GraduationCap className="mr-1.5 h-4 w-4 text-accent" />
                        <span>Supervisor: </span>
                        {project.supervisorLink && project.supervisorLink !== '#' ? (
                          <Link href={project.supervisorLink} target="_blank" rel="noopener noreferrer" className="ml-1 text-accent hover:underline" onClick={(e) => e.stopPropagation()}>
                            {project.supervisorName.split('(')[0].trim()}
                          </Link>
                        ) : (
                          <span className="ml-1">{project.supervisorName.split('(')[0].trim()}</span>
                        )}
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 text-xs bg-secondary text-secondary-foreground rounded-full">{tag}</span>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-foreground/80 line-clamp-4">
                      {project.shortAbstract.split('\n')[0]}
                      {project.shortAbstract.split('\n')[1] && ` ${project.shortAbstract.split('\n')[1]}`}
                      {project.shortAbstract.split('\n')[2] && ` ${project.shortAbstract.split('\n')[2]}`}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <span className="text-sm text-primary">Click to learn more</span>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {projects.length > 1 && (
        <>
          <Button
            variant="outline"
            onClick={scrollPrev}
            className="embla__button embla__button--prev"
            disabled={prevBtnDisabled}
            aria-label="Previous project"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            onClick={scrollNext}
            className="embla__button embla__button--next"
            disabled={nextBtnDisabled}
            aria-label="Next project"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {projects.length > 1 && (
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`embla__dot${index === selectedIndex ? ' embla__dot--selected' : ''}`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCarousel;
