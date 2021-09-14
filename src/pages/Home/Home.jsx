import CardBlock from '../../containers/CardBlock';
import Carousel from '../../containers/Carousel';
import Header from '../../containers/Header'
import HomeCards from '../../containers/HomeCards';

import './Home.scss';

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <HomeCards />
            <Carousel />
            <CardBlock />
        </div>
    )
}

export default Home;