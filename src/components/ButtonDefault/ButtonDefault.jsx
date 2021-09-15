import { ArrowRight } from "../../assets/icons/icons";
import "./ButtonDefault.scss";

const ButtonDefault = ({ text, btnTitle }) => {
  return (
    <div className="default">
      <h4 className="title">{text}</h4>
      <button className="btn">
        {btnTitle}
        <span className="arrow">
          <ArrowRight />
        </span>
      </button>
    </div>
  );
};

export default ButtonDefault;
