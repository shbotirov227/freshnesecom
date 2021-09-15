import CarouselCard from '../../components/CarouselCard';
import ButtonDefault from '../../components/ButtonDefault';

import Auth1 from '../../assets/images/Auth1.png';
import Auth2 from '../../assets/images/Auth2.png';
import Auth3 from '../../assets/images/Auth3.png';
import Auth4 from '../../assets/images/Auth4.png';

import './Carousel.module.scss';

const Carousel = () => {
        return (
            <div className="Carousel">
    
                <div className="carousel-inner container">
                    <ButtonDefault btnTitle="Button" text="Our customers says"/>
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