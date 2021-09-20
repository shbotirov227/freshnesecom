
import { Link } from 'react-router-dom';
import Img from '../../assets/images/Rectangle.png';

import './Card.scss';

const Card = ({ cardTitle, cardText, cardPrice, cardBtn, cardRate, iconRate }) => {
    return (
        <div className="Card">
            <Link to="/category">
                {
                    iconRate ? <span className="iconRate">{iconRate}</span> : undefined
                }
                <img src={Img} alt="" />
                <h5 className="card-title">{cardTitle}</h5>
                <span className="card-text">{cardText}</span>

                <div className="card-prices">
                    <div>
                        <h4 className="card-price">{cardPrice}</h4>
                        
                        {
                            cardRate ? <span className="cardRate">{cardRate}</span> : undefined
                        }
                    </div>
                    <Link to="/detail" className="card-btn">{cardBtn}</Link>
                </div>
            </Link>
        </div>
    )
}

export default Card;