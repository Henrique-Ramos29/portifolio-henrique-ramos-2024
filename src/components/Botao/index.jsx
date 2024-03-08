import { motion } from 'framer-motion';
import './index.css';

function Botao({ children }) {
    return(
          <motion.button className='botaoPrincipal'>
              {children}
          </motion.button>
    )
}

export default Botao;