
import { Link } from 'react-router-dom';
import './BlogCard.scss';

const BlogCard = ({ blogCardImg, blogCardTag, blogCardTitle, blogCardAuth, blogCardDate }) => {
    return (
        <div className="BlogCard">
            <Link to="/blog-detail">
                <img src={blogCardImg} alt="" className="blogCardImg" />
                <span className="blogCardTag d-block">{blogCardTag}</span>
                <h5 className="blogCardTitle mt-2">{blogCardTitle}</h5>

                <div className="d-flex auth">
                    <span className="blogCardAuth me-3">{blogCardAuth}</span>
                    <span className="blogCardAuth">{blogCardDate}</span>
                </div>
            </Link>
        </div>
    )
}

export default BlogCard;