import './ImgRight.scss';

const ImgRight = ({ title, auth, date, img }) => {
  return (
    <div className="ImgRight">
      <div>
        <h4 className="imgRight-title">{title}</h4>
        <span className="imgRight-auth">{auth}</span>
        <span className="imgRight-auth">{date}</span>
      </div>

      <img src={img} alt="" />
    </div>
  )
}

export default ImgRight;