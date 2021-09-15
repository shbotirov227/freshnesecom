
import FooterTopLinks from '../FooterTopLinks';

import './FooterTop.module.scss';

const FooterTop = () => {
    return (
        <div className="FooterTop">
            <FooterTopLinks
                title="Get in touch"
                link1="About Us"
                link2="Careers"
                link3="About Us "
                link4="Press Releases"
                link5="Blog"
            />

            <FooterTopLinks
                title="Connections"
                link1="Facebook"
                link2="Twitter"
                link3="Instagram "
                link4="Youtube"
                link5="LinkedIn"
            />

            <FooterTopLinks
                title="Earnings"
                link1="Become an Affiliate"
                link2="Advertise your product"
                link3="Sell on Market"
            />

            <FooterTopLinks
                title="Account"
                link1="Your account"
                link2="Returns Centre"
                link3="100 % purchase protection"
                link4="Chat with us"
                link5="Help"
            />
        </div>
    )
}

export default FooterTop;