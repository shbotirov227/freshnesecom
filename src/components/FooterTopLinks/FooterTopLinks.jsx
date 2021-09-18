
import { Link } from 'react-router-dom';

import './FooterTopLinks.scss';

const FooterTopLiks = ({ title, link }) => {
    return (
        <div className="FooterTopLinks">
            <h4 className="footerTopLink-title">{title}</h4>
            
            {
                link.map(item => {
                    return <Link to="#" className="footerTopLink-link">{item}</Link>
                })
            }
        </div>
    )
}

export default FooterTopLiks;