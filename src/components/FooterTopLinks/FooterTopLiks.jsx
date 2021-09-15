
import { Link } from 'react-router-dom';
import './FooterTopLiks.scss';

const FooterTopLiks = ({ title, link1, link2, link3, link4, link5, link6, link7 }) => {
    return (
        <div className="FooterTopLiks">
            <h4 className="footerTopLink-title">{title}</h4>
            <Link to="#" className="footerTopLink-link">{link1}</Link>
            <Link to="#" className="footerTopLink-link">{link2}</Link>
            <Link to="#" className="footerTopLink-link">{link3}</Link>
            <Link to="#" className="footerTopLink-link">{link4}</Link>
            <Link to="#" className="footerTopLink-link">{link5}</Link>
            <Link to="#" className="footerTopLink-link">{link6}</Link>
            <Link to="#" className="footerTopLink-link">{link7}</Link>
        </div>
    )
}

export default FooterTopLiks;