import { motion } from 'framer-motion';
import './index.css';


const Formulario = () => {
    return (
        <motion.div>
            <form className='containerFormulario'>
                <h3 className='tituloContato'>Contato</h3>
                <p className='subtituloContato'>Preencha o formulário eu entrarei em contato o mais rápido possível.</p>
                <label className='nomeInput'>Nome</label> 
                <input className="input" type='text' placeholder='Deixe seu nome' required minLength={3}/>
                <label className='nomeInput'>Email</label>
                <input className="input"  name="email" type='email' placeholder='Deixe seu email' required />

                <button className='buttonContato' type='submit'>Enviar</button>
            </form>
        </motion.div>
    )
}

export default Formulario;