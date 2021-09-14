// import { Slide } from '@material-ui/core';

import { ArrowRight } from '../../assets/icons/icons';
import CarouselCard from '../../components/CarouselCard';
import Auth1 from '../../assets/images/Auth1.png';
import Auth2 from '../../assets/images/Auth2.png';
import Auth3 from '../../assets/images/Auth3.png';
import Auth4 from '../../assets/images/Auth4.png';
import './Carousel.scss';

const Carousel = () => {
    return (
        <div className="Carousel">

            <div className="carousel-inner container">
                <h3>Our customers says</h3>
                <button className="carousel-btn">
                    Button
                    <span className="carousel-arrow">
                        <ArrowRight />
                    </span>
                </button>
            </div>

            <div className="carousel-cards">
                <CarouselCard 
                    carouselCardText="
                    “ This is an super space
                    for your customers qoute.
                    Don’t worry it works smooth as pie.
                    You will get all what you need by writiing
                    a text here “"
                    carouselCardAuthor="Name and Surname"
                    CarouselCardImg={Auth1}
                />

                <CarouselCard 
                    carouselCardText="
                    “ This is an super space
                    for your customers qoute.
                    Don’t worry it works smooth as pie.
                    You will get all what you need by writiing
                    a text here “"
                    carouselCardAuthor="Name and Surname"
                    CarouselCardImg={Auth2}
                />

                <CarouselCard 
                    carouselCardText="
                    “ This is an super space
                    for your customers qoute.
                    Don’t worry it works smooth as pie.
                    You will get all what you need by writiing
                    a text here “"
                    carouselCardAuthor="Name and Surname"
                    CarouselCardImg={Auth3}
                />

                <CarouselCard 
                    carouselCardText="
                    “ This is an super space
                    for your customers qoute.
                    Don’t worry it works smooth as pie.
                    You will get all what you need by writiing
                    a text here “"
                    carouselCardAuthor="Name and Surname"
                    CarouselCardImg={Auth4}
                />

                <CarouselCard 
                    carouselCardText="
                    “ This is an super space
                    for your customers qoute.
                    Don’t worry it works smooth as pie.
                    You will get all what you need by writiing
                    a text here “"
                    carouselCardAuthor="Name and Surname"
                    CarouselCardImg={Auth2}
                />

                <CarouselCard 
                    carouselCardText="
                    “ This is an super space
                    for your customers qoute.
                    Don’t worry it works smooth as pie.
                    You will get all what you need by writiing
                    a text here “"
                    carouselCardAuthor="Name and Surname"
                    CarouselCardImg={Auth3}
                />

            </div>
        </div>
    )
}

export default Carousel;