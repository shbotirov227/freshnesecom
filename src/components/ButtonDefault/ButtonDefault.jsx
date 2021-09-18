import { Link } from "react-router-dom";
import { ArrowRight } from "../../assets/icons/icons";
import "./ButtonDefault.scss";

const ButtonDefault = ({ text, btnTitle, link }) => {
  return (
    <div className="default">
      <h4 className="title">{text}</h4>
      <Link to={link} className="btn">
        {btnTitle}
        <span className="arrow">
          <ArrowRight />
        </span>
      </Link>
    </div>
  );
};

export default ButtonDefault;
