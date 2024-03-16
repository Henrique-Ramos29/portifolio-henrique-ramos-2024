import { motion } from 'framer-motion';
import './index.css';
import cep from './../../../public/cep.png';
import geek from './../../../public/henriquegeek.png';
import alurinha from './../../../public/alurinha.png';
import pet from './../../../public/projeto-pet.png';
import criptografa from './../../../public/criptografa.png';
import barbearia from './../../../public/barbearia-ramos.png';
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
                    <img className='imagemProjetos' src={geek} />
                    <p className='subtituloProjetos'>Web CRUD com JavaScript</p>
                    <div className='containerButtonProjetos'>
                        <a className='linkButton' target='_black' href='https://manupule-dom-com-javascript.vercel.app/'>
                            Demo
                        </a>
                        <a className='linkButton' target='_black' href='https://github.com/Henrique-Ramos29/Manupule_DOM_com_JAVA_SCRIPT.git'>
                            Repositorio
                        </a>
                    </div>
                </motion.div>

                <motion.div>
                    <img className='imagemProjetos' src={alurinha} />
                    <p className='subtituloProjetos'>Web site usado flexbox</p>
                    <div className='containerButtonProjetos'>
                        <a className='linkButton' target='_black' href='https://manupule-dom-com-javascript.vercel.app/'>
                            Demo
                        </a>
                        <a className='linkButton' target='_black' href='https://github.com/Henrique-Ramos29/Manupule_DOM_com_JAVA_SCRIPT.git'>
                            Repositorio
                        </a>
                    </div>
                </motion.div>
                <motion.div>
                    <img className='imagemProjetos' src={pet} />
                    <p className='subtituloProjetos'>CRUD e validação do formulario</p>
                    <div className='containerButtonProjetos'>
                        <a className='linkButton' target='_black' href='https://manupule-dom-com-javascript.vercel.app/'>
                            Demo
                        </a>
                        <a className='linkButton' target='_black' href='https://github.com/Henrique-Ramos29/Manupule_DOM_com_JAVA_SCRIPT.git'>
                            Repositorio
                        </a>
                    </div>
                </motion.div>
                <motion.div>
                    <img className='imagemProjetos' src={criptografa} />
                    <p className='subtituloProjetos'>Oracle ONE challenge criptografia</p>
                    <div className='containerButtonProjetos'>
                        <a className='linkButton' target='_black' href='https://manupule-dom-com-javascript.vercel.app/'>
                            Demo
                        </a>
                        <a className='linkButton' target='_black' href='https://github.com/Henrique-Ramos29/Manupule_DOM_com_JAVA_SCRIPT.git'>
                            Repositorio
                        </a>
                    </div>
                </motion.div>
                <motion.div>
                    <img className='imagemProjetos' src={barbearia} />
                    <p className='subtituloProjetos'>Componetes React.js</p>
                    <div className='containerButtonProjetos'>
                        <a className='linkButton' target='_black' href='https://manupule-dom-com-javascript.vercel.app/'>
                            Demo
                        </a>
                        <a className='linkButton' target='_black' href='https://github.com/Henrique-Ramos29/Manupule_DOM_com_JAVA_SCRIPT.git'>
                            Repositorio
                        </a>
                    </div>
                </motion.div>
            </motion.div>

        </motion.div>
    )
}

export default Projetos;