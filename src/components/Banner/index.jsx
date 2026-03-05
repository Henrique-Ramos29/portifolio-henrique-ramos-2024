import { motion } from 'framer-motion';
import astronauta from '../../../public/austronauta.png';
import EfeitoText from '../EfeitoText';
import './index.css';

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner-container">
        
        {/* Lado Esquerdo (ou Cima no mobile) - Imagem */}
        <motion.div 
          className="banner-image-box"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={astronauta} alt="Astronauta" className="imagem-astronauta-img" />
        </motion.div>

        {/* Lado Direito (ou Baixo no mobile) - Texto */}
        <motion.div 
          className="banner-text-box"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="conteudo-texto">
            <EfeitoText />
            <motion.a 
              href="/contato" 
              className="btn-contato-banner"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Vamos conversar?
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Banner;