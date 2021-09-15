import { Link } from 'react-router-dom';

import { ArrowRight } from '../../assets/icons/icons';

import './Links.scss';

const Links = ({ linksTitle, link, btnTitle }) => {
    return (
        <div className="Links">
            <h2 className="links-title">{linksTitle}</h2>

            <div className="links-category">
                {
                    link.map((item) => {
                        return <Link to="#" className="link">{item}</Link>
                    })
                }
            </div>

            <button className="links-btn">
                {btnTitle}
                <span className="arrow-right"><ArrowRight /></span>
            </button>

        </div>
    )
}

export default Links;