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
      lazyLoad: false,
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

        <div><img className="logoImg" src={images["adobe-illustrator-cc.png"]} alt=""/></div>
        <div><img className="logoImg" src={images["affinity-designer.png"]} alt=""/></div>
        <div><img className="logoImg" src={images["affinity-photo.png"]} alt=""/></div>
        <div><img className="logoImg" src={images["creative-cloud-cc.png"]} alt=""/></div>
        <div><img className="logoImg" src={images["css_logo.png"]} alt=""/></div>
        <div><img className="logoImg" src={images["gulp.png"]} alt=""/></div>
        <div><img className="logoImg" src={images["html_logo.png"]} alt=""/></div>
        <div><img className="logoImg" src={images["images.duckduckgo.com.png"]} alt=""/></div>
        <div><img className="logoImg" src={images["indesign-cc.png"]} alt=""/></div>
        <div><img className="logoImg" src={images["intro-foundation.png"]} alt=""/></div>
        <div><img className="logoImg" src={images["invision.png"]} alt=""/></div>
        <div><img className="logoImg" src={images["jQuery_logo.gif"]} alt=""/></div>
        <div><img className="logoImg" src={images["js_logo.png"]} alt=""/></div>
        <div><img className="logoImg" src={images["photoshop-cc.png"]} alt=""/></div>
        <div><img className="logoImg" src={images["react_logo.png"]} alt=""/></div>
        <div><img className="logoImg" src={images["Sketch_logo_frame.svg.png"]} alt=""/></div>

      </Slider>
    );
  }
}

export default LogoCarousel;