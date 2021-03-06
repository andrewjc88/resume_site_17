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
      lazyLoad: true,
      pauseOnHover: true,
      autoplaySpeed: 9000,
      dots: true,
      adaptiveWidth: true,
      responsive: [
        { breakpoint: 670, settings:{
          slidesToShow: 1,
          arrows: false,
        }}
      ]
    };

    return (
      <Slider {...settings}>
        <div className='Slider'>
          <a href="https://andrewjc88.github.io/myreads-app/">
            <img className='SliderImg' src={images["MyReads.jpg"]} alt="My Reads app"/>
          </a>
          <p className="SliderText">Built a responsive web application that allows users to select and categorize books into a virtual bookshelf. Leveraged React to support a dynamic user interface that interacts with an API server and client library.</p>
          <a className='Button' href="https://andrewjc88.github.io/myreads-app/">Project</a>
          <a className='Button' href="https://github.com/andrewjc88/myreads-app">github</a>
        </div>
        {/* <div className='Slider'>
          <a href="https://projects.invisionapp.com/share/YVCBYWF8A#/screens/240783924">
            <img className='SliderImg' src={images["maregroup.png"]} alt="Mare Group"/>
          </a>
          <p className="SliderText">Successfully redesigned site using Skethc and invision. Incorporated feedback while honing content and improving overall aesthetic and mobile accessibility of content.</p>
          <a className='Button' href="https://projects.invisionapp.com/share/YVCBYWF8A#/screens/240783924">Project</a>
        </div> */}
        <div className='Slider'>
          <a href="https://andrewjc88.github.io/DEAL_QUEST/">
            <img className='SliderImg' src={images["DealQuest.jpg"]} alt="DealQuest app"/>
          </a>
          <p className="SliderText">A single-page web application, built using the Knockout.js, Zurb Foundation, Google maps API and groupon API, that displays a Map of an area and various points of interest. Users can search all Groupon deals by city or zip coade.</p>
          <a className='Button' href="https://andrewjc88.github.io/DEAL_QUEST/">Project</a>
          <a className='Button' href="https://github.com/andrewjc88/DEAL_QUEST/">github</a>
        </div>
        <div className='Slider'>
          <a href="https://andrewjc88.github.io/classicArcadeGame/">
            <img className='SliderImg' src={images["ClassicArcade.jpg"]} alt="Classic Aracde game"/>
          </a>
          <p className="SliderText">An HTML5 Canvas powered video game, developed using the best practices in Object Oriented JavaScript.</p>
          <a className='Button' href="https://andrewjc88.github.io/classicArcadeGame/">Project</a>
          <a className='Button' href="https://github.com/andrewjc88/classicArcadeGame/">github</a>
        </div>

        <div className='Slider'>
          <a href="https://andrewjc88.github.io/frontend-nanodegree-feedreader/">
            <img className='SliderImg' src={images["FeedReader.jpg"]} alt="FeedReader app"/>
          </a>
          <p className="SliderText">Wrote comprehensive unit tests, using the Jasmine testing framework, for an RSS Feed Reader application that uses Google's RSS API.</p>
          <a className='Button' href="https://andrewjc88.github.io/frontend-nanodegree-feedreader/">Project</a>
          <a className='Button' href="https://github.com/andrewjc88/frontend-nanodegree-feedreader/">github</a>
        </div>
      </Slider>
    );
  }
}

export default ProjectsCarousel;
