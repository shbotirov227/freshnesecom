
import Icon from '../../assets/images/ImgSectionIcon.png';
import SmallBtn from '../SmallBtn/SmallBtn';

import "./ImgLeft.scss";

const ImgLeft = ({ imgLeftText, imgLeftAuth, imgLeftDate, imgLeftRateTitle }) => {
  return (
    <div className="ImgLeft">
      <SmallBtn title={imgLeftRateTitle}/>
      <h3 className="img-text">{imgLeftText}</h3>
      
      <div className="bottom">
        <img className="img-image" src={Icon} alt="" />
        <span className="img-auth">{imgLeftAuth}</span>
        <span className="img-auth date">{imgLeftDate}</span>
      </div>
    </div>
  );
};

export default ImgLeft;
