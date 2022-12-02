import React from 'react';
import { motion } from "framer-motion"
import kyllo from '../images/kyllo.png';
import './Header.scss';


const Header = () => {
  return (
    <div id='header' className='header'>
      <div className='row'>
        <motion.div 
          transition={{ duration: 1 }}
          whileInView={{ y: [20, 0], opacity: [0, 1] }}
          >
          <h1>KS Malerservice</h1>
          <h3>God kvalitet fra start</h3>
          <p>
            KS er ett lite firma fra Tønsberg som tar på seg små og store 
            oppdrag innenfor maling av private boliger, både utvendig 
            og innvendig.
          <br/>
          <br/>
            Med lang erfaring og kompetanse innenfor malerfaget, har vi kunnskap 
            til de fleste underlag, og vet hvilke metoder og utstyr som til 
            enhver tid er nødvendig for å sikre et godt resultat. Vi opererer 
            kun med faste priser slik at du som kunde vil unngå overraskende pristillegg.
          </p>
          <a className='cta' href="#contact">Kontakt</a>
        </motion.div>
        <div>
          <motion.img 
            className='maler-img' 
            src={kyllo} 
            alt="maler illustrasjon"
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: [0, 1] }}
            />
        </div>
      </div>
    </div>
  )
}

export default Header