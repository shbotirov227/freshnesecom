import "./CategoryLink.scss";

const CategoryLink = ({ title, name, num1, num2, num3, num4 }) => {
  return (
    <div className="CategoryLink">
      <h4 className="categoryLink-title">{title}</h4>

      <div className="d-flex mt-4 justify-content-between">
        <div className="mb-3">
            {name.map((item) => (
            <span className="categoryLink-name">{item}</span>
            ))}
        </div>
        <div className="d-flex flex-column">
            <span className="num">{num1}</span>
            <span className="num">{num2}</span>
            <span className="num">{num3}</span>
            <span className="num">{num4}</span>
        </div>
      </div>

    </div>
  );
};

export default CategoryLink;