import React from 'react';
import Profilio_Header from './Header/Profilio_Header';
import Profilio_Nav from './Nav/Profilio_Nav';
import Profilio_About from './About/Profilio_About';
import Profilio_Experience from './Experience/Profilio_Experience';
import Profilio_Services from './Services/Profilio_Services';
import Profilio_Profilio from './Profilio_P/Profilio_Profilio';
import Profilio_Testimonials from './Testimonials/Profilio_Testimonials';
import Profilio_Contact from './Contact/Profilio_Contact';
import Profilio_Footer from './Footer/Profilio_Footer';
import './Profilio_Index.css';



const Profilio_Index = () => {
  return (
    <div>
        <div id="root">
            <Profilio_Header/>
            <Profilio_Nav/>
            <Profilio_About/>
            <Profilio_Experience/>
            <Profilio_Services/>
            <Profilio_Profilio/>
            <Profilio_Testimonials/>
            <Profilio_Contact/>
            <Profilio_Footer/>   
            
        </div>
    </div>
  )
}

export default Profilio_Index