import React, { useContext } from 'react';
import { WiDaySunny, WiMoonWaningCrescent3 } from "react-icons/wi";
import { ThemeContext } from '../ThemeContext';
import './index.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    
      <li className='buttonTheme' onClick={toggleTheme}>
        {theme === 'light' ? <WiMoonWaningCrescent3 size={30} /> : <WiDaySunny size={30} />}
        <span className='nomeTheme'>{theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}</span>
      </li>
    
  );
};

export default ThemeToggle;
