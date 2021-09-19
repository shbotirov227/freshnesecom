
import './BlogCard.scss';

const BlogCard = ({ blogCardImg, blogCardTag, blogCardTitle, blogCardAuth, blogCardDate }) => {
    return (
        <div className="BlogCard">
            <img src={blogCardImg} alt="" className="blogCardImg" />
            <span className="blogCardTag d-block">{blogCardTag}</span>
            <h5 className="blogCardTitle mt-2">{blogCardTitle}</h5>

            <div className="d-flex mt-4">
                <span className="blogCardAuth me-3">{blogCardAuth}</span>
                <span className="blogCardAuth">{blogCardDate}</span>
            </div>
        </div>
    )
}

export default BlogCard;