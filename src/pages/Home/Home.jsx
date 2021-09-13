import Header from '../../containers/Header'
import HomeCards from '../../containers/HomeCards';

import './Home.scss';

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <HomeCards />
        </div>
    )
}

export default Home;