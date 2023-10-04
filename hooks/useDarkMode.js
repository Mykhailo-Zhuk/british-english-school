'use client';

import { useEffect } from 'react';

export const useDarkMode = (enable = false) => {
  useEffect(() => {
    if (enable) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [enable]);
};
