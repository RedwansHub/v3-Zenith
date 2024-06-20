'use client'

import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdSunny } from "react-icons/md";
import { TiWeatherSunny } from "react-icons/ti";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className='w-fit cursor-pointer hover:bg-white/20 p-2'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5px',
      }}
    >
      {theme === 'light' ? <TiWeatherSunny size={20}/> : <MdSunny size={20}/>}
   
    </div>
  );
};

export default ThemeSwitcher;
