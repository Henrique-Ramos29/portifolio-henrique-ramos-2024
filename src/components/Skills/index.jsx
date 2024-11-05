import { motion } from 'framer-motion';
import { DiHtml5, DiCss3Full, DiJavascript1, DiReact, DiVisualstudio, DiMysql, DiGit } from "react-icons/di";
import './index.css';

const Skills = () => {
    return(
        <motion.div id='skills' className='containerSkills'>
            <motion.h2 className='tituloSkills'>Soft Skills</motion.h2>
              <motion.div className='containerIcone'>
                <DiHtml5  title='Html 5' size={180} />
                <DiCss3Full title='Css 3' size={180} />
                <DiJavascript1 title='JavaScript' size={180} />
                <DiReact title='React' size={180} />
                <DiVisualstudio title='VS code' size={180} />
                <DiMysql title='MySql' size={180} />
                <DiGit title='Git' size={180} />
              </motion.div>
        </motion.div>
    )
}

export default Skills;