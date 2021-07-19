import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import img1 from '../img/slider/1.jpg';
import img2 from '../img/slider/2.jpg';
import img3 from '../img/slider/3.jpg';
import lightbox_right from '../img/lightbox_right.svg';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className + ` sto-lp__slick-next`} onClick={onClick} />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className + ` sto-lp__slick-prev`} onClick={onClick} />
  );
}

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider className="sto-lp__slider" {...settings}>
      <div>
        <Image src={img1} />
      </div>
      <div>
        <Image src={img2} />
      </div>
      <div>
        <Image src={img3} />
      </div>
    </Slider>
  );
}
