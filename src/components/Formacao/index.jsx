import { motion } from 'framer-motion';
import aluraOracle from './../../../public/Oracle1.png'
import estacio from './../../../public/estacio.png'
import bootcamp from './../../../public/dio.jpg'
import './index.css';

const Formacao = () => {
    return(
        <motion.div id='formacao' className='containerFormacao'>
            <h2 className='tituloFormacao'>Formação Academica</h2>
              <motion.div className='containerConteudo' >
                 <div className='subtituloImagem'>
                    <img className='imagemFormacao' src={aluraOracle} alt='Alura' />
                    <h4 className='subtituloFormacao' >Oracle + Alura</h4>
                    <p className='subtituloFormacao2'>Out/2022 - 2023</p>
                 </div>
                 <div className='subtituloImagem' >
                    <img className='imagemFormacao' src={estacio} alt='estacio' />
                    <h4 className='subtituloFormacao' >Estácio</h4>
                    <p className='subtituloFormacao2' >2024 - em andamento</p>
                 </div>
                 <div className='subtituloImagem'>
                    <img className='imagemFormacao'src={bootcamp} alt='bootcamp programação do zero' />
                    <h4 className='subtituloFormacao'>BootCamp</h4>
                    <p className='subtituloFormacao2'>2024</p>
                 </div>
              </motion.div>
        </motion.div>
    )
}

export default Formacao;