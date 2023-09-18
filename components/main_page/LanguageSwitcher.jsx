'use client';

import { useState } from 'react';

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState('ua');

  const changeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <select
      onChange={changeLanguage}
      defaultValue="ua"
      className="flex h-9 w-full items-center justify-evenly rounded-md hover:border hover:border-input bg-transparent p-1 text-sm hover:shadow-sm ring-offset-background focus:outline-none focus:ring-1 focus:ring-ring">
      <option value="ua">UK</option>
      <option value="en">EN</option>
    </select>
  );
};

export default LanguageSwitcher;
