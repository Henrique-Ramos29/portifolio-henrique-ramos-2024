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

               "Olá, eu sou Henrique Ramos! Atualmente estou em transição de carreira, e minha jornada na programação começou em 2022.
               Comecei estudando lógica de programação em JavaScript, e logo depois fui selecionado para o programa Oracle One Next Education.
               Lá, tive o privilégio de me especializar em Front-end na Alura.

               Hoje, estou focado no desenvolvimento com HTML5, CSS3, JavaScript e React, sempre criando projetos próprios e enfrentando
               novos desafios. Estou dedicado a expandir minhas habilidades e contribuir com projetos que fazem a diferença. Sinto que essa
               é a nova etapa da minha vida profissional, e estou empolgado para compartilhar essa caminhada com vocês!"
            </p>
         </motion.div>
      </motion.div>
   )
}

export default Sobre;