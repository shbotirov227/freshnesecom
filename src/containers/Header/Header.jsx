import HeaderBottom from '../../components/HeaderBottom/HeaderBottom';
import HeaderTop from '../../components/HeaderTop';

import './Header.scss';

const Header = () => {
    return (
        <div className="Header">
            <HeaderTop />
            <HeaderBottom/>
        </div>
    )
}

export default Header;