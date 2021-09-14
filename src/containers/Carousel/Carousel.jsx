
import { ArrowRight } from '../../assets/icons/icons';
import './Carousel.scss';

const Carousel = () => {
    return (
        <div className="Carousel">

            <div className="carousel-inner container">
                <h3>Our customers says</h3>
                <button className="carousel-btn">
                    Button
                    <ArrowRight />
                </button>
            </div>


        </div>
    )
}

export default Carousel;