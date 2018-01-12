import React from 'react';
import Slider from 'react-slick';

class RecCarousel extends React.Component {
  render() {

    function inportImgs(e) {
      let images = {};
      e.keys().map((item, index) => { images[item.replace('./', '')] = e(item) });
      return images;
    };

    const images = inportImgs(require.context('./img/recomendationThumbs', false, /\.(png|jpe?g|svg)$/));

    let settings = {
      swipeToSlide: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
      autoplaySpeed: 12000,
      lazyLoad: true,
      dots: true,
      adaptiveWidth: true, 
      responsive: [
        { breakpoint: 670, settings:{
          slidesToShow: 1,
          arrows: false,
          autoplaySpeed: 12000,
        }}
      ]
    };

    return (
      <Slider {...settings}>
        <div className='Slider'>
          <a href="https://www.linkedin.com/in/kevin-breen-6762164/">
            <img className='recSliderImg' src={images["kevin.jpg"]} alt="My Reads app"/>
          </a>
          <h3>Kevin Breen<br/>Sr Creative Director at Mobiquity Inc.</h3>
          <p className="SliderText">"I had the pleasure of working with Andrew for the past year while at Pepperjam. Andrew embodies so many of the qualities that I look for when building a staff. He is fully dedicated to his craft and always curious to learn and understand new aspects of design/creativity from every possible direction. Without prompting, Andrew explores paths that compliment not only his core talents but also the business itself, constantly seeking how to do something better. He is a certified whiz in Photoshop, working quickly and proficiently to produce flawless design executions. And his broad creative abilities (photography, branding, HTML) are often used to support his solutions. Finally, Andrew's consistent professionalism leads to consistent success in him and those around him. If you are looking for a designer to add to your staff or project, please consider Andrew."</p>
        </div>
        <div className='Slider'>
          <a href="https://www.linkedin.com/in/chris-mccready-1094a673/">
            <img className='recSliderImg' src={images["chris.jpg"]} alt="DealQuest app"/>
          </a>
          <h3>Chris McCready<br/>Head / VP of Business Development</h3>
          <p className="SliderText">"Andrew is a fantastic person to have on your team. Not only is he an extremely talented designer, he has a constant hunger for learning and growth. Though it wasn't always part of his responsibilities, Andrew would jump in to help us in Business Development for collateral, marketing materials, presentations...basically anything anyone needed. I think my favorite thing about working with him was his work ethic. He was always happy to be there every day and so humble it made giving compliments to him even more fun. The display ads he created, always on tight deadlines, for clients across the globe resulted in a great deal of revenue for all companies involved. I truly hope we get to cross paths again professionally as he'd be a great asset on ANY team!"</p>
        </div>
        <div className='Slider'>
          <a href="https://www.linkedin.com/in/jesse-hoffmann-36a58149/">
            <img className='recSliderImg' src={images["jesse.jpg"]} alt="Jesse Hoffman"/>
          </a>
          <h3>Jesse Hoffmann<br/>Senior User Experience Architect</h3>
          <p className="SliderText">"Andrew worked under me for a few years, first through mentorship and private contracting and then hired on to AffiliateTraction which was further acquired by Pepperjam. At AffiliateTraction, he created countless online display ads for hundreds of major brand retailers and learned techniques for satisfying their quality expectations with the utmost efficiency. He was a part of a team of only 3 that produced consistent, quality results and turned out thousands of ads per year under very tight deadlines. Andrew also produced ads for companies located in the UK and Australia so he has experience, not just in high volume, but meeting wide varying expectations across clients."</p>
        </div>
      </Slider>
    );
  }
}

export default RecCarousel;