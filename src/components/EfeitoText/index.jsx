import React, { useState, useEffect } from 'react';
import './index.css';

const AutoTyping = ({ phrases, speed }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < phrases[currentPhraseIndex].length) {
        setDisplayText(prevText => prevText + phrases[currentPhraseIndex][currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(typingInterval); // Parar quando todo o texto for digitado
        // Reiniciar o processo de digitação
        setTimeout(() => {
          setDisplayText('');
          setCurrentIndex(0);
          setCurrentPhraseIndex(prevIndex => (prevIndex + 1) % phrases.length); // Avançar para a próxima frase
        }, 2000); // Intervalo de espera antes de reiniciar (em milissegundos)
      }
    }, speed);

    return () => clearInterval(typingInterval); // Limpar intervalo quando o componente desmontar
  }, [phrases, currentIndex, currentPhraseIndex, speed]);

  return <span className='textoDigitando'>{displayText}</span>;
};
const EfeitoText = () => {
  return (
    <div>
      <h1>OI, MEU NOME É HENRIQUE RAMOS</h1>
      <AutoTyping  phrases={["Sou Desenvolvedor Front-end Jr", "Estou aprendendo novas tecnologias", 
      "JavaScript, React, Php e Mysql"]} speed={150}/>
    </div>
  );
};

export default EfeitoText;
