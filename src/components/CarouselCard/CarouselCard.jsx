
import './CarouselCard.module.scss';

const CarouselCard = ({ carouselCardText, carouselCardAuthor, CarouselCardImg }) => {
    return (
        <div className="CarouselCard">
            <h4 className="carouselCard-text">{carouselCardText}</h4>
            <span className="carouselCard-author">{carouselCardAuthor}</span>
            <img src={CarouselCardImg} alt="" className="carouselCard-img" />
        </div>
    )
}

export default CarouselCard;