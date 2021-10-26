import React, { Component } from "react";
import Slider from "react-slick";

import CarouselCard from "../../components/CarouselCard";
import ButtonDefault from "../../components/ButtonDefault";

import Auth1 from "../../assets/images/Auth1.png";
import Auth2 from "../../assets/images/Auth2.png";
import Auth3 from "../../assets/images/Auth3.png";
import Auth4 from "../../assets/images/Auth4.png";

import "./Carousel.scss";
import LeftIcon from "../../assets/images/icons/LeftArrow.svg";
import RightIcon from "../../assets/images/icons/RightArrow.svg";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <span className="carouselIcon"><img src={LeftIcon} alt="nextArrow" {...props} /></span>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <span className="carouselIcon"><img src={RightIcon} alt="nextArrow" {...props} /></span>
);

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }


  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "100px",
      slidesToShow: 2.5,
      speed: 500,
      autoplay: true,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,

      responsive: [
        {
          breakpoint: 768,
          settingsRes: {
            slidesToShow: 2,
            centerMode: false,
            centerPadding: '30px'
          }
        }
      ]
    };

    return (
      <div className="Carousel">
        <div className="carousel-inner container">
          <ButtonDefault btnTitle="Button" text="Our customers says" />
        </div>

        <div className="carousel-cards">
          <Slider {...settings} className="container">
            <CarouselCard
              carouselCardText="
                            “ This is an super space
                            for your customers qoute.
                            Don’t worry it works smooth as pie.
                            You will get all what you need by writiing
                            a text here “"
              carouselCardAuthor="Name and Surname"
              CarouselCardImg={Auth1}
            />

            <CarouselCard
              carouselCardText="
                            “ This is an super space
                            for your customers qoute.
                            Don’t worry it works smooth as pie.
                            You will get all what you need by writiing
                            a text here “"
              carouselCardAuthor="Name and Surname"
              CarouselCardImg={Auth2}
            />

            <CarouselCard
              carouselCardText="
                            “ This is an super space
                            for your customers qoute.
                            Don’t worry it works smooth as pie.
                            You will get all what you need by writiing
                            a text here “"
              carouselCardAuthor="Name and Surname"
              CarouselCardImg={Auth3}
            />

            <CarouselCard
              carouselCardText="
                            “ This is an super space
                            for your customers qoute.
                            Don’t worry it works smooth as pie.
                            You will get all what you need by writiing
                            a text here “"
              carouselCardAuthor="Name and Surname"
              CarouselCardImg={Auth4}
            />

            <CarouselCard
              carouselCardText="
                            “ This is an super space
                            for your customers qoute.
                            Don’t worry it works smooth as pie.
                            You will get all what you need by writiing
                            a text here “"
              carouselCardAuthor="Name and Surname"
              CarouselCardImg={Auth2}
            />

            <CarouselCard
              carouselCardText="
                            “ This is an super space
                            for your customers qoute.
                            Don’t worry it works smooth as pie.
                            You will get all what you need by writiing
                            a text here “"
              carouselCardAuthor="Name and Surname"
              CarouselCardImg={Auth3}
            />
          </Slider>
        </div>
      </div>
    );
  }
}
