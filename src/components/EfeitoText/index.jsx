import React, { useState, useEffect } from 'react';
import './index.css';

const AutoTyping = ({ phrases, speed, eraseSpeed, delay }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? eraseSpeed : speed);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, phrases, speed, eraseSpeed, delay, typingSpeed]);

  return (
    <span className="typing-container">
      {displayText}
      <span className="cursor">|</span>
    </span>
  );
};

const EfeitoText = () => {
  const frasesPortifolio = [
    "Sou Desenvolvedor Front-end Jr",
    "Especialista em React.js & Vite",
    "Desenvolvedor Mobile (React Native)",
    "Especialista em Firebase (NoSQL & Real-time)",
    "Integração de Dados com MySQL & Cloud Firestore",
    "Transformando ideias em código"
  ];

  return (
    <div className="efeito-text-container">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="nome-titulo"
      >
        OI, EU SOU <span className="destaque-nome">HENRIQUE RAMOS</span>
      </motion.h1>

      <div className="subtitulo-typing">
        <span className="prefixo">&gt; </span>
        <AutoTyping
          phrases={frasesPortifolio}
          speed={100}
          eraseSpeed={50}
          delay={2000}
        />
      </div>
    </div>
  );
};

// Importação do motion caso não tenha no arquivo
import { motion } from 'framer-motion';

export default EfeitoText;