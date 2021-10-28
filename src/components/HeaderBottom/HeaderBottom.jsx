import HeaderBottomSelect from "../HeaderBottomSelect/HeaderBottomSelect";
import "./HeaderBottom.scss";

const HeaderBottom = () => {
	return (
		<div className="HeaderBottom">
			<div className="HeaderBottom-inner container">
				<HeaderBottomSelect
					title={[
						"Bakery",
						"Fruit and vegetables",
						"Meat and fish",
						"Drinks",
						"Kitchen",
						"Special nutrition",
						"Baby",
						"Pharmacy",
					]}
					value={[
						"bakery",
						"fruit",
						"meat",
						"drinks",
						"kitchen",
						"nutrition",
						"baby",
						"pharmacy",
					]}
				/>
			</div>
		</div>
	);
};

export default HeaderBottom;
