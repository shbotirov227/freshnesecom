
import './SmallBtn.scss';

const SmallBtn = ({ title }) => {
  return (
    <div className="SmallBtn">
      <button className="smBtn">{title}</button>
    </div>
  )
}

export default SmallBtn;