import React, { Component } from 'react';
import ProjectsCarousel from './ProjectsCarousel';
import LogoCarousel from './LogoCarousel';
import RecCarousel from './recCarousel'
import AOS from 'aos';
import Logo from './img/logo.png';
import Me from './img/me.jpg';
import QRcode from './img/contactQR.png'
import Resume from './downloads/Resume.pdf';
import './App.css';

class App extends Component {

  state = {
    clicked: false
  }

  contactClicked = () => {
    this.setState(() => ({clicked: true }));
  };

  render() {

    AOS.init({
      duration: 500,
      easing: 'ease-in-sine',
      delay: 200,
    });



    return (
      
      <div className="App">
        {console.log(this.state.clicked)}
        <div className='Intro Section' >
          <img src={Logo} className="Logo" alt="Andrew Cornell logo" data-aos="fade-in"/>
          {/* <button className='ScrollArrow' onClick={scrollWindow}></button> */}
          {/* <a href="#Test Section">test</a> */}
        </div>

        <div className='About Section' id='Test' data-aos="fade-up">
          <h1>About</h1>
          <div className='AboutCont'>
            <img src={Me} className='Selfie'  alt="me"/>
            <p className="AboutMe">Driven, Detail oriented, self-taught, Front-end Web Developer with strong graphic design background looking to establish and expand expertise in web / mobile app development. Excels at communicating and collaborating in fast-paced environments. Enjoys rapid prototyping ideas and finding new creative solutions&nbsp;to&nbsp;problems.</p>
          </div>
        </div>

        <div className='Projects Section' data-aos="fade-up">
          <h1>Projects</h1>
            <div className='Carousel'>
              <ProjectsCarousel/> 
            </div>
        </div>

        <div className='RecCarousel Section' data-aos="fade-up">
          <h1>Recommendations</h1>
          <div className='Carousel'>
            <RecCarousel/>
          </div>
        </div>

        <div className='Tools Section' data-aos="fade-up">
          <h1>Tools</h1>
          <p>Here are some of my favorite tools and technologies that I love to use to make the things that&nbsp;I&nbsp;make. </p>
          <LogoCarousel/>
        </div>

        <div className='Contact Section' id="contact" data-aos="fade-up">
          <h1>Contact</h1>
          <div className='ContactCont'>
            <h3>Andrew Cornell<br/>San Francisco, CA<br/>(831) 419–4106</h3>
          <img className="QRimage" src={QRcode} alt="My QR Code"/>
          <div className="ContactLinks">
            <a href="mailto:contact@andrewjcornell.com">email</a>
            <a href="https://www.linkedin.com/in/andrew-cornell-dev/">linkedin</a>
            <a href="https://github.com/andrewjc88">github</a>
            <a href={Resume} download>Resume</a>
          </div>
          </div>
        </div>
        {this.state.clicked === false && 
          <a 
            href="#contact" 
            onClick={this.contactClicked}
            className="Contact-Button {this.state.clicked}">
            Contact
          </a>
        }
      </div>
    );
  }
}

export default App;
