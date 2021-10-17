
import ButtonDefault from '../../components/ButtonDefault';
import SmallBtn from '../../components/SmallBtn/SmallBtn';
import ImgLeft from '../../components/ImgLeft/ImgLeft';
import ImgRight from '../../components/ImgRight/ImgRight';
import Image2 from '../../assets/images/Image2.png';
import Img1 from '../../assets/images/img1.png';
import Img2 from '../../assets/images/img2.png';
import Img3 from '../../assets/images/img3.png';

import './ImgSection.scss';
import { Link } from 'react-router-dom';

const ImgSection = () => {
  return (
    <div className="ImgSection container">
      <div className="top">
        <Link to="/blog">
          <ButtonDefault text="Read our Blog posts" btnTitle="Go to Blog" link="/blog"/>
        </Link>
      </div>

      <div className="dispFlex">
        <div className="imgLeftImage">
          <ImgLeft imgLeftText="Our chef tips for a great and tasty dinner ready in 20 minutes" imgLeftAuth="Author" imgLeftDate="17. 6. 2020" imgLeftRateTitle="Dinner tips" />
        </div>

        <div className="right">

          <div className="left">
            <img className="img" src={Image2} alt="" />
              <SmallBtn title="Vegetable"/>
              <h3 className="text">Which vegetable your family will love and want’s eat each day</h3>
              <div>
                <span className="author">Author</span>
                <span className="author">15. 6. 2020</span>
              </div>
          </div>

          <div className="rightSection">
            <ImgRight 
              title="Salat is kinda good start to your morning routines"
              auth="Author"
              date="14.1.2020"
              img={Img1}
            />

            <ImgRight 
              title="Our chef tips for a great and healthy breakfast"
              auth="Author"
              date="14.1.2020"
              img={Img2}
            />

            <ImgRight 
              title="Prepare a simple and delicious breads"
              auth="Author"
              date="14.1.2020"
              img={Img3}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImgSection;