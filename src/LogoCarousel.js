import React from 'react';
import Slider from 'react-slick';

class LogoCarousel extends React.Component {
  render() {

    function inportImgs(e) {
      let images = {};
      e.keys().map((item, index) => { images[item.replace('./', '')] = e(item); }); 
      return images;
    }

    const images = inportImgs(require.context('./img/logos', false, /\.(gif|png|jpe?g|svg)$/));

    let settings = {
      adaptiveHeight: true,
      variableHeight: true,
      autoplay: true,
      autoplaySpeed: 1000,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      variableWidth: true,
      adaptiveWidth: true,
      lazyLoad: true,
      swipe: true,
      responsive: [
        { breakpoint: 670, settings:{
          slidesToShow: 3,
          arrows: false,
        }}
      ]
    };

    return (
      <Slider {...settings} className="LogoSlider">

        <div><img className="logoImg" src={images["react_logo.png"]} alt="react_logo"/></div>
        <div><img className="logoImg" src={images["js_logo.png"]} alt="js_logo"/></div>
        <div><img className="logoImg" src={images["logo-redux.png"]} alt="logo-redux"/></div>
        <div><img className="logoImg" src={images["jQuery_logo.gif"]} alt="jQuery"/></div>
        <div><img className="logoImg" src={images["nodejs.png"]} alt="node.js"/></div>
        <div><img className="logoImg" src={images["python.png"]} alt="python"/></div>
        <div><img className="logoImg" src={images["Sketch_logo_frame.svg.png"]} alt="Sketch"/></div>
        <div><img className="logoImg" src={images["css_logo.png"]} alt="css_logo"/></div>
        <div><img className="logoImg" src={images["github.png"]} alt="github"/></div>
        <div><img className="logoImg" src={images["html_logo.png"]} alt="html_logo"/></div>
        <div><img className="logoImg" src={images["photoshop-cc.png"]} alt="photoshop"/></div>
        <div><img className="logoImg" src={images["adobe-illustrator-cc.png"]} alt="adobe-illustrator"/></div>

      </Slider>
    );
  }
}

export default LogoCarousel;