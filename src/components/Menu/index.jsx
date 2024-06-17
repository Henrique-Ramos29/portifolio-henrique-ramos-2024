import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiList, FiXCircle } from "react-icons/fi"
import './index.css';

import { Link, useNavigate } from 'react-router-dom'

const Menu = () => {

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
          {menuOpen ? <FiXCircle size={30} /> : <FiList size={30}/>}
        </div>
          {menuOpen && (
            <nav className='floating-menu'>
              <ul class="content">

              <li className='link'>
                  <Link to='/' onClick={() => toggleMenu('/')}>
                  Home
                  </Link>
                </li>

                <li className='link'>
                  <Link to='/sobreMim' onClick={() => toggleMenu('/sobreMim')}>
                  Sobre Mim
                  </Link>
                </li>

                <li className='link'>
                  <Link to='/formacao' onClick={() => toggleMenu('/formacao')}>
                  Formação
                  </Link>
                  </li>

                <li className='link'>
                  <Link to='/softSkills' onClick={() => toggleMenu('/softSkills') }>
                  Soft Skills
                  </Link>
                  </li>
                <li className='link'>
                  <Link  to='/projetos' onClick={() => toggleMenu('/projetos')}>
                  Projetos
                  </Link>
                  </li>

              </ul>
            </nav>
          )}

        </div>
      </motion.div>
  )
}

export default Menu;
