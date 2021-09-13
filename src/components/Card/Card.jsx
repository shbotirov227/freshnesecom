
import Img from '../../assets/images/Rectangle.png';
import './Card.scss';

const Card = () => {
    return (
        <div className="Card">

            <img src={Img} alt="" />
            <h5 className="card-title">Product Title</h5>
            <span className="card-text">Space for a small product description </span>

            <div className="card-prices">
                <h4 className="card-price">1.48 USD</h4>
                <button className="card-btn">Buy now</button>
            </div>

        </div>
    )
}

export default Card;