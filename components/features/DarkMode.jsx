import { Button } from '@/components/ui/button';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useState, useEffect } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const DarkMode = () => {
  const [enableDark, setEnableDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
      setEnableDark(true);
    } else {
      setEnableDark(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = enableDark ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    setEnableDark((prevState) => !prevState);
  };

  useDarkMode(enableDark);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleDarkMode}
      className="dark:hover:text-white dark:text-slate-400 text-slate-900">
      {enableDark ? <BsFillSunFill className="h-4 w-4" /> : <BsFillMoonFill className="h-4 w-4" />}
    </Button>
  );
};

export default DarkMode;
