import React from 'react';
import './Profilio_Profilio.css';
import IMG1 from '../Images/img1.jpg';
import IMG2 from '../Images/img2.jpg';
import IMG3 from '../Images/img3.jpg';
import IMG4 from '../Images/img4.jpg';
import IMG5 from '../Images/img5.jpg';
import IMG6 from '../Images/img6.png';

const data=[
  {
  id:1,
  image:IMG1, 
  title:'Eclipse - Figma dashboard UI kit for data design web apps',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/23441440-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
  id:2,
  image:IMG2, 
  title:'Make Impactful Data Visualizations in Figma with Hyper Charts UI',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/23224283-Make-Impactful-Data-Visualizations-in-Figma-with-Hyper-Charts-UI'
  },
  {
  id:3,
  image:IMG3, 
  title:'Figma dashboard UI kit for data design',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/22889410-Figma-dashboard-UI-kit-for-data-design'
  },
  {
  id:4,
  image:IMG4, 
  title:'Eclipse - Figma dashboard UI kit for data design web apps',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/22397835-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
  id:5,
  image:IMG5, 
  title:'Global data visualization templates',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/22397589-Global-data-visualization-templates'
  },
  {
  id:6,
  image:IMG6, 
  title:'High quality graphs served as figma library',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/23126240-High-quality-graphs-served-as-figma-library'
  }  
  ];

const Profilio_Profilio = () => {
  return (
    <section id='profilio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo})=>{
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>          
              </article>
            )
          })
        }        
      </div>
    </section>
  )
}

export default Profilio_Profilio