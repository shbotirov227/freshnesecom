
import { ArrowRight } from '../../assets/icons/icons';

import './TopCard.scss';

const TopCard = () => {
    return (
        <div className="TopCard">
            <div className="topcard-bg">
                <span className="topcard-title">Banner subfocus</span>
                <h4 className="topcard-name">Space for heading</h4>
                <button className="topcard-btn">
                    Read recepies
                    <span className="topcard-arrow"><ArrowRight /></span>
                </button>
            </div>

            <div className="topcard-bg">
                <span className="topcard-title">Banner subfocus</span>
                <h4 className="topcard-name">Space for heading</h4>
                <button className="topcard-btn">
                    Read recepies
                    <span className="topcard-arrow"><ArrowRight /></span>
                </button>
            </div>
        </div>
    )
}

export default TopCard;