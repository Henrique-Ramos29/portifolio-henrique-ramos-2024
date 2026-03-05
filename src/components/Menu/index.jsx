import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from "react-icons/fi";
import { ThemeContext } from '../Tema/ThemeContext';
import ToggleTheme from '../Tema/ToggleTheme';
import './Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Projetos', path: '/projetos' },
    { name: 'Skills', path: '/softSkills' },
    { name: 'Certificados', path: '/meu-certificado' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className={`navbar ${theme}`}>
      <div className="nav-container">
        <Link to="/" className="logo">
          HENRIQUE<span>.DEV</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <ToggleTheme />
        </ul>

        {/* Mobile Toggle */}
        <div className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="mobile-sidebar"
          >
            <ul className="mobile-nav-links">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} onClick={() => setIsOpen(false)}>{item.name}</Link>
                </li>
              ))}
              <ToggleTheme />
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Menu;