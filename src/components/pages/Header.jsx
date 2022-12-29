import React from 'react';
import kyllo from '../images/kyllo.png';
import logo from '../images/logo.png';
import './Header.scss';


const Header = () => {
  return (
    <div id='header' className='header'>
      <div className='row'>
        <div>
          <h1 className='brand-desktop'>KS Malerservice</h1>
          <img className='logo-mobile' src={logo} alt="logo" />
          <h3>God kvalitet fra start</h3>
          <p>
            KS er ett malerfirma fra Tønsberg som tar på seg små og store 
            oppdrag, både utvendig og innvendig.
          <br/>
          <br/>
            Med lang erfaring og kompetanse innenfor malerfaget, har vi kunnskap 
            til de fleste underlag, og vet hvilke metoder og utstyr som til 
            enhver tid er nødvendig for å sikre et godt resultat.
          </p>
          <a className='cta' href="#contact">Kontakt</a>
        </div>
        <div>
          <img className='maler-img' src={kyllo} alt="maler illustrasjon" />
        </div>
      </div>
    </div>
  )
}

export default Header