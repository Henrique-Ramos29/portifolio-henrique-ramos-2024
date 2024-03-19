import { motion } from 'framer-motion';
import './index.css';
import astronauta from './../../../public/austronauta.png';
import EfeitoText from '../EfeitoText';

const Banner = () => {

     return (
          <motion.div className='containerBanner'>
               <div className='tituloBanner'>
                    <EfeitoText />
               </div>
               <motion.div>
                    <motion.img className='imagemAustronauta' src={astronauta} alt='astronauta' height={470} weight={460} />
               </motion.div>

          </motion.div>

     )
}

export default Banner;