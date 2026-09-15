"use client";

import { useKeyPress } from '@/hooks/useKeyPress';
import { useSearchModal } from '@/hooks/useSearchModal';
import GlobalSearchModal from './GlobalSearchModal';

const GlobalSearchModalListener = () => {
  const { openModal, isOpen } = useSearchModal();
  
  useKeyPress('/', () => {
    openModal();
  });

  return isOpen ? <GlobalSearchModal /> : null;
};

export default GlobalSearchModalListener;
