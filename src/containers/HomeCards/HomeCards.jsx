
import Card from '../../components/Card'
import Links from '../../components/Links/Links';
import TopCard from '../../components/TopCard/TopCard';
import './HomeCards.scss';

const HomeCards = () => {
    return (
        <div className="HomeCards container">
            <Links 
                linksTitle="Category menu"
                link1="Bakery"
                link2="Fruit and vegetables"
                link3="Meat and fish"
                link4="Drinks"
                link5="Kitchen"
                btnTitle="More categories"
            />
            <TopCard />

            <div className="bottom">
                <Links
                    linksTitle="Best selling products"
                    link1="Kitchen"
                    link2="Meat and fish"
                    link3="Special nutrition"
                    link4="Pharmacy"
                    link5="Baby"
                    btnTitle="More products"
                />

                <Card 
                    cardTitle="Product Title"
                    cardText="Space for a small product description"
                    cardPrice="1.48 USD"
                    cardBtn="Buy now"
                />

                <Card 
                    cardTitle="Product Title"
                    cardText="Space for a small product description"
                    cardPrice="0.28 USD"
                    cardBtn="Buy now"
                    cardRate="48.56"
                    iconRate="- 36 %"
                />

                <Card 
                    cardTitle="Product Title"
                    cardText="Space for a small product description"
                    cardPrice="1.12 USD"
                    cardBtn="Buy now"
                    cardRate="48.56"
                    iconRate="- 36 %"
                />
            </div>

            <div className="bottom">
                <Links
                    linksTitle="Best from Farmers"
                    link1="Carrots"
                    link2="Tomatoes"
                    link3="Potatoes"
                    link4="Chicken"
                    link5="Pork"
                    btnTitle="More products"
                />

                <Card 
                    cardTitle="Product Title"
                    cardText="Space for a small product description"
                    cardPrice="1.48 USD"
                    cardBtn="Buy now"
                />

                <Card 
                    cardTitle="Product Title"
                    cardText="Space for a small product description"
                    cardPrice="0.28 USD"
                    cardBtn="Buy now"
                    cardRate="48.56"
                    iconRate="- 36 %"
                />

                <Card 
                    cardTitle="Product Title"
                    cardText="Space for a small product description"
                    cardPrice="1.12 USD"
                    cardBtn="Buy now"
                    cardRate="48.56"
                    iconRate="- 36 %"
                />
            </div>
        </div>
    )
}

export default HomeCards;