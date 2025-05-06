import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true, // Optional: hides default arrows if you want custom ones
    fade: true // Optional: adds fade effect between slides
  };

  // Banner slides data
  const slides = [
    {
      id: 1,
      className: "work-1",
      category: " Burhani, Abron",
      title: "Precision Cutting Starts Here"
    },
    {
      id: 2,
      className: "work-2",
      category: " Burhani, Abron",
      title: "Be Quick! Get the best Grinding Wheel"
    },
    {
      id: 3,
      className: "work-3",
      category: " Burhani, Abron",
      title: "Industrial Strength Performance"
    }
  ];

  return (
    <div className="main-banner">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className={`item ${slide.className}`}>
            <div className="header-text">
              <span className="category">
                {slide.category.split(', ')[0]}, <em>{slide.category.split(', ')[1]}</em>
              </span>
              <h2 dangerouslySetInnerHTML={{ __html: slide.title.replace('<br>', '<br/>') }} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;