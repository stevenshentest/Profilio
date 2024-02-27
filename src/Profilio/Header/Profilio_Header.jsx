import React from 'react';
import './Profilio_Header.css';
import CTA from './CTA';
import Me from '../Images/me.png';
import HeaderSocials from './HeaderSocials';
import Test01 from '../Images/test03.png';


const Profilio_Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Steven Steven</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={Test01} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Profilio_Header