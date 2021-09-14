
import ButtonDefault from '../../components/ButtonDefault';
import SmallBtn from '../../components/SmallBtn/SmallBtn';
import ImgLeft from '../../components/ImgLeft/ImgLeft';
import ImgRight from '../../components/ImgRight/ImgRight';
import Image2 from '../../assets/images/Image2.png';
import Img1 from '../../assets/images/img1.png';
import Img2 from '../../assets/images/img2.png';
import Img3 from '../../assets/images/img3.png';

import './ImgSection.scss';

const ImgSection = () => {
  return (
    <div className="ImgSection container">
      <div className="top">
        <ButtonDefault text="Read our Blog posts" btnTitle="Go to Blog"/>
      </div>

      <div className="dispFlex">
        <ImgLeft />

        <div className="ImgRight">
          <div className="left">
            <img className="img" src={Image2} alt="" />
              <SmallBtn title="Vegetable"/>
              <h3 className="text">Which vegetable your family will love and want’s eat each day</h3>
              <div>
                <span className="author">Author</span>
                <span className="author">15. 6. 2020</span>
              </div>
          </div>

          <ImgRight 
            title="Salat is kinda good start to your morning routines"
            auth="Author"
            date="14.1.2020"
            img={Img1}
          />
        </div>
      </div>
    </div>
  )
}

export default ImgSection;