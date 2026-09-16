
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SearchModalProvider } from '@/contexts/SearchModalContext';
import GlobalSearchModalListener from '@/components/search/GlobalSearchModalListener';
import CalendlyButton from '@/components/shared/CalendlyButton';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import { GA_TRACKING_ID } from '@/lib/gtag';
import GoogleAnalyticsEvents from '@/components/analytics/GoogleAnalyticsEvents';
import { ThemeProvider } from '@/components/layout/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  variable: '--font-inter',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  title: 'Portfolio | Jayin Khanna',
  description: 'Personal website of Jayin Khanna - Researcher in AI, Mathematics, and Mind.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`} suppressHydrationWarning>
      {/* Google Analytics Scripts */}
      {GA_TRACKING_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}
      <body className="font-body antialiased bg-background text-foreground min-h-screen flex flex-col" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <SearchModalProvider>
            {GA_TRACKING_ID && <GoogleAnalyticsEvents />}
            <GlobalSearchModalListener />
            <Header />
            <div className="flex-grow">
              {children}
            </div>
            <Footer /> {/* ScrollToTopButton is inside Footer */}
            <CalendlyButton /> {/* Add Calendly button here */}
            <Toaster />
          </SearchModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
