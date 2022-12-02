import React from 'react';
import { motion } from "framer-motion"
import painter from '../images/painter.png';
import kvalitet from '../images/kvalitet.png';
import faglig from '../images/faglig.png';
import avtale from '../images/avtale.png';
import './About.scss';


const About = () => {
  return (
    <div id='about' className='about-row'>
      <div>
        <img src={painter} alt="painter" className='painter' />
      </div>
    
      <div className='col'>
        <motion.div 
          className='check-row' 
          transition={{ duration: 1 }}
          whileInView={{ y: [20, 0], opacity: [0, 1] }}
          >
          <img className='icons' src={faglig} alt="avtale" />
          <p>
            Lang faglig erfaring. enten jobben er liten eller stor, jeg kommer
            gjerne hjem til deg for en gratis
            befaring og gir et pristilbud.
          </p>
        </motion.div>

        <motion.div 
          className='check-row' 
          transition={{ duration: 1 }}
          whileInView={{ y: [20, 0], opacity: [0, 1] }}
          >
          <img className='icons' src={kvalitet} alt="avtale" />
          <p>
            Kvalitetsgaranti sikrer at
            arbeidet blir fagmessig utført og i
            overenstemmelse med inngått avtale.
          </p>
        </motion.div>

        <motion.div 
          className='check-row' 
          transition={{ duration: 1 }}
          whileInView={{ y: [20, 0], opacity: [0, 1] }}
          >
          <img className='icons' src={avtale} alt="avtale" />
          <p>
            KS Malerservice setter punktlighet høyt og kan
            garantere at arbeidet startes og avsluttes
            i hht oppdragsavtalen.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default About