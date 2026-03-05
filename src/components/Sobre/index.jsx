import { motion } from 'framer-motion';
import FotoSobreMim from './../../../public/sobre-mim.jpeg';
import { ImLinkedin, ImGithub, ImWhatsapp, ImInstagram } from "react-icons/im";
import './index.css';

const Sobre = () => {
   return (
      <section id='sobre' className='section-sobre'>
         <div className='container-sobre-principal'>

            <motion.div
               className='box-foto-sobre'
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
            >
               <img className='foto-perfil' src={FotoSobreMim} alt='Henrique Ramos' />

               {/* Redes Sociais logo abaixo da foto no desktop, ou no final no mobile */}
               <div className='containerRedeSociais'>
                  <a href='https://www.linkedin.com/in/henrique-ramos2023' target='_blank' rel="noreferrer" className='icone-link'>
                     <ImLinkedin size={25} />
                  </a>
                  <a href='https://github.com/Henrique-Ramos29' target='_blank' rel="noreferrer" className='icone-link'>
                     <ImGithub size={25} />
                  </a>
                  <a href='https://api.whatsapp.com/send?phone=5547999247819' target='_blank' rel="noreferrer" className='icone-link'>
                     <ImWhatsapp size={25} />
                  </a>
                  <a href='https://www.instagram.com/henrique_ramos27' target='_blank' rel="noreferrer" className='icone-link'>
                     <ImInstagram size={25} />
                  </a>
               </div>
            </motion.div>

            <motion.div
               className='box-texto-sobre'
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               viewport={{ once: true }}
            >
               <h2 className='tituloSobre'>Sobre Mim</h2>
               <div className='decoracao-titulo'></div>

               <p className='textoSobre'>
  Olá, eu sou <strong>Henrique Ramos</strong>! Minha jornada na programação começou em 2022 e, desde então, sigo em constante aprendizado. Minha base foi construída no programa <strong>Oracle Next Education (ONE)</strong>, onde me especializei em Front-end pela Alura.
</p>

<p className='textoSobre'>
  Hoje, estou focado em colocar a teoria em prática com <strong>React.js (Vite) e React Native (Expo)</strong>. Um exemplo disso é o meu projeto <strong>Fast Food Vigia</strong>: eu não conhecia o <strong>Firebase</strong>, mas estudei e o implementei como banco de dados para resolver o problema do sistema. 
</p>

<p className='textoSobre'>
  Também estudo <strong>OCI (Oracle Cloud Infrastructure)</strong> para entender como grandes infraestruturas funcionam, pensando em escalar meus projetos no futuro. Sou movido por aprender o que for preciso para tirar uma ideia do papel e transformá-la em código funcional!
</p>
            </motion.div>

         </div>
      </section>
   )
}

export default Sobre;