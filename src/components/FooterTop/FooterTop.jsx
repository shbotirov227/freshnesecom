
import FooterTopLinks from '../FooterTopLinks';

import './FooterTop.scss';

const FooterTop = () => {
    return (
        <div className="FooterTop">
            <FooterTopLinks title="Get in touch" link={[ "About Us", "Careers", "Press Releases", "Blog" ]} />
            <FooterTopLinks title="Connections" link={[ "Facebook", "Twitter", "Instagram", "Youtube", "LinkedIn" ]} />
            <FooterTopLinks title="Earnings" link={[ "Become an Affiliate", "Advertise your product", "Sell on Market" ]} />
            <FooterTopLinks title="Account" link={[ "Your account", "Returns Centre", "100 % purchase protection", "Chat with us", "Help" ]} />
        </div>
    )
}

export default FooterTop;