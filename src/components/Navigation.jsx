
import React, { useEffect, useState } from "react";
import { BiMailSend, BiHomeSmile } from 'react-icons/bi';
import { AiOutlineFormatPainter } from 'react-icons/ai';
import { motion } from "framer-motion"
import logo from './images/logo.png';
import './Navigation.scss';

const Navigation = () => {

    const [windowDimension, setWindowDimension] = useState(null);
    const style = { color: "white", fontSize: "25px" }

    useEffect(() => {
      setWindowDimension(window.innerWidth);
    }, []);
  
    useEffect(() => {
      function handleResize() {
        setWindowDimension(window.innerWidth);
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    const isMobile = windowDimension >= 600;
    

    return (
    <>
    {isMobile ? (
        <motion.nav className='navbar'>
            <div className="nav-conteiner">
            <a href="#header"><img className="logo" src={logo} alt="logo" /></a>
            <motion.ul className='nav-links'>
                <li><a className="link-text" href="#header">Hjem</a></li>
                <li><a className="link-text" href="#about">Om</a></li>
                <li><a className="link-text" href="#contact">Kontakt</a></li>
            </motion.ul>
            </div>
        </motion.nav>
        ) : (
        <motion.nav className='navbar'>
            <motion.ul className='nav-links'>
                <a href="#header" className='link-col link-text'><BiHomeSmile style={style}/>Hjem</a>
                <a href="#about" className='link-col link-text'><AiOutlineFormatPainter style={style}/>Om</a>
                <a href="#contact" className='link-col link-text'><BiMailSend style={style}/>Kontakt</a>
            </motion.ul>
        </motion.nav>
        )}
    </>
    )
}

export default Navigation




// import { useState } from 'react';
// import { GrClose } from 'react-icons/gr';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { Link } from 'react-router-dom';
// import './Navigation.scss';

// const Navigation = () => {

//     const [isMobile, setIsMobile] = useState(false);


//     return (
//         <nav className='navbar'>
//             <h3 className='logo'>Logo</h3>
//             <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}
//             onClick={() => setIsMobile(false)}>
//                 <Link to='/' className='home'><li>Home</li></Link>
//                 <Link to='/about' className='about'><li>About</li></Link>
//                 <Link to='/contact' className='contact'><li>Contact</li></Link>
//             </ul>
//             <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
//                 {isMobile ? <GrClose /> : <GiHamburgerMenu />}
//             </button>
//         </nav>

/* <div>
<button className='mobile-btn' onClick={cycleOpen}>{open ? <GrClose style={style} /> : <GiHamburgerMenu style={style} />}</button>
</div>
<AnimatePresence>
{open && (
<motion.aside 
    initial={{ width: 0 }} 
    animate={{ width: 300 }}
    exit={{ width: 0, transition: { delay: 0.3, duration: 0.4} }}
    >
    <motion.div 
        initial="closed"
        animate="open"
        exit="closed"
        variants={sideVariants}
        className='mobile-menu-conteiner'
        >
        <Link to='/'><motion.li className='mabile-link' variants={itemVariants}>Home</motion.li></Link>
        <Link to='/about'><motion.li className='mabile-link' variants={itemVariants}>About</motion.li></Link>
        <Link to='/contact'><motion.li className='mabile-link' variants={itemVariants}>Contact</motion.li></Link>
    </motion.div>
</motion.aside>
)}
</AnimatePresence> */
//     )
// }

// export default Navigation