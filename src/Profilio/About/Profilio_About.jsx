import React from 'react';
import './Profilio_About.css';
import ME from '../Images/me-about.jpg';
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import Test02 from '../Images/test02.jpg';
import { PiOfficeChairFill } from "react-icons/pi";


const Profilio_About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Test02} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Education</h5>
              <small>Diploma of Web development</small>
            </article>

            <article className='about__card'>
              <PiOfficeChairFill className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ year coding in Tafe</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ projects Completed</small>
            </article>
          </div>

          <p>I'm Steven, a passionate web enthusiast from Taiwan. Born as a Sagittarius, my easy-going and curious nature blends with my penchant for creativity in the world of web development. My journey into web development began at Tafe, where I developed a
          keen interest in web computing. Now,I am actively seeking a web developer role in web design, aiming to harness and apply my technical skills to real-world projects.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Profilio_About