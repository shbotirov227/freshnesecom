import Footer from '../Footer';
import { ArrowDown } from '../../assets/icons/icons';
import './CategoryFooter.scss';

const CategoryFooter = () => {
    return (
        <div className="CategoryFooter">
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <span className="CategoryFooter-products">Page:</span>
                    <span className="CategoryFooter-pageNum">1</span>
                    <span className="CategoryFooter-pageNum">2</span>
                    <span className="CategoryFooter-pageNum">3</span>
                    <span className="CategoryFooter-pageNum">4</span>
                </div>
                
                <button className="CategoryFooter-btn">
                    Show more products
                    <span className="ms-3"><ArrowDown /></span>
                </button>
                
                <div className="d-flex align-items-center">
                    <span className="CategoryFooter-backgroundBtn">336</span>
                    <span className="CategoryFooter-products">Products</span>
                </div>
            </div>

            <div className="CategoryFooter-footer">
                <Footer />
            </div>
        </div>
    )
}

export default CategoryFooter;