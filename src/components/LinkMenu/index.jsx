
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const LinkMenu = ({ href, icon, label }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `relative flex items-center gap-2 px-3 py-2 transition-colors duration-300 rounded-md
        ${isActive ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`
      }
    >
      {icon}
      <span className="font-medium">{label}</span>
      
      {/* Efeito de hover com Framer Motion */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-cyan-400"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </NavLink>
  );
};

export default LinkMenu;
