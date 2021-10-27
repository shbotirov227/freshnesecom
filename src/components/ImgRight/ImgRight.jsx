
import "./ImgRight.scss";

const ImgRight = ({ title, auth, date, img }) => {
  return (
    <div className="ImgRight">

      <div className="nmadir">
        <h4 className="imgRight-title">{title}</h4>
        <span className="imgRight-auth">{auth}</span>
        <span className="imgRight-auth">{date}</span>
      </div>
      
      <img src={img} alt="" width="95" height="95" />
      
    </div>
  );
};

export default ImgRight;