import CardBlock from '../../containers/CardBlock';
import Carousel from '../../containers/Carousel';
import Footer from '../../containers/Footer';
import Header from '../../containers/Header'
import HomeCards from '../../containers/HomeCards';
import ImgSection from '../../containers/ImgSection/ImgSection';

import './Home.module.scss';

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <HomeCards />
            <Carousel />
            <CardBlock />
            <ImgSection />
            <Footer />
        </div>
    )
}

export default Home;