import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="carousel-wrap">
    <Slider {...settings}>
      <div className="carousel-item">
        <div className="icon-wrap">
          <i class="zmdi zmdi-run"></i>
        </div>
        <span>Sleeping</span>
      </div>

      <div className="carousel-item">
        <div className="icon-wrap">
        <i class="zmdi zmdi-landscape"></i>
        </div>
        <span>Sightseeing</span>
      </div>

      <div className="carousel-item">
        <div className="icon-wrap">
          <i class="zmdi zmdi-run"></i>
        </div>
        <span>Sleeping</span>
      </div>
      <div className="carousel-item">
        <div className="icon-wrap">
          <i class="zmdi zmdi-run"></i>
        </div>
        <span>Sleeping</span>
      </div>
      <div className="carousel-item">
        <div className="icon-wrap">
          <i class="zmdi zmdi-run"></i>
        </div>
        <span>Sleeping</span>
      </div>
      <div className="carousel-item">
        <div className="icon-wrap">
          <i class="zmdi zmdi-run"></i>
        </div>
        <span>Sleeping</span>
      </div>

      
    </Slider>
    </div>
  );
}
