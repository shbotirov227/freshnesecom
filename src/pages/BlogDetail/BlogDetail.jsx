import { Breadcrumbs, Link, Typography } from "@material-ui/core";

import Header from '../../containers/Header';
import Footer from '../../containers/Footer';
import ButtonDefault from '../../components/ButtonDefault';
import BlogCard from '../../components/BlogCard';

import BlogCardImg6 from '../../assets/images/blogCardImg6.png';
import BlogCardImg7 from '../../assets/images/blogCardImg7.png';
import BlogDetailCardImg1 from '../../assets/images/BlogDetailCardImg1.png';
import BlogDetailCardImg2 from '../../assets/images/BlogDetailCardImg2.png';

import './BlogDetail.scss';
import { NavLink } from "react-router-dom";

const BlogDetail = () => {
    return (
        <div className="BlogDetail">
            <Header />
            <div className="container">
                <Breadcrumbs aria-label="breadcrumb" className="breadcrumbItems mt-4">
                    <Link color="inherit" href="/" className="text-decoration-none">Homepage</Link>
                    <Link color="inherit" href="/category" className="text-decoration-none">Fruit and vegetables</Link>
                    <Typography color="textPrimary">Product title</Typography>
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
                        <h2 className="blogDetailTopTitle">Space for your heading, can be larger so don’t worry - large heading looks better</h2>
                    </div>
                </div>

                <div className="BlogDetail-middle">
                    <div className="left">
                        <h4 className="left-title">Tags</h4>
                        <span>Food</span>
                        <span>Recepies</span>
                        <span>Fresh</span>
                        <span>Vegetable</span>

                        <div className="backToBlog">
                            <NavLink to="/blog">Back to Blog</NavLink>
                        </div>
                    </div>

                    <div className="right"></div>
                </div>

                <div className="blogDetailButtons"><ButtonDefault text="Related topics" btnTitle="Button" link="/blog"/></div>
                <div className="d-flex justify-content-between align-items-center blogDetailCards">
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
                </div>
            </div>
                <Footer />
        </div>
    )
}

export default BlogDetail;