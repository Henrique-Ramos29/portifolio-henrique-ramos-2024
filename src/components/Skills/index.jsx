import { motion } from 'framer-motion';
import { DiHtml5, DiCss3Full, DiJavascript1, DiReact, DiVisualstudio, DiMysql, DiGit } from "react-icons/di";
import './index.css';

const Skills = () => {
    return(
        <motion.div id='skills' className='containerSkills'>
            <motion.h2 className='tituloSkills'>Soft Skills</motion.h2>
              <motion.div className='containerIcone'>
                <DiHtml5  title='Html 5' size={200} />
                <DiCss3Full title='Css 3' size={200} />
                <DiJavascript1 title='JavaScript' size={200} />
                <DiReact title='React' size={200} />
                <DiVisualstudio title='VS code' size={200} />
                <DiMysql title='MySql' size={200} />
                <DiGit title='Git' size={200} />


              </motion.div>
        </motion.div>
    )
}

export default Skills;