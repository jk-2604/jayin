// src/components/analytics/GoogleAnalyticsEvents.tsx
'use client';
declare global { interface Window { gtag: (...args: unknown[]) => void } }

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { GA_TRACKING_ID } from '@/lib/gtag';

const GoogleAnalyticsEvents = (): null => {
  const pathname = usePathname();

  useEffect(() => {
    if (GA_TRACKING_ID && typeof window.gtag === 'function') {
      // This command sends a page_view event for Single Page Application navigations.
      // The initial page_view is handled by the gtag('config') script in layout.tsx.
      window.gtag('config', GA_TRACKING_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
};

export default GoogleAnalyticsEvents;
