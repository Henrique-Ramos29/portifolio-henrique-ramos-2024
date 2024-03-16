import { motion } from 'framer-motion';
import './index.css';
import Formulario from '../Formulario';
import { ImLinkedin, ImGithub, ImWhatsapp, ImInstagram } from "react-icons/im";

const Rodape = () => {
   return (
      <motion.footer className='containerFooter'>
         <Formulario />
         <h4>Henrique Ramos</h4>
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
      </motion.footer>
   )
}

export default Rodape;