"use client";
import { useSearchModal } from '@/hooks/useSearchModal';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';

const GlobalSearchModal = () => {
  const { isOpen, closeModal } = useSearchModal();
  const [searchTerm, setSearchTerm] = useState('');
  // Placeholder for search results
  const [results, setResults] = useState<string[]>([]); 

  useEffect(() => {
    if (isOpen) {
      // Focus input when modal opens
      setTimeout(() => {
        document.getElementById('global-search-input')?.focus();
      }, 100);
    } else {
      setSearchTerm('');
      setResults([]);
    }
  }, [isOpen]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // Implement search logic here
    // For now, just a placeholder
    if (e.target.value.length > 2) {
      setResults([`Result for "${e.target.value}" 1`, `Result for "${e.target.value}" 2`]);
    } else {
      setResults([]);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="sm:max-w-[600px] bg-popover border-border text-popover-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline text-primary">Search Portfolio</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Find articles, projects, and more across the site.
          </DialogDescription>
        </DialogHeader>
        <div className="relative mt-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            id="global-search-input"
            type="search"
            placeholder="Type to search..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-10 h-12 text-lg bg-input border-input-border focus:border-primary"
          />
        </div>
        <div className="mt-6 max-h-[40vh] overflow-y-auto">
          {searchTerm && results.length === 0 && (
            <p className="text-muted-foreground text-center py-4">No results found for "{searchTerm}".</p>
          )}
          {results.length > 0 && (
            <ul className="space-y-2">
              {results.map((result, index) => (
                <li key={index} className="p-3 rounded-md hover:bg-accent/50 transition-colors cursor-pointer">
                  {result}
                </li>
              ))}
            </ul>
          )}
          {!searchTerm && (
             <p className="text-muted-foreground text-center py-4">Start typing to see results.</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GlobalSearchModal;
