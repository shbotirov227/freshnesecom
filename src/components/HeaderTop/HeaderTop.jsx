import { useMediaQuery } from 'react-responsive';

import { Link, NavLink } from 'react-router-dom';
import {
Logo,
User,
Basket,
Search
} from '../../assets/icons/icons';

import './HeaderTop.scss';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

const HeaderTop = () => {
return (
<div className="container">
    <Desktop>
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
                <Link to="/checkout"><span className="user-icon"><User /></span></Link>
                <Link to="/checkout"><Basket /></Link>
            </div>
        </div>
    </Desktop>

    <Tablet>
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
            <Link to="/" className="HeadLogo" ><Logo /></Link>

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
                <Link to="/checkout"><span className="user-icon"><User /></span></Link>
                <Link to="/checkout"><span className="basket-icon"><Basket /></span></Link>
            </div>
        </div>
    </Tablet>

    <Mobile>
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
                <Link to="/checkout"><span className="user-icon"><User /></span></Link>
                <Link to="/checkout"><Basket /></Link>
            </div>
        </div>
    </Mobile>
</div>
)
}

export default HeaderTop;