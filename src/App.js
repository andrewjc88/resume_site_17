import React, { Component } from 'react';
import ProjectsCarousel from './ProjectsCarousel.js';
import LogoCarousel from './LogoCarousel.js';
import AOS from 'aos';
import Logo from './img/logo.png';
import DonwArrow from './img/downArrow.svg';
import Me from './img/me.jpg';
import codeImg from './img/code.jpg';
import QRcode from './img/contactQR.png'

import './App.css';

class App extends Component {

  render() {

    AOS.init({
      
      duration: 500,
      easing: 'ease-in-sine',
      delay: 200,
    });

    function scrollWindow() {
      window.scrollTo(0, 550);
    }


    return (
      
      <div className="App">

        <div className='Intro Section' >
          <img src={Logo} className="Logo" alt="Andrew Cornell logo" data-aos="fade-in"/>
          {/* <button className='ScrollArrow' onClick={scrollWindow}></button> */}
          {/* <a href="#Test Section">test</a> */}
        </div>

        <div className='About Section' id='Test' data-aos="fade-up">
          <h1>About Me</h1>
          <div className='AboutCont'>
            <img src={Me} className='Selfie'  alt="A picture of me"/>
            <p className="AboutMe">Detail oriented, self-taught, Front-end Web Developer with strong graphic design background looking to establish and expand industry knowledge in web development. I excel at working at collaborating in a fast paced environment and rapid prototyping ideas on&nbsp;the&nbsp;fly.</p>
          </div>
        </div>

        <div className='Projects Section' data-aos="fade-up">
          <h1>My Projects</h1>
            <div className='Carousel'>
              <ProjectsCarousel/> 
            </div>
        </div>

        <div className='Tools Section' data-aos="fade-up">
          <h1>My Favorite Tools</h1>
          <p>Here are some of my favorite tools and technologies that I love to use to make the things that&nbsp;I&nbsp;make. </p>
          <LogoCarousel/>
        </div>

        <div className='Contact Section' data-aos="fade-up">
          <h1>Contact Me</h1>
          <div className='ContactCont'>
            <h3>Andrew Cornell<br/>San Francisco, CA</h3>
          <img className="QRimage" src={QRcode} alt="My QR Code image"/>
          <div className="ContactLinks">
            <a href="andrew@cornellcreates.com">email</a>
            <a href="https://www.linkedin.com/in/andrew-cornell-dev/">linkedin</a>
            <a href="https://github.com/andrewjc88">github</a>
          </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
