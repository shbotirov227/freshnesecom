import { Link } from 'react-router-dom';

import { ArrowRight } from '../../assets/icons/icons';

import './Links.module.scss';

const Links = ({ linksTitle, link1, link2, link3, link4, link5, btnTitle }) => {
    return (
        <div className="Links">
            <h2 className="links-title">{linksTitle}</h2>

            <div className="links-category">
                <Link to="#" className="link">{link1}</Link>
                <Link to="#" className="link">{link2}</Link>
                <Link to="#" className="link">{link3}</Link>
                <Link to="#" className="link">{link4}</Link>
                <Link to="#" className="link">{link5}</Link>
            </div>

            <button className="links-btn">
                {btnTitle}
            <span className="arrow-right"><ArrowRight /></span>
            </button>

        </div>
    )
}

export default Links;