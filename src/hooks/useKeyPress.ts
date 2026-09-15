"use client";
import { useEffect, useCallback } from 'react';

export const useKeyPress = (targetKey: string, callback: () => void, modifierKey?: 'ctrlKey' | 'metaKey' | 'altKey' | 'shiftKey') => {
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const isModifierPressed = modifierKey ? event[modifierKey] : true; // If no modifier, consider it pressed.
      if (event.key === targetKey && isModifierPressed) {
        // Prevent default for common shortcuts like '/' for browser search
        if (targetKey === '/' && !(event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement)) {
          event.preventDefault();
        }
        callback();
      }
    },
    [targetKey, callback, modifierKey]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);
};
