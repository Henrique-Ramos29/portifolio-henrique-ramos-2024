import { motion } from 'framer-motion';
import './index.css';
import cep from './../../../public/cep.png';
import olamundo from './../../../public/ola-mundo.png';
import comedyflix from './../../../public/comedy-flix.png';
import organo from './../../../public/organo.png';
import criptografa from './../../../public/criptografa.png';
import barbearia from './../../../public/barbearia-ramos.png';
import api from './../../../public/Api.png';
import alurinha from './../../../public/alurinha.png';
import Botao from '../Botao';

const Projetos = () => {
    return (
        <motion.div id="projetos" className='Projetos'>
            <h2 className='tituloProjetos'>Projetos</h2>
            <motion.div className='containerProjetos'>
                <motion.div>
                    <img className='imagemProjetos' src={cep} />
                    <p className='subtituloProjetos' >JavaScript na Web: manipule o DOM</p>
                    <div className='containerButtonProjetos'>
                        <a target='_black' href='https://manupule-dom-com-javascript.vercel.app/'>
                            Demo
                        </a>
                        <a target='_black' href='https://github.com/Henrique-Ramos29/Manupule_DOM_com_JAVA_SCRIPT.git'>
                            Repositorio
                        </a>
                    </div>
                </motion.div>
                <motion.div>
                    <img className='imagemProjetos' src={olamundo} />
                    <p className='subtituloProjetos'>React routes com java script</p>
                    <div className='containerButtonProjetos'>
                        <a className='linkButton' target='_black' href='https://ola-mundo-yssu.vercel.app/'>
                            Demo
                        </a>
                        <a className='linkButton' target='_black' href='https://github.com/Henrique-Ramos29/Ola-Mundo.git'>
                            Repositorio
                        </a>
                    </div>
                </motion.div>

                <motion.div>
                    <img className='imagemProjetos' src={comedyflix} />
                    <p className='subtituloProjetos'>Web site usado flexbox</p>
                    <div className='containerButtonProjetos'>
                        <a className='linkButton' target='_black' href='https://comedy-flix-challenge-alura-oracle.vercel.app/'>
                            Demo
                        </a>
                        <a className='linkButton' target='_black' href='https://github.com/Henrique-Ramos29/comedy-flix-challenge-alura-oracle'>
                            Repositorio
                        </a>
                    </div>
                </motion.div>
                <motion.div>
                    <img className='imagemProjetos' src={organo} />
                    <p className='subtituloProjetos'>Organo React.js</p>
                    <div className='containerButtonProjetos'>
                        <a className='linkButton' target='_black' href='https://organo-alura-oracle.vercel.app/'>
                            Demo
                        </a>
                        <a className='linkButton' target='_black' href='https://github.com/Henrique-Ramos29/Organo__Alura_Oracle.git'>
                            Repositorio
                        </a>
                    </div>
                </motion.div>
                <motion.div>
                    <img className='imagemProjetos' src={criptografa} />
                    <p className='subtituloProjetos'>Oracle ONE challenge criptografia</p>
                    <div className='containerButtonProjetos'>
                        <a className='linkButton' target='_black' href='https://oracle-one-challenge-criptografia.vercel.app/'>
                            Demo
                        </a>
                        <a className='linkButton' target='_black' href='https://github.com/Henrique-Ramos29/Oracle-ONE-Challenge-Criptografia.git'>
                            Repositorio
                        </a>
                    </div>
                </motion.div>
                <motion.div>
                    <img className='imagemProjetos' src={barbearia} />
                    <p className='subtituloProjetos'>Componetes React.js</p>
                    <div className='containerButtonProjetos'>
                        <a className='linkButton' target='_black' href='https://barbearia-ramos.vercel.app'>
                            Demo
                        </a>
                        <a className='linkButton' target='_black' href='https://github.com/Henrique-Ramos29/Barbearia_Ramos.git'>
                            Repositorio
                        </a>
                    </div>
                </motion.div>
                <motion.div>
                    <img className='imagemProjetos' src={api} />
                    <p className='subtituloProjetos'>Api Brasileirão Serie A 2024</p>
                    <div className='containerButtonProjetos'>
                        <a className='linkButton' target='_black' href='https://api-futebol-two.vercel.app/'>
                            Demo
                        </a>
                        <a className='linkButton' target='_black' href='https://github.com/Henrique-Ramos29/Api-Futebol'>
                            Repositorio
                        </a>
                    </div>
                </motion.div>
                <motion.div>
                    <img className='imagemProjetos' src={alurinha} />
                    <p className='subtituloProjetos'>Flex-box - Css</p>
                    <div className='containerButtonProjetos'>
                        <a className='linkButton' target='_black' href='https://web-alurinha.vercel.app/'>
                            Demo
                        </a>
                        <a className='linkButton' target='_black' href='https://github.com/Henrique-Ramos29/Web-Alurinha'>
                            Repositorio
                        </a>
                    </div>
                </motion.div>
                
            </motion.div>

        </motion.div>
    )
}

export default Projetos;