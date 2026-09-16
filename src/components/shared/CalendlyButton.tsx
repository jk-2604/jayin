
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CalendarPlus } from 'lucide-react';

const CalendlyButton = () => {
  return (
    <div className="fixed bottom-6 right-20 z-50">
      <Button
        asChild
        variant="default"
        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md shadow-lg"
        aria-label="Schedule a meeting on Calendly"
      >
        <Link href="https://calendly.com/jayin-research/30min" target="_blank" rel="noopener noreferrer">
          <CalendarPlus />
          Calendly - Let&apos;s meet!
        </Link>
      </Button>
    </div>
  );
};

export default CalendlyButton;
