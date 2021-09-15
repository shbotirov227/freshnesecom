
import Icon from '../../assets/images/ImgSectionIcon.png';
import SmallBtn from '../SmallBtn/SmallBtn';

import "./ImgLeft.module.scss";

const ImgLeft = () => {
  return (
    <div className="ImgLeft">
      <SmallBtn title="Dinner tips"/>
      <h3 className="img-text">Our chef tips for a great and tasty dinner ready in 20 minutes</h3>

      <div className="bottom">
        <img className="img-image" src={Icon} alt="" />
        <span className="img-auth">Author</span>
        <span className="img-auth date">17. 6. 2020</span>
      </div>
    </div>
  );
};

export default ImgLeft;
