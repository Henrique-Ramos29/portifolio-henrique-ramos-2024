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
               sou empreendedor, tenho um serviço de delivery e comecei a estudar programação em outubro de 2022,
               fazendo um curso de lógica de programação com a tecnologia JavaScript. Em novembro do mesmo ano, 
               fui agraciado com o Oracle One Next Education e tive o privilégio de estudar na Alura, 
               onde concluí a formação Front-end. Tenho me dedicado bastante a estudar HTML5, CSS3, JavaScript, 
               React e MySQL, além de desenvolver meus próprios projetos e enfrentar desafios. Em 2024, 
               comecei a faculdade na Estácio e estou muito feliz. Só tenho a agradecer à minha família, 
               que sempre me apoiou nessa trajetória!
               <div className='containerRedeSociais'>
                  <a href='https://www.linkedin.com/in/henrique-ramos2023' target='_black' className='icone'>
                   <ImLinkedin size={25} /> 
                  </a>
                  <a href='https://github.com/Henrique-Ramos29' target='_black' className='icone'>
                   <ImGithub  size={25} />
                  </a>
                  <a href='https://api.whatsapp.com/send?phone=5547999247819&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20Henrique%20Ramos%20?'
                   target='_black' className='icone'>
                   <ImWhatsapp  size={25} />
                  </a>
                  <a href='https://www.instagram.com/henrique_ramos27?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' 
                   target='_black' className='icone'>
                   <ImInstagram  size={25} />
                  </a>
               </div>
            </p>
         </motion.div>
      </motion.div>
   )
}

export default Sobre;