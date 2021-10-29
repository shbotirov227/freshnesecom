import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { Breadcrumbs, Typography, Link } from "@material-ui/core";
import { Rating } from "@mui/material";

import Header from "../../containers/Header";
import ButtonDefault from "../../components/ButtonDefault";
import Card from "../../components/Card";
import Footer from "../../containers/Footer";
import DetailImage from "../../components/DetailImg";
import VitaminItem from "../../components/VitaminItem";

import LeftIcon from "../../assets/images/icons/LeftArrow.svg";
import RightIcon from "../../assets/images/icons/RightArrow.svg";
import {
  CompareIcon,
  DetailLikeIcon,
  PlusIcon,
} from "../../assets/icons/icons";

import "./Detail.scss";


const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <span className="carouselIcon"><img src={LeftIcon} alt="nextArrow" {...props} /></span>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <span className="carouselIcon"><img src={RightIcon} alt="nextArrow" {...props} /></span>
);

class Detail extends Component {

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
      <div className="Detail">
        <Header />
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb" className="breadcrumbItems mt-4">
            <Link color="inherit" href="/" className="breadcrumb text-decoration-none" style={{color: '#A9A9A9'}}>
              Homepage
            </Link>
  
            <Link color="inherit" href="/category" className="breadcrumb text-decoration-none" style={{color: '#A9A9A9'}}>
              Fruit and vegetables
            </Link>
            <Typography color="textPrimary" className="breadcrumb">Carrots from Tomissy Farm</Typography>
          </Breadcrumbs>
  
          <div className="Detail-imgSection d-flex">
            <div className="Detail-imgSection-left">
              <DetailImage
                className="mb-5"
                rate="- 36 %"
                rateTitle="Free shipping"
              />
              <DetailImage className="mb-5" />
              <DetailImage className="mb-5" />
            </div>
  
            <div className="Detail-imgSection-right">
              <div className="right-top">
                <h3 className="rightGeneralTitle">Carrots from Tomissy Farm</h3>
  
                <div className="stars d-flex align-items-center justify-content-start">
                  <Rating className="stars" name="half-rating" defaultValue={5} precision={4.5} />
                  <span className="detailRatingTitle stars">(1 customer review)</span>
                </div>
  
                <p className="rightGeneralText">
                  Carrots from Tomissy Farm are one of the best on the market.
                  Tomisso and his family are giving a full love to his Bio
                  products. Tomisso’s carrots are growing on the fields naturally.
                </p>
  
                <div className="d-flex justify-content-between align-items-center maxWidth">
                  <div className="d-flex justify-content-between">
                    <div className="me-5">
                      <span className="rightGeneralItemsTitle d-block">SKU:</span>
                      <span className="rightGeneralItemsTitle d-block">Category:</span>
                      <span className="rightGeneralItemsTitle d-block">Stock:</span>
                      <span className="rightGeneralItemsTitle d-block">Farm</span>
                    </div>
  
                    <div className="">
                      <span className="rightGeneralItemsValue d-block">76645</span>
                      <span className="rightGeneralItemsValue d-block">Vegetables</span>
                      <span className="rightGeneralItemsValue d-block">In Stock</span>
                      <span className="rightGeneralItemsValue d-block">Grocery Tarm Fields</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="me-5">
                      <span className="rightGeneralItemsTitle d-block">Freshness:</span>
                      <span className="rightGeneralItemsTitle d-block">Buy by:</span>
                      <span className="rightGeneralItemsTitle d-block">Delivery:</span>
                      <span className="rightGeneralItemsTitle d-block">Delivery area</span>
                    </div>
  
                    <div>
                      <span className="rightGeneralItemsValue d-block">1 days old</span>
                      <span className="rightGeneralItemsValue d-block">pcs, kgs, box, pack</span>
                      <span className="rightGeneralItemsValue d-block">in 2 days</span>
                      <span className="rightGeneralItemsValue d-block">Czech republic</span>
                    </div>
                  </div>
                </div>
  
                <div className="addButtons d-flex">
                  <div className="addButtons-priceItems">
                    <span className="addButtons-price">36.23 USD</span>
                    <span className="addButtons-smBtn">48.56 USD</span>
                  </div>
  
                  <div className="addButtons-select d-flex align-items-center justify-content-center">
                    <input type="text" placeholder="1" />
                    <select name="" id="">
                        <option value="">Pcs</option>
                        <option value="">Kgs</option>
                        <option value="">Box</option>
                        <option value="">Pack</option>
                    </select>
                  </div>
  
                  <NavLink to="/checkout" className="addButtons-btn">
                    <span className="me-3">
                      <PlusIcon />
                    </span>
                    Add to cart
                  </NavLink>
                </div>
  
                <div className="d-flex">
                  <h5 className="detailCompare">
                    <span className="me-2">
                      <DetailLikeIcon />
                    </span>
                    Add to my wish list
                  </h5>
                  <h5 className="detailCompare">
                    <span className="me-2">
                      <CompareIcon />
                    </span>
                    Compare
                  </h5>
                </div>
  
                <div className="d-flex align-items-center descriptionMar">
                  <h4 className="description">Description</h4>
                  <h4 className="description">
                    Reviews<span className="description-num ms-2">18</span>
                  </h4>
                  <h4 className="description">
                    Questions<span className="description-num ms-2">4</span>
                  </h4>
                </div>
              </div>
  
              <div className="right-bottom">
                
                <div>
                  <span className="right-bottom-title">Origins</span>
                  <p className="right-bottom-text mb-5 mt-3">
                      We work hard to ensure that the fruit and vegetables we sell are
                      fresh and high in quality. If we don’t grow them ourselves, we
                      source them from carefully chosen suppliers, preferring to buy
                      locally whenever possible.
                  </p>
                  <span className="right-bottom-title">How to cook</span>
                  <p className="right-bottom-text mb-5 mt-3">
                      From roasts, salads and soups to casseroles and cakes, Carrots
                      will lend sweetness, texture and colour to an enormous number of
                      recipes.
                  </p>
                </div>
  
  
                <div className="vitamins">
                  <h5 className="right-bottom-title">Full of Vitamins!</h5>
                  <div className="borderBottom d-flex align-items-center">
                      <span className="vitamins-title">Vitamins</span>
                      <span className="vitamins-title">Quantity</span>
                      <span className="vitamins-title">% DV</span>
                  </div>
                  <div className="mt-3">
                      <VitaminItem item1="Vitamin A equiv." item2="735 μg" item3="104 %" />
                      <VitaminItem item1="Thiamine (B1)" item2="0.066 mg" item3="6 %" />
                      <VitaminItem item1="Niacin (B3)" item2="0.983 mg" item3="7 %" />
                      <VitaminItem item1="Folate (Bg)" item2="19 μg" item3="5 %" />
                      <VitaminItem item1="Vitamin C" item2="5.9 mg" item3="7 %" />
                      <VitaminItem item1="Vitamin E" item2="0.66 mg" item3="4 %" />
                      <VitaminItem item1="Vitamin K" item2="13.2" item3="13 %" />
                  </div>
                </div>
  
              </div>
            </div>
          </div>
  
          <ButtonDefault
            text="Related products"
            btnTitle="More products"
            link="/category"
          />
  
          <div className="d-flex align-items-center justify-content-between detailCard">
            {/* <Slider {...settings} className="container" style={{padding: '0'}}> */}
              <Card
                cardTitle="Product Title"
                cardText="Space for a small product description"
                cardPrice="3.26 USD"
                cardBtn="Buy now"
              />
    
              <Card
                cardTitle="Product Title"
                cardText="Space for a small product description "
                cardPrice="1.48 USD"
                cardBtn="Buy now"
              />
    
              <Card
                cardTitle="Product Title"
                cardText="Space for a small product description "
                cardPrice="0.28 USD"
                cardBtn="Buy now"
                cardRate="48.56"
                iconRate="- 36 %"
              />
    
              <Card
                cardTitle="Product Title"
                cardText="Space for a small product description "
                cardPrice="1.12 USD"
                cardBtn="Buy now"
              />
            {/* </Slider> */}
          </div>
  
          <Footer />
        </div>
      </div>
    );
  }
};

export default Detail;
