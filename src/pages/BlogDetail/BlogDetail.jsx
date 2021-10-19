import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { Breadcrumbs, Link, Typography } from "@material-ui/core";

import Header from "../../containers/Header";
import Footer from "../../containers/Footer";
import ButtonDefault from "../../components/ButtonDefault";
import BlogCard from "../../components/BlogCard";

import BlogCardImg6 from "../../assets/images/blogCardImg6.png";
import BlogCardImg7 from "../../assets/images/blogCardImg7.png";
import BlogDetailCardImg1 from "../../assets/images/BlogDetailCardImg1.png";
import BlogDetailCardImg2 from "../../assets/images/BlogDetailCardImg2.png";
import LeftIcon from "../../assets/images/icons/LeftArrow.svg";
import RightIcon from "../../assets/images/icons/RightArrow.svg";
import { BackIcon } from "../../assets/icons/icons";

import "./BlogDetail.scss";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <span className="carouselIcon"><img src={LeftIcon} alt="nextArrow" {...props} /></span>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <span className="carouselIcon"><img src={RightIcon} alt="nextArrow" {...props} /></span>
);

class BlogDetail extends Component {

  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }


  render () {

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "100px",
      slidesToShow: 3,
      speed: 500,
      autoplay: true,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />
    };


    return (
      <div className="BlogDetail">
        <Header />
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb" className="breadcrumbItems mt-4">
            <Link color="inherit" href="/" className="text-decoration-none breadcrumb">
              Homepage
            </Link>
            <Link
              color="inherit"
              href="/category"
              className="text-decoration-none breadcrumb"
            >
              Fruit and vegetables
            </Link>
            <Typography color="textPrimary" className="breadcrumb">Product title</Typography>
          </Breadcrumbs>
  
          <div className="BlogDetail-top">
            <div className="d-flex align-items-end justify-content-center titles">
              <div className="d-flex align-items-center">
                <div className="me-5">
                  <span className="dateTitle">Date:</span>
                  <span className="dateTitle">Category:</span>
                  <span className="dateTitle">Author:</span>
                </div>
  
                <div>
                  <span className="date">22. 6. 2020</span>
                  <span className="date">Dinner</span>
                  <span className="date">Admin</span>
                </div>
              </div>
              <h2 className="blogDetailTopTitle">
                Space for your heading, can be larger so don’t worry - large
                heading looks better
              </h2>
            </div>
          </div>
  
          <div className="BlogDetail-middle">
            <div className="left">
              <h4 className="blogDetailMidTitle">Tags</h4>
              <div>
                  <span className="blogDetailTag mb-2 me-2">Food</span>
                  <span className="blogDetailTag mb-2">Recepies</span>
              </div>
              <div className="mb-5">
                  <span className="blogDetailTag me-2">Fresh</span>
                  <span className="blogDetailTag">Vegetable</span>
              </div>
  
              <div className="backToBlog">
                <NavLink to="/blog" className="blogDetailMidTitle d-flex align-items-center">
                    <span className="me-2"><BackIcon /></span>
                    Back to Blog
                  </NavLink>
              </div>
            </div>
  
            <div className="right">
              <p className="blogDetailMidText mb-3">
                There’s nothing like a warm cup of tea to start your morning—or
                maybe you’re all about an iced hibiscus on a sunny Saturday
                afternoon. Whether you’re just craving chamomile or are looking to
                ditch your coffee dependency, here’s our go-to guide on
                incorporating a few new teas into your daily routine!
              </p>
  
              <h4 className="blogDetailMidTitle">Morning Ritual // 9:00 AM</h4>
              <p className="blogDetailMidText">
                Want that extra morning energy without the caffeine jitters?
                Switch out your morning mug of coffee for a warm, energizing cup
                of earl grey. Serve as is or stir in some milk and honey for extra
                coziness. If you want to spice things up, try chai tea instead!
                The combination of cinnamon, cardamom, and ginger smells amazing
                and gives you that nice little flavor kick to start your day off
                right.
              </p>
  
              <h4 className="blogDetailMidTitle">Mid-day Boost // 2:00 PM</h4>
              <p className="blogDetailMidText text2">
                If you’re feeling a little sluggish post-lunch, beat the afternoon
                slump with some lemon ginger green tea. Green tea can be a great
                alternative to coffee in the afternoon when you want that little
                boost of energy. An added benefit: lemon and ginger work together
                to aid digestion which is especially helpful after lunch.
              </p>
  
              <p className="blogDetailMidText">
                If you’re not into hot drinks, opt-in for a fruity iced green tea
                instead. Steep some honeydew or peach green tea in hot water for a
                few minutes and then pour over ice until it’s nice and cool. Enjoy
                with a slice of lemon, and you’ll feel refreshed and ready to
                tackle any task.
              </p>
  
              <h4 className="blogDetailMidTitle">Evening Calm // 8:00 PM</h4>
              <p className="blogDetailMidText">
                Slip on some fuzzy socks, light your favorite candles, and fire up
                the kettle—it’s time to wind down after a long day. Grab yourself
                a soothing cup of lavender chamomile tea and indulge in some
                well-deserved self-love.
              </p>
            </div>
          </div>
  
          <div className="blogDetailButtons">
            <ButtonDefault text="Related topics" btnTitle="Button" link="/blog" />
          </div>
          <div className="d-flex justify-content-between align-items-center blogDetailCards">
            <Slider {...settings} className="container" style={{padding: '0'}}>
              <BlogCard
                blogCardImg={BlogCardImg7}
                blogCardTag="Tag"
                blogCardTitle="Space for your heding is here, write what you need"
                blogCardAuth="Author"
                blogCardDate="15. 6. 2020"
              />
    
              <BlogCard
                blogCardImg={BlogDetailCardImg1}
                blogCardTag="Tag"
                blogCardTitle="Space for your heding is here, write what you need"
                blogCardAuth="Author"
                blogCardDate="15. 6. 2020"
              />
    
              <BlogCard
                blogCardImg={BlogDetailCardImg2}
                blogCardTag="Tag"
                blogCardTitle="Space for your heding is here, write what you need"
                blogCardAuth="Author"
                blogCardDate="15. 6. 2020"
              />
    
              <BlogCard
                blogCardImg={BlogCardImg6}
                blogCardTag="Tag"
                blogCardTitle="Space for your heding is here, write what you need"
                blogCardAuth="Author"
                blogCardDate="15. 6. 2020"
              />
            </Slider>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default BlogDetail;
