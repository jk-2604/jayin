
"use client";
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Search, Menu } from 'lucide-react';
import { useSearchModal } from '@/hooks/useSearchModal';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const { openModal } = useSearchModal();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Added 'relative' to the container for absolute positioning of nav */}
      <div className="container relative flex h-16 max-w-screen-2xl items-center">
        {/* Name (Left side) */}
        <div className="flex-none">
          <Link href="/" className="font-headline text-2xl md:text-3xl font-bold text-primary">
            Jayin Khanna
          </Link>
        </div>

        {/* Navigation Links (Centrally aligned using absolute positioning) */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center space-x-6 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-primary"
                  layoutId="underline"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Icons (Right side, pushed by ml-auto) */}
        <div className="flex-none ml-auto flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={openModal} aria-label="Open search">
            <Search className="h-5 w-5" />
          </Button>
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-6">
                <nav className="flex flex-col space-y-4 mt-8">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg text-foreground/80 hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
