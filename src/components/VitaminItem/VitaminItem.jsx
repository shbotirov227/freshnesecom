import "./VitaminItem.scss";

const VitaminItem = ({ item1, item2, item3 }) => {
  return (
    <div className="VitaminItem">

      <div className="d-flex align-items-center vitaminItem">
        <h4 className="vitamin-item middle">{item1}</h4>
        <h4 className="vitamin-item middle">{item2}</h4>
        <h4 className="vitamin-item middle">{item3}</h4>
      </div>

    </div>
  );
};

export default VitaminItem;
