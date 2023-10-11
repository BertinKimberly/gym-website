import React from "react";
import "./about.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/p13.jpeg";
import StoryImage from "../../images/p11.jpeg";
import VisionImage from "../../images/p9.jpeg";
import MissionImage from "../../images/p10.jpeg";
const About = () => {
   return (
      <>
         <Header
            title='About Us'
            image={HeaderImage}
         >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta,
            veniam obcaecati quam sit aspernatur nam velit consectetur corrupti
            eum officia.
         </Header>
         <section className='about__story'>
            <div className='container about__story-container'>
               <div className='about__section-image'>
                  <img
                     src={StoryImage}
                     alt='Our Story Pic '
                  />
               </div>
               <div className='about__section-content'>
                  <h1>Our Story</h1>
                  <p>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Dolorum distinctio, aperiam cupiditate enim numquam
                     dignissimos eos ipsum excepturi facere. Possimus.
                  </p>
                  <p>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Dolorum distinctio, aperiam cupiditate enim numquam
                     dignissimos eos ipsum excepturi facere. Possimus.
                  </p>
                  <p>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
               </div>
            </div>
         </section>
         <section className='about__vision'>
            <div className='container about__vision-container'>
               <div className='about__section-content'>
                  <h1>Our Vision</h1>
                  <p>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Dolorum distinctio, aperiam cupiditate enim numquam
                     dignissimos eos ipsum excepturi facere. Possimus.
                  </p>
                  <p>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Dolorum distinctio, aperiam cupiditate enim numquam
                     dignissimos eos ipsum excepturi facere. Possimus.
                  </p>
               </div>
               <div className='about__section-image'>
                  <img
                     src={VisionImage}
                     alt='Our Vision Pic'
                  />
               </div>
            </div>
         </section>
         <section className='about__mission'>
            <div className='container about__mission-container'>
               <div className='about__section-image'>
                  <img
                     src={MissionImage}
                     alt='Our Mission Pic'
                  />
               </div>
               <div className='about__section-content'>
                  <h1>Our Mission</h1>
                  <p>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Dolorum distinctio, aperiam cupiditate enim numquam
                     dignissimos eos ipsum excepturi facere. Possimus.
                  </p>
                  <p>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Dolorum distinctio, aperiam cupiditate enim numquam
                     dignissimos eos ipsum excepturi facere. Possimus.
                  </p>
                  <p>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
               </div>
            </div>
         </section>
      </>
   );
};

export default About;
