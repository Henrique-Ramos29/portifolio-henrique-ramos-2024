import { motion } from 'framer-motion';
import { 
  DiHtml5, DiCss3Full, DiJavascript1, DiReact, DiMysql, DiGit 
} from "react-icons/di";
import { 
  SiFirebase, SiVite, SiExpo, SiVisualstudiocode 
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb"; // Ícone específico para Native
import './index.css';

const Skills = () => {
  // Organizei as skills em um array para o código ficar limpo
  const tecnologias = [
    { nome: 'HTML5', icone: <DiHtml5 />, cor: '#E34F26' },
    { nome: 'CSS3', icone: <DiCss3Full />, cor: '#1572B6' },
    { nome: 'JavaScript', icone: <DiJavascript1 />, cor: '#F7DF1E' },
    { nome: 'React.js', icone: <DiReact />, cor: '#61DAFB' },
    { nome: 'React Native', icone: <TbBrandReactNative />, cor: '#61DAFB' },
    { nome: 'Expo', icone: <SiExpo />, cor: '#000020' },
    { nome: 'Vite', icone: <SiVite />, cor: '#646CFF' },
    { nome: 'Firebase', icone: <SiFirebase />, cor: '#FFCA28' },
    { nome: 'MySQL', icone: <DiMysql />, cor: '#4479A1' },
    { nome: 'Git', icone: <DiGit />, cor: '#F05032' },
    { nome: 'VS Code', icone: <SiVisualstudiocode />, cor: '#007ACC' },
  ];

  return (
    <section id='skills' className='containerSkills'>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className='tituloSkills'
      >
        Tecnologias & Hard Skills
      </motion.h2>
      <div className='decoracao-titulo'></div>

      <motion.div className='gridIcones'>
        {tecnologias.map((tech, index) => (
          <motion.div 
            className='skill-card'
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className='icone-box'>
              {tech.icone}
            </div>
            <span>{tech.nome}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;