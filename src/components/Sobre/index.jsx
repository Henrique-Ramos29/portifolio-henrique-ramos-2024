import { motion } from 'framer-motion';
import FotoSobreMim from './../../../public/sobre-mim.jpeg';
import { ImLinkedin, ImGithub, ImWhatsapp, ImInstagram } from "react-icons/im";
import './index.css';

const Sobre = () => {
   return (
      <motion.div id='sobre' className='containerSobre' >
         <h2 className='tituloSobre' id="#sobre">Sobre Mim</h2>
         <motion.div className='containerConteudo'>
            <motion.img className='fotoSobre' src={FotoSobreMim} alt='foto henrique ramos' />
            <p className='textoSobre'>

               Eu me chamo Henrique Ramos e estou em busca da transição de carreira. Atualmente, 
               sou motorista comecei a estudar programação em outubro de 2022,
               fazendo um curso de lógica de programação com a tecnologia JavaScript. Em novembro do mesmo ano, 
               fui agraciado com o Oracle One Next Education e tive o privilégio de estudar na Alura, 
               onde concluí a formação Front-end. Tenho me dedicado bastante a estudar HTML5, CSS3, JavaScript, 
               React e MySQL, além de desenvolver meus próprios projetos e enfrentar desafios. Em 2024, 
               comecei a faculdade na Estácio e estou muito feliz. Só tenho a agradecer à minha família, 
               que sempre me apoiou nessa trajetória!
            </p>
         </motion.div>
      </motion.div>
   )
}

export default Sobre;