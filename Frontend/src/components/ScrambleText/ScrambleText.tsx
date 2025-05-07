'use client';
import React, { useEffect, useState } from 'react';

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

const getRandomChar = () => characters[Math.floor(Math.random() * characters.length)];

interface ScrambleTextProps {
  texts: string[];
  interval?: number; 
  scrambleDuration?: number; 
  className?: string;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({
  texts,
  interval = 3000,
  scrambleDuration = 800,
  className = ''
}) => {
  const [displayText, setDisplayText] = useState(texts[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let scrambleInterval: NodeJS.Timeout;

    const scramble = (target: string) => {
      let frame = 0;
      scrambleInterval = setInterval(() => {
        const scrambled = target
          .split('')
          .map((char, i) => (i < frame ? char : getRandomChar()))
          .join('');
        setDisplayText(scrambled);
        frame++;
        if (frame > target.length) clearInterval(scrambleInterval);
      }, 100);
    };

    timeout = setTimeout(() => {
      const nextIndex = (index + 1) % texts.length;
      scramble(texts[nextIndex]);
      setTimeout(() => {
        setDisplayText(texts[nextIndex]);
        setIndex(nextIndex);
      }, scrambleDuration);
    }, interval);

    return () => {
      clearTimeout(timeout);
      clearInterval(scrambleInterval);
    };
  }, [index, interval, scrambleDuration, texts]);

  return <p className="text-subtitle">{displayText}</p>;
};

export default ScrambleText;
