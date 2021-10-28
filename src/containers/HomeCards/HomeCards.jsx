
import Card from '../../components/Card'
import Links from '../../components/Links/Links';
import TopCard from '../../components/TopCard/TopCard';
import './HomeCards.scss';

const HomeCards = () => {
    return (
        <div className="HomeCards container">
            <div className="res">
                <Links 
                    linksTitle="Category menu"
                    link={[
                        "Bakery",
                        "Fruit and vegetables",
                        "Meat and fish",
                        "Drinks",
                        "Kitchen"
                    ]}
                    btnTitle="More categories"
                />
                <TopCard />
            </div>

            <div className="bottom">
                <Links
                    linksTitle="Best selling products"
                    link={[
                        "Kitchen",
                        "Meat and fish",
                        "Special nutrition",
                        "Pharmacy",
                        "Baby"
                    ]}
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
                    link={[
                        "Carrots",
                        "Tomatoes",
                        "Potatoes",
                        "Chicken",
                        "Pork"
                    ]}
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