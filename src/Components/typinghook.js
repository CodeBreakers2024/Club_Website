// useTypingEffect.js
import { useState, useEffect } from 'react';

const useTypingEffect = (text, typingSpeed = 150, startTyping = true) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (startTyping && index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timer);
    }
  }, [index, text, typingSpeed, startTyping]);

  useEffect(() => {
    if (!startTyping) {
      setDisplayedText('');
      setIndex(0);
    }
  }, [startTyping]);

  return displayedText;
};

export default useTypingEffect;