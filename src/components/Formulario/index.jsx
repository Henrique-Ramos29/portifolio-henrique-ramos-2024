import { motion } from 'framer-motion';
import './index.css';


const Formulario = () => {
    return (
        <motion.div>
            <form className='containerFormulario'>
                <h2>Contato</h2>
                <h4>Preencha o formulário ao lado e entrarei em contato o mais rápido possível.</h4>
                <label>Nome</label> 
                <input className="input" type='text' placeholder='Deixe seu nome' required minLength={3}/>
                <label>Email</label>
                <input className="input"  name="email" type='email' placeholder='Deixe seu email' required />

                <button type='submit'>Enviar</button>
            </form>
        </motion.div>
    )
}

export default Formulario;