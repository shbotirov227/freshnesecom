
import { Link, NavLink } from 'react-router-dom';
import {
Logo,
User,
Basket,
Search
} from '../../assets/icons/icons';

import './HeaderTop.scss';

const HeaderTop = () => {
return (
<div className="container">
    <div className="HeaderTop">
        <div className="top">
            <span className="chat-us">Chat with us</span>
            <a href="tel:+420 336 775 664" className="tel">+420 336 775 664</a>
            <a href="mailto:info@freshnesecom.com" className="email">info@freshnesecom.com</a>
        </div>
        <div className="links">
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/careers">Careers</NavLink>
        </div>
    </div>

    <div className="Bottom">
        <Link to="/"><Logo /></Link>

        <div className="select-option">
            <select name="" id="">
                <option value="">All categories</option>
                <option value="option1">Option1</option>
                <option value="option2">Option2</option>
                <option value="option3">Option3</option>
                <option value="option4">Option4</option>
            </select>
            <span className="line"></span>
            <input type="text" placeholder="Search Products, categories ..." />
            <Search />
        </div>

        <div className="icons">
            <span className="user-icon"><User /></span>
            <Basket />
        </div>
    </div>
</div>
)
}

export default HeaderTop;