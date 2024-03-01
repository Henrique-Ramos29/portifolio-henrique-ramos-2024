import React, { useState, useEffect } from 'react';
import './index.css';

const AutoTyping = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(typingInterval); // Parar quando todo o texto for digitado
      }
    }, speed);

    return () => clearInterval(typingInterval); // Limpar intervalo quando o componente desmontar
  }, [text, currentIndex, speed]);

  return <span className='textoDigitando'>{displayText}</span>;
};

const EfeitoText = () => {
  return (
    <div>
      <h1>OI, MEU NOME É HENRIQUE RAMOS</h1>
      <AutoTyping text="Sou Desenvolvendor Front-end Jr" speed={130} />
    </div>
  );
};

export default EfeitoText;
