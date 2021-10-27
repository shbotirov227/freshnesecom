import { useState } from 'react';

import HeaderBottom from '../../components/HeaderBottom/HeaderBottom';
import HeaderTop from '../../components/HeaderTop';

import {
    MobileMenuIcon,
    MobileCloseIcon
} from '../../assets/icons/icons';

import './Header.scss';

const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="Header">
            <HeaderTop />
            <HeaderBottom />
            
            {/* <button ><MobileMenuIcon /></button> */}
            
            <button className={`mobileMenuBtn ${open ? 'open' : 'hide'}`} ocClick={() => setOpen(!open)}>
            {
                open === false ? (
                        <MobileCloseIcon />
                        ) : <MobileMenuIcon />
                }
            </button>
                
                
            
        </div>
    )
}

export default Header;