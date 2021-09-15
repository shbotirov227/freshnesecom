
import FooterTopLiks from '../FooterTopLinks/FooterTopLiks';
import './FooterTop.scss';

const FooterTop = () => {
    return (
        <div className="FooterTop">
            <FooterTopLiks
                title="Get in touch"
                link1="About Us"
                link2="Careers"
                link3="About Us "
                link4="Press Releases"
                link5="Blog"
            />
        </div>
    )
}

export default FooterTop;