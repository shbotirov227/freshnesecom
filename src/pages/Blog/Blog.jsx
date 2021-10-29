import { NavLink } from 'react-router-dom';
import { Breadcrumbs, Link, Typography } from "@material-ui/core";

import Header from "../../containers/Header";
import Footer from "../../containers/Footer";
import Links from "../../components/Links";
import ImgLeft from "../../components/ImgLeft/ImgLeft";
import BlogCard from "../../components/BlogCard/BlogCard";

import BlogCardImg1 from '../../assets/images/blogCardImg1.png';
import BlogCardImg2 from '../../assets/images/blogCardImg2.png';
import BlogCardImg3 from '../../assets/images/blogCardImg3.png';
import BlogCardImg4 from '../../assets/images/blogCardImg4.png';
import BlogCardImg5 from '../../assets/images/blogCardImg5.png';
import BlogCardImg6 from '../../assets/images/blogCardImg6.png';
import BlogCardImg7 from '../../assets/images/blogCardImg7.png';
import { ArrowBtn, GridIcon, ListIcon } from "../../assets/icons/icons";

import "./Blog.scss";

const Blog = () => {
  return (
    <div className="Blog">
      <Header />
        <div className="Blog-main container">
            <Breadcrumbs aria-label="breadcrumb" className="breadcrumbItems mt-4">
                <Link color="inherit" href="/" className="text-decoration-none breadcrumb">Homepage</Link>
                <Link color="inherit" href="/category" className="text-decoration-none breadcrumb">Fruit and vegetables</Link>
                <Typography color="textPrimary" className="breadcrumb">Product title</Typography>
            </Breadcrumbs>

            <div className="d-flex align-center justify-content-between top-titles">
                <h3 className="blog-title">Fruit and vegetables</h3>

                {/* <div className="d-flex align-items-center items">
                    <button className="blogTopBtn"><GridIcon /> Grid view</button>
                    <button className="blogTopBtn"><span className="hoverSty"><ListIcon /></span>List view</button>
                    <button className="blogTopBtn"><span className="blogTopBtn-icon">117</span> Products</button>
                </div> */}
            </div>

            <div className="width100">
                <div className="topImages">
                    <div className="width50 blogBackground1">
                        <ImgLeft
                            className="blogBackground1"
                            imgLeftText="This is a space for your blog headline, it can be long don’t worry about that"
                            imgLeftAuth="Author"
                            imgLeftDate="17. 6. 2020"
                            imgLeftRateTitle="Tag"
                        />
                    </div>
                    <div className="width50 blogBackground2">
                        <ImgLeft
                            className="blogBackground2"
                            imgLeftText="This is a space for your blog headline, it can be long don’t worry about that"
                            imgLeftAuth="Author"
                            imgLeftDate="17. 6. 2020"
                            imgLeftRateTitle="Tag"
                        />
                    </div>
                </div>

                <div className="blogSmImg d-flex justify-content-between">
                    <div className="blogSmImg-left">
                        <Links
                            linksTitle="Archives"
                            link={[
                                "March 2020",
                                "February 2020",
                                "January 2020",
                                "November 2019",
                                "December 2019",
                            ]}
                        />

                        <div className="">
                            <Links
                                styleContent="color: '#A9A9A9'"
                                linksTitle="Category"
                                link={[
                                    "Food",
                                    "Chefs specialities",
                                    "Vegetable",
                                    "Meat",
                                    "Recommendations",
                                ]}
                            />
                        </div>

                        <div className="emailSection">
                            <h5 className="emailSection-title">Join our list</h5>
                            <p className="emailSection-text">
                                Signup to be the first to hear about exclusive deals, special
                                offers, recepies from our masters and others.
                            </p>
                            <div className="emailSection-email">
                                <input type="text" placeholder="Your email address" />
                                <button className="emailSection-btn">Subscribe</button>
                            </div>
                        </div>

                    </div>

                    <div className="blogSmImg-right d-flex align-items-center justify-content-between flex-wrap">
                        <BlogCard 
                            blogCardImg={BlogCardImg1}
                            blogCardTag="Tag"
                            blogCardTitle="Space for your heding is here, write what you need"
                            blogCardAuth="Author"
                            blogCardDate="15. 6. 2020"
                        />
                        <BlogCard 
                            blogCardImg={BlogCardImg2}
                            blogCardTag="Tag"
                            blogCardTitle="Space for your heding is here, write what you need"
                            blogCardAuth="Author"
                            blogCardDate="15. 6. 2020"
                        />
                        <BlogCard
                            blogCardImg={BlogCardImg3}
                            blogCardTag="Tag"
                            blogCardTitle="Space for your heding is here, write what you need"
                            blogCardAuth="Author"
                            blogCardDate="15. 6. 2020"
                        />
                        <BlogCard 
                            blogCardImg={BlogCardImg4}
                            blogCardTag="Tag"
                            blogCardTitle="Space for your heding is here, write what you need"
                            blogCardAuth="Author"
                            blogCardDate="15. 6. 2020"
                        />
                        <BlogCard 
                            blogCardImg={BlogCardImg5}
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
                        <BlogCard 
                            blogCardImg={BlogCardImg7}
                            blogCardTag="Tag"
                            blogCardTitle="Space for your heding is here, write what you need"
                            blogCardAuth="Author"
                            blogCardDate="15. 6. 2020"
                        />
                    </div>
                </div>

                <div className="pagesSection">
                    <div className="d-block mt-5">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <span className="BlogFooter-products">Page:</span>
                                <span className="BlogFooter-pageNum">1</span>
                                <span className="BlogFooter-pageNum">2</span>
                                <span className="BlogFooter-pageNum">3</span>
                                <span className="BlogFooter-pageNum">4</span>
                            </div>
                            <NavLink to="/blog-detail" className={`BlogFooter-btn`}>
                                Next page
                                <span className="ms-3">
                                    <ArrowBtn />
                                </span>
                            </NavLink>
                            <div className="d-flex align-items-center">
                                <span className="BlogFooter-backgroundBtn">198</span>
                                <span className="BlogFooter-products">articles</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <Footer />
    </div>
  );
};

export default Blog;
