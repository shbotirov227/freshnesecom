import HeaderBottom from '../../components/HeaderBottom/HeaderBottom';
import HeaderTop from '../../components/HeaderTop';
import './Header.scss';

const Header = () => {
    return (
        <div className="Header">
            <HeaderTop />
            <h1>Header</h1>
            <HeaderBottom/>
        </div>
    )
}

export default Header;