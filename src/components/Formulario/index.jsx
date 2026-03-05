import { motion } from 'framer-motion';
import { useState } from 'react';
import './index.css';

const Formulario = () => {
    // Estado para gerenciar o envio (opcional, para feedback visual)
    const [status, setStatus] = useState("");

    // Instrução: Você vai criar uma conta no formspree.io e trocar esse ID
    const FORMSPREE_ID = "jose25henrique.ramos2019@gmail.com"; // O Formspree permite usar o email direto ou um ID gerado lá

    return (
        <motion.div 
            className='wrapperFormulario'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <form 
                className='containerFormulario'
                action={`https://formspree.io/f/xqeyzzao`} // <-- Troque pelo ID que ganhar no Formspree
                method="POST"
            >
                <h3 className='tituloContato'>Vamos trabalhar juntos?</h3>
                <p className='subtituloContato'>
                    Mande uma mensagem e eu responderei em até 24 horas.
                </p>

                <div className='fieldGroup'>
                    <label>Seu Nome</label>
                    <input 
                        className="input" 
                        name="name" 
                        type='text' 
                        placeholder='Como posso te chamar?' 
                        required 
                    />
                </div>

                <div className='fieldGroup'>
                    <label>Seu E-mail</label>
                    <input 
                        className="input"  
                        name="email" 
                        type='email' 
                        placeholder='exemplo@email.com' 
                        required 
                    />
                </div>

                <div className='fieldGroup'>
                    <label>Sua Mensagem</label>
                    <textarea 
                        className="input textarea" 
                        name="message" 
                        placeholder='Conte-me sobre seu projeto ou ideia...' 
                        required 
                        rows="5"
                    ></textarea>
                </div>

                <motion.button 
                    className='buttonContato' 
                    type='submit'
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Enviar Mensagem
                </motion.button>

                {status === "SUCCESS" && <p className="msg-sucesso">E-mail enviado com sucesso!</p>}
            </form>
        </motion.div>
    )
}

export default Formulario;