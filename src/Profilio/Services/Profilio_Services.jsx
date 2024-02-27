import React from 'react';
import './Profilio_Services.css';
import { BiCheck } from "react-icons/bi";

const Profilio_Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Web Frontend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User Interface (UI) Design</p>
            </li>     
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Wireframing and Prototyping</p>
            </li>  
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Design Implementation</p>
            </li>  
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Cross-Browser Testing</p>
            </li>  
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Performance Optimization</p>
            </li>     
            <li>
              <BiCheck className='service__list-icon'/>
              <p>UI/UX Research and Analysis</p>
            </li>                  
          </ul>
        </article>
        {/**End of UI/UX */}

        <article className='service'>
          <div className="service__head">
            <h3>Web Backend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database Design and Management</p>
            </li>     
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Server-Side Programming</p>
            </li>  
            <li>
              <BiCheck className='service__list-icon'/>
              <p>API Development</p>
            </li>  
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integration with Third-Party Services</p>
            </li>  
            <li>
              <BiCheck className='service__list-icon'/>
              <p>LMonitoring and Logging</p>
            </li> 
                                  
          </ul>
        </article>
        {/**End of Web Development */}

        <article className='service'>
          <div className="service__head">
            <h3>Web Fullstack Development</h3>
          </div>

          <ul className="service__list">
               
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design client-side and server-side architecture</p>
            </li>  
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Build the front-end of applications through appealing visual design</p>
            </li>  
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop well-functioning databases and applications</p>
            </li>  
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Test software to ensure responsiveness and efficiency</p>
            </li>      
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Troubleshoot, debug and upgrade software</p>
            </li>                  
          </ul>
        </article>
        {/**End of Content Creation */}
        
      </div>
    </section>
  )
}

export default Profilio_Services