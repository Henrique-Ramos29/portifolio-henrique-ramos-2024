import { motion } from 'framer-motion';
import  './index.css';
import astronauta from './../../../public/austronauta.png'

const Banner = () => {
    return(
         <motion.div className='containerBanner'>

               <div className='tituloBanner'> 
                
                    <motion.h1>OLÂ,</motion.h1>
                    <motion.h1>MEU NOME É HENRIQUE RAMOS</motion.h1>

               </div>
            
             <motion.div>
                <motion.img className='imagemAustronauta' src={astronauta} alt='astronauta' height={470} weight={460} />
             </motion.div>

        </motion.div>
         
    )
}

export default Banner;