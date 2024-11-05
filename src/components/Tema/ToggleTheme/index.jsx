import React, { useContext } from 'react';
import { WiDaySunny, WiMoonWaningCrescent3 } from "react-icons/wi";
import { ThemeContext } from '../ThemeContext';
import './index.css';
import { Link } from 'react-router-dom';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <li className='buttonTheme'  >
      <Link
        onClick={toggleTheme}
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {theme === 'light' ? <WiMoonWaningCrescent3 size={40} style={{ marginRight: '8px' }} /> : <WiDaySunny size={40} style={{ marginRight: '8px' }} />}
        <span className='nomeTheme'>{theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}</span>
      </Link >
    </li>

  );
};

export default ThemeToggle;
