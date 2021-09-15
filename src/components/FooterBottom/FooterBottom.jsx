
import FooterBtn from '../FooterBtn';

import './FooterBottom.scss';

const FooterBottom = () => {
    return (
        <div className="FooterBottom">
            <h4 className="footerBottom-title">Product tags</h4>
            <FooterBtn title={[
                "Beans",
                "Carrots",
                "Apples",
                "Garlic",
                "Mushrooms",
                "Tomatoes",
                "Chilli peppers",
                "Broccoli",
                "Watermelons",
                "Oranges",
                "Bananas",
                "Grapes",
                "Cherries",
                "Meat",
                "Seo tag",
                "Fish",
                "Seo tag",
                "Fresh food",
                "Lemons"
            ]} />
            
            <h4 className="footerCopyright">Copyright © 2020 petrbilek.com</h4>
        </div>
    )
}

export default FooterBottom;