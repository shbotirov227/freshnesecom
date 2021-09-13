import { Link } from 'react-router-dom';

import { ArrowRight } from '../../assets/icons/icons';

import './Links.scss';

const Links = () => {
    return (
        <div className="Links">
            <h3>Category menu</h3>

            <div className="links-category">
                <Link to="#" className="link">Bakery</Link>
                <Link to="#" className="link">Fruit and vegetables</Link>
                <Link to="#" className="link">Meat and fish</Link>
                <Link to="#" className="link">Drinks</Link>
                <Link to="#" className="link">Kitchen</Link>
            </div>

            <button className="links-btn">
                More categories
            </button>

            <span className="arrow-right"><ArrowRight /></span>
        </div>
    )
}

export default Links;