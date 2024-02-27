import { motion } from 'framer-motion';
import { DiHtml5, DiCss3Full, DiJavascript1, DiReact, DiVisualstudio, DiMysql, DiGit } from "react-icons/di";
import './index.css';

const Skills = () => {
    return(
        <motion.div id='skills' className='containerSkills'>
            <motion.h2 className='tituloSkills'>Soft Skills</motion.h2>
              <motion.div className='containerIcone'>
                <DiHtml5  title='Html 5' size={60} />
                <DiCss3Full title='Css 3' size={60} />
                <DiJavascript1 title='JavaScript' size={60} />
                <DiReact title='React' size={60} />
                <DiVisualstudio title='VS code' size={60} />
                <DiMysql title='MySql' size={60} />
                <DiGit title='Git' size={60} />


              </motion.div>
        </motion.div>
    )
}

export default Skills;