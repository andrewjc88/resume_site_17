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
          <a href="https://www.linkedin.com/in/steven-cheong-55404bbb/">
            <img className='recSliderImg' src={images["steven.jpeg"]} alt="My Reads app"/>
          </a>
          <h3>Steven Cheong<br/>Senior Engineering Tech Lead at Datatron Technologies Inc.</h3>
          <p className="SliderText">"Andrew is an excellent team player. In the frontend team, he is usually the person his teammates seek help from and he is always willing to help. When it comes to development, Andrew always uses his previous UX experience to bring great ideas during the development process. He is also a go-getter - I still remember when Andrew first joined. After just 1 or 2 weeks, he was already pushing the team to migrate our Angular application to React. He took ownership of the project with another frontend team member and made it happened. All in all, Andrew would be a great addition to any team that highly values teamwork, boldness, and curiosity."</p>
        </div>
        <div className='Slider'>
          <a href="https://www.linkedin.com/in/aaronhdong/">
            <img className='recSliderImg' src={images["aaron.jpeg"]} alt="My Reads app"/>
          </a>
          <h3>Aaron Dong<br/>Product Designer at Datatron Technologies Inc.</h3>
          <p className="SliderText">"Andrew is not only an excellent engineer but also one of the most motivated, smart, and hard-working teammates I’ve had the pleasure of working with ever. Whether he’s working diligently to build out the frontend from the ground up, collaborating on ways to improve the UI/UX of the platform, or just being an overall awesome teammate, I’ve never met someone more willing to go above and beyond for the people around him. Andrew has a talent for quickly developing features in code, identifying places for UI/UX improvements, and providing relevant and constructive feedback. I knew I could trust Andrew to bring my designs to life. His enthusiasm, eagerness to learn, and overall positive personality have been a very positive highlight in our time working together. It has been an amazing time working alongside Andrew and wherever his career takes him next, I wholeheartedly believe he will be the perfect addition to your team."</p>
        </div>
        <div className='Slider'>
          <a href="https://www.linkedin.com/in/kevin-breen-6762164/">
            <img className='recSliderImg' src={images["kevin.jpg"]} alt="My Reads app"/>
          </a>
          <h3>Kevin Breen<br/>Sr Creative Director at Mobiquity Inc.</h3>
          <p className="SliderText">"I had the pleasure of working with Andrew for the past year while at Pepperjam. Andrew embodies so many of the qualities that I look for when building a staff. He is fully dedicated to his craft and always curious to learn and understand new aspects of design/creativity from every possible direction. Without prompting, Andrew explores paths that compliment not only his core talents but also the business itself, constantly seeking how to do something better. He is a certified whiz in Photoshop, working quickly and proficiently to produce flawless design executions. And his broad creative abilities (photography, branding, HTML) are often used to support his solutions. Finally, Andrew's consistent professionalism leads to consistent success in him and those around him. If you are looking for a designer to add to your staff or project, please consider Andrew."</p>
        </div>
        <div className='Slider'>
          <a href="https://www.linkedin.com/in/cwhyte/">
            <img className='recSliderImg' src={images["charles.jpg"]} alt="My Reads app"/>
          </a>
          <h3>Charles Whyte<br/>Product Owner at Pepperjam</h3>
          <p className="SliderText">"Andrew is a fantastic designer and a real pleasure to work with. Always up on the latest tech, Andrew was instrumental in suggesting ways to improve process and solve existing problems. Andrew's creative spirit and curiosity makes him a real asset."</p>
        </div>
        <div className='Slider'>
          <a href="https://www.linkedin.com/in/chris-mccready-1094a673/">
            <img className='recSliderImg' src={images["chris.jpg"]} alt="DealQuest app"/>
          </a>
          <h3>Chris McCready<br/>Head / VP of Business Development</h3>
          <p className="SliderText">"Andrew is a fantastic person to have on your team. Not only is he an extremely talented designer, he has a constant hunger for learning and growth. Though it wasn't always part of his responsibilities, Andrew would jump in to help us in Business Development for collateral, marketing materials, presentations...basically anything anyone needed. I think my favorite thing about working with him was his work ethic. He was always happy to be there every day and so humble it made giving compliments to him even more fun. The display ads he created, always on tight deadlines, for clients across the globe resulted in a great deal of revenue for all companies involved. I truly hope we get to cross paths again professionally as he'd be a great asset on ANY team!"</p>
        </div>
      </Slider>
    );
  }
}

export default RecCarousel;