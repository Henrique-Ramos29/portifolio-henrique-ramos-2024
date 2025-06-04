import { motion } from 'framer-motion';
import './index.css';
import projetos from '../../json/projetos.json'

const Projetos = () => {
  return (
    <motion.div id="projetos" className='Projetos'>
      <h2 className='tituloProjetos'>Projetos</h2>
      <motion.div className='containerProjetos'>
        {projetos.map((projeto) => (
          <motion.div key={projeto.id}> {/* Adicione a prop 'key' aqui */}
            <img className='imagemProjetos' src={projeto.imagem} alt={projeto.subtitulo} /> {/* Adicione o 'alt' para acessibilidade */}
            <p className='subtituloProjetos'>{projeto.subtitulo}</p>
            <div className='containerButtonProjetos'>
              <a target='_blank' href={projeto.demoLink} rel="noopener noreferrer"> {/* Use '_blank' com 'rel="noopener noreferrer"' para segurança */}
                Demo
              </a>
              <a target='_blank' href={projeto.repositorioLink} rel="noopener noreferrer"> {/* Use '_blank' com 'rel="noopener noreferrer"' para segurança */}
                Repositório
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projetos;