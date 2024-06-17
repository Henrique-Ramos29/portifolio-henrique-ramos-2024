import { motion } from 'framer-motion';
import { DiHtml5, DiCss3Full, DiJavascript1, DiReact, DiVisualstudio, DiMysql, DiGit } from "react-icons/di";
import './index.css';

const Skills = () => {
    return(
        <motion.div id='skills' className='containerSkills'>
            <motion.h2 className='tituloSkills'>Soft Skills</motion.h2>
              <motion.div className='containerIcone'>
                <DiHtml5  title='Html 5' size={120} />
                <DiCss3Full title='Css 3' size={120} />
                <DiJavascript1 title='JavaScript' size={120} />
                <DiReact title='React' size={120} />
                <DiVisualstudio title='VS code' size={120} />
                <DiMysql title='MySql' size={120} />
                <DiGit title='Git' size={120} />


              </motion.div>
        </motion.div>
    )
}

export default Skills;