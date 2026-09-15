"use client";
import { useContext } from 'react';
import { SearchModalContext } from '@/contexts/SearchModalContext';

export const useSearchModal = () => {
  const context = useContext(SearchModalContext);
  if (context === undefined) {
    throw new Error('useSearchModal must be used within a SearchModalProvider');
  }
  return context;
};
