import React from 'react';
import './Profilio_Testimonials.css';
import Avatar1 from '../Images/avatar5.jpg';
import Avatar2 from '../Images/avatar7.jpg';
import Avatar3 from '../Images/avatar6.jpg';
import Avatar4 from '../Images/avatar8.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
  avatar:Avatar1,
  name:'Vim Nguyen',
  review:'As a classmate of Steven, I have had the opportunity to witness his dedication and passion for web development firsthand. He consistently demonstrate a deep understanding of programming languages and frameworks, and he is always eager to share his knowledge with others. Whether it is helping classmates troubleshoot coding issues or collaborating on group projects, Steven is a valuable asset to our cohort.'
  },
  {
  avatar:Avatar2,
  name:'Allen Wale',
  review:'I have known Steven for a year and have had the pleasure of witnessing his growth and development as a web developer. From the early days of learning HTML and CSS to mastering advanced JavaScript frameworks, Steven has shown remarkable progress and dedication to their craft. He has a natural talent for understanding complex coding concepts and applying his creatively in his projects.'
  },
  {
  avatar:Avatar3,
  name:'Ned Swanzi',
  review:'I have had the pleasure of teaching Steven in Tafe, and I can confidently say that he is one of the most talented students I have encountered. He possesses a natural flair for coding and consistently delivers outstanding work on his projects. Steven is not only skilled in writing clean and efficient code but also has a keen eye for design and user experience. Also,he actively seeks out opportunities to expand his knowledge in web development.'
  },
  {
  avatar:Avatar4,
  name:'Jawdat Malian',
  review:'Steven is an exemplary student whose passion for web development shines through in everything he does. He approaches each lesson with enthusiasm and a thirst for knowledge, always eager to explore new technologies and techniques. Steven paid attention to detail and dedication to his craft are truly commendable, and he consistently produces work of the highest caliber. '
  }
  ];


const Profilio_Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}      
      pagination={{ clickable: true }}>
        
        {
          data.map(({avatar, name, review}, index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>          
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Profilio_Testimonials