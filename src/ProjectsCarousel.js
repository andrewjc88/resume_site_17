import React from 'react';
import Slider from 'react-slick';

class ProjectsCarousel extends React.Component {
  render() {

    function inportImgs(e) {
      let images = {};
      e.keys().map((item, index) => { images[item.replace('./', '')] = e(item) });
      return images;
    };

    const images = inportImgs(require.context('./img/ProjectsCarousel', false, /\.(png|jpe?g|svg)$/));

    let settings = {
      swipeToSlide: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
      autoplaySpeed: 6000,
      dots: true,
      adaptiveWidth: true, 
    };

    return (
      <Slider {...settings}>
        <div className='Slider'>
          <a href="https://andrewjc88.github.io/myreads-app/">
            <img className='SliderImg' src={images["MyReads.png"]} alt="My Reads app"/>
          </a>
          <p className="SliderText">Built a responsive web application that allows users to select and categorize books into a virtual bookshelf. Leveraged React to support a dynamic user interface that interacts with an API server and client library.</p>
          <a href="https://github.com/andrewjc88/myreads-app">github</a>
        </div>
        <div className='Slider'>
          <a href="https://andrewjc88.github.io/DEAL_QUEST/">
            <img className='SliderImg' src={images["DealQuest.png"]} alt="DealQuest app"/>
          </a>
          <p className="SliderText">A single-page web application, built using the Knockout.js, Zurb Foundation, Google maps API and groupon API, that displays a Map of an area and various points of interest. Users can search all Groupon deals by city or zip coade.</p>
          <a href="https://github.com/andrewjc88/DEAL_QUEST/">github</a>
        </div>
        <div className='Slider'>
          <a href="https://andrewjc88.github.io/classicArcadeGame/">
            <img className='SliderImg' src={images["ClassicArcade.png"]} alt="Classic Aracde game"/>
          </a>
          <p className="SliderText">An HTML5 Canvas powered video game, developed using the best practices in Object Oriented JavaScript.</p>
          <a href="https://github.com/andrewjc88/classicArcadeGame/">github</a>
        </div>
      </Slider>
    );
  }
}

export default ProjectsCarousel;