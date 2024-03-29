import React, { useState } from 'react';
import './Profilio_Nav.css';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";

const Profilio_Nav = () => {
  const [activeNav, setActiveNav]=useState('#');
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')}
       className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')}
       className={activeNav==='#about'?'active':''} ><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')}
       className={activeNav==='#experience'?'active':''} ><BiBook/></a>
      <a href="#services" onClick={()=>setActiveNav('#services')}
       className={activeNav==='#services'?'active':''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')}
       className={activeNav==='#contact'?'active':''}><BiMessageDetail/></a>
    </nav>
  )
}

export default Profilio_Nav