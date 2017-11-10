import React from 'react';
import Slider from 'react-slick';

class ProjectsCarousel extends React.Component {
  render() {

    function inportImgs(e) {
      let images = {};
      e.keys().map((item, index) => { images[item.replace('./', '')] = e(item); }); 
      return images;
    }

    const images = inportImgs(require.context('./img', false, /\.(png|jpe?g|svg)$/));

    let settings = {
      adaptiveHeight: true,
      autoplay: true,
      speed: 1500,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      pauseOnHover: true,
      autoplaySpeed: 6000,
      // variableWidth: true,
      responsive: [
        {

        }
      ]
    };

    return (
      <Slider {...settings}>
        <div className='Slider'>
          <img className='SliderImg' src='https://source.unsplash.com/900x500/?sexy' alt=""/>
          <h2>BookShelf App</h2>
          <p className="SliderText">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className='Slider'>
          <img className='SliderImg' src='https://source.unsplash.com/900x500/?girl' alt=""/>
          <h2>Portfolio Site</h2>
          <p className="SliderText">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className='Slider'>
          <img className='SliderImg' src='https://source.unsplash.com/900x500/?woman' alt=""/>
          <h2>Mare Group Project</h2>
          <p className="SliderText">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className='Slider'>
          <img className='SliderImg' src='https://source.unsplash.com/900x500/?sunset' alt=""/>
          <h2>t49 Agency</h2>
          <p className="SliderText">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className='Slider'>
          <img className='SliderImg' src='https://source.unsplash.com/900x500/?lady' alt=""/>
          <h2><a href="">Mare Group Project</a></h2>
          <p className="SliderText">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </Slider>
    );
  }
}

export default ProjectsCarousel;