
import Card from '../../components/Card'
import Links from '../../components/Links/Links';
import TopCard from '../../components/TopCard/TopCard';
import './HomeCards.scss';

const HomeCards = () => {
    return (
        <div className="HomeCards container">
            <Links />
            <TopCard />

            {/* <Card />
            <Card />
            <Card /> */}
        </div>
    )
}

export default HomeCards;