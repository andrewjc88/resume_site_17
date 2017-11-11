import React from 'react';
import Slider from 'react-slick';

class ProjectsCarousel extends React.Component {
  render() {

    function inportImgs(e) {
      let images = {};
      e.keys().map((item, index) => { images[item.replace('./', '')] = e(item); }); 
      return images;
    }

    const images = inportImgs(require.context('./img/ProjectsCarousel', false, /\.(png|jpe?g|svg)$/));

    let settings = {
      swipeToSlide: true,
      autoplay: true,
      // speed: 1500,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
      autoplaySpeed: 6000,

      dots: true,

      adaptiveHeight: true,
      adaptiveWidth: true, 
      // variableWidth: true,
      // variableHeight: true, 

      // responsive: [
      //   { breakpoint: 768, settings:{
          
      //   }}
      // ]
    };

    return (
      <Slider {...settings}>
        <div className='Slider'>
          <img className='SliderImg' src={images["MyReads.png"]} alt="My Reads app Image"/>
          <a href="https://github.com/andrewjc88/reactnd-project-myreads-starter">My Reads App</a>
          <p className="SliderText">In this app I used Create React App with React Router to pull books from an API and display and sort them</p>
        </div>
        <div className='Slider'>
          <img className='SliderImg' src={images["MyReads.png"]} alt="My Reads app Image"/>
          <a href="https://github.com/andrewjc88/reactnd-project-myreads-starter">My Reads App</a>
          <p className="SliderText">In this app I used Create React App with React Router to pull books from an API and display and sort them</p>
        </div>
        <div className='Slider'>
          <img className='SliderImg' src={images["MyReads.png"]} alt="My Reads app Image"/>
          <a href="https://github.com/andrewjc88/reactnd-project-myreads-starter">My Reads App</a>
          <p className="SliderText">In this app I used Create React App with React Router to pull books from an API and display and sort them</p>
        </div>
        <div className='Slider'>
          <img className='SliderImg' src={images["MyReads.png"]} alt="My Reads app Image"/>
          <a href="https://github.com/andrewjc88/reactnd-project-myreads-starter">My Reads App</a>
          <p className="SliderText">In this app I used Create React App with React Router to pull books from an API and display and sort them</p>
        </div>
        <div className='Slider'>
          <img className='SliderImg' src={images["MyReads.png"]} alt="My Reads app Image"/>
          <a href="https://github.com/andrewjc88/reactnd-project-myreads-starter">My Reads App</a>
          <p className="SliderText">In this app I used Create React App with React Router to pull books from an API and display and sort them</p>
        </div>
      </Slider>
    );
  }
}

export default ProjectsCarousel;