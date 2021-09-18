import { Link } from 'react-router-dom';

import { ArrowRight } from '../../assets/icons/icons';

import './Links.scss';

const Links = ({ linksTitle, link, btnTitle }) => {
    return (
        <div className="Links">
            <h5 className="links-title">{linksTitle}</h5>

            <div className="links-category">
                {
                    link.map((item) => {
                        return <Link to="/category" className="link">{item}</Link>
                    })
                }
            </div>

            <div className="mt-5">
                <Link to="/category" className="links-btn">
                    {btnTitle}
                    <span className="arrow-right"><ArrowRight /></span>
                </Link>
            </div>

        </div>
    )
}

export default Links;