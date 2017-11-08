import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import AOS from 'aos';
import Logo from './img/logo.png';
import DonwArrow from './img/downArrow.svg';
import Me from './img/me.jpg';
import codeImg from './img/code.jpg';

import './App.css';

class App extends Component {

  render() {

    AOS.init({
      
      duration: 500,
      easing: 'ease-in-sine',
      delay: 200,
    });

    return (
      
      <div className="App">

        <div className='Intro Section' >
          <img src={Logo} className="Logo" alt="Andrew Cornell logo" data-aos="fade-in"/>
          <img src={DonwArrow} className="DownArrow" alt="A sroll down arrow"/>
        </div>

        <div className='About Section' data-aos="fade-up">
          <img src={Me} className='Selfie'  alt="A picture of me"/>
          <h1>About</h1>
          <p className="AboutMe">Detail oriented, self-taught, Front-end Web Developer with strong graphic design background looking to establish and expand industry knowledge in web development. I excel at working at collaborating in a fast paced environment and rapid prototyping ideas on the fly.</p>
        </div>

        <div className='Projects Section' data-aos="fade-up">
          <h1>Projects</h1>
          <Carousel showThumbs={false}>
            <div>
                <img src={codeImg} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={codeImg} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={codeImg} />
                <p className="legend">Legend 3</p>
            </div>
            </Carousel>
        </div>

        <div className='Tools Section' data-aos="fade-up">
          <h1>Tools</h1>
        </div>

        <div className='Contact Section' data-aos="fade-up">
          <h1>Contact</h1>
        </div>

      </div>
    );
  }
}

export default App;
