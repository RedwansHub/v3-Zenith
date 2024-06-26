'use client'

import React, { useState, useEffect } from 'react';

interface CounterProps {
  complete: (done: boolean) => void; 
  initialSpeed: number; // Speed in milliseconds for the initial phase (0-40)
  finalSpeed: number;   
}

const Counter: React.FC<CounterProps> = ({ initialSpeed, finalSpeed, complete }) => {
  const [count, setCount] = useState<number>(0);

  
  useEffect(() => {

    const getSpeed = (currentCount: number) => {
        return currentCount < 60 ? initialSpeed : finalSpeed;
    };
  
    const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount >= 100) {
            clearInterval(interval);
            complete(true);
            return 100;
          }
          return prevCount + 1;
        });
      }, getSpeed(count));
  
      return () => clearInterval(interval);
    }, [count, initialSpeed, finalSpeed, complete]);

  return (
    <div>
      <p className='text-[#033F63] text-2xl font-semibold'>{count}%</p>
    </div>
  );
};

export default Counter;
