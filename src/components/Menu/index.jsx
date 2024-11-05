import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { FiList, FiXCircle } from "react-icons/fi"
import { FaUserAstronaut, FaUserGraduate, FaSkiing, FaProjectDiagram, FaTelegramPlane, FaHome } from "react-icons/fa";
import './index.css';

import { Link, useNavigate } from 'react-router-dom'
import ToggleTheme from '../Tema/ToggleTheme';
import { ThemeContext } from '../Tema/ThemeContext';

const Menu = () => {
  const { theme } = useContext(ThemeContext);

  const [menuOpen, setOpenMenu] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = (path) => {
    setOpenMenu(false);
    navigate(path);
  }

  return (
    <motion.div className="containerMenu">
      <motion.h2 className='tituloMenu'>Portifolio</motion.h2>
      <div className="containerLista">
        <div onClick={() => setOpenMenu(!menuOpen)} style={{ cursor: 'pointer' }}>
          {menuOpen ? <FiXCircle size={30} /> : <FiList size={30} />}
        </div>
        {menuOpen && (
          <nav className={`floating-menu ${theme}`}>
            <ul class="content">

              <li className='link'>
                <Link to='/' onClick={() => toggleMenu('/')} style={{ display: 'flex', alignItems: 'center' }} >
                  <FaHome size={30} style={{ marginRight: '8px' }} />
                  <span>Home</span>
                </Link>
              </li>

              <li className='link'>
                <Link to='/sobreMim' onClick={() => toggleMenu('/sobreMim')} style={{ display: 'flex', alignItems: 'center' }}>
                  <FaUserAstronaut size={30} style={{ marginRight: '8px' }} />
                  <span>Sobre mim</span>
                </Link>
              </li>

              <li className='link'>
                <Link to='/formacao' onClick={() => toggleMenu('/formacao')} style={{ display: 'flex', alignItems: 'center' }}>
                  <FaUserGraduate size={30} style={{ marginRight: '8px' }} />
                  <span>Formação</span>
                </Link>
              </li>

              <li className='link'>
                <Link to='/softSkills' onClick={() => toggleMenu('/softSkills')} style={{ display: 'flex', alignItems: 'center' }}>
                  <FaSkiing size={30} style={{ marginRight: '8px' }} />
                  <span>Soft skills</span>
                </Link>
              </li>
              <li className='link'>
                <Link to='/projetos' onClick={() => toggleMenu('/projetos')} style={{ display: 'flex', alignItems: 'center' }}>
                  <FaProjectDiagram size={30} style={{ marginRight: '8px' }} />
                  <span>Projeto</span>
                </Link>
              </li>

              <li className='link'>
                <Link to='/contato' onClick={() => toggleMenu('/contato')} style={{ display: 'flex', alignItems: 'center' }}  >
                  <FaTelegramPlane size={30} style={{ marginRight: '8px' }} />
                  <span>Contato</span>
                </Link>
              </li>
              <li className='buttonThemeLink'>
                <ToggleTheme />
              </li>
            </ul>
          </nav>
        )}

      </div>
    </motion.div>
  )
}

export default Menu;
