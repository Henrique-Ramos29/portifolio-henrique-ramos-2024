import { motion } from 'framer-motion';
import './index.css';

const Menu = () => {
    return(
           <motion.div className="containerMenu">
             <motion.h2 className='tituloMenu'>Portifolio</motion.h2>
               <motion.ul className="containerLista">
                  <a className='link' href='#sobre'>Sobre</a>
                  <a className='link' href='#skills'>Soft Skills</a>
                  <a className='link' href='#formacao'>Formação</a>
                  <a className='link' href='#projetos'>Projetos</a>
               </motion.ul>
           </motion.div>
    )
}

export default Menu;