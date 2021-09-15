import FooterBottom from '../../components/FooterBottom';
import FooterTop from '../../components/FooterTop';
import './Footer.module.scss';

const Footer = () => {
    return (
        <div className="Footer container">
            <FooterTop />
            <FooterBottom />
        </div>
    )
}

export default Footer;