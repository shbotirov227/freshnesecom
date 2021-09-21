import OrderCard from "../../components/OrderCard";

import './CheckoutRight.scss';

const CheckoutRight = () => {

    return (
        <div className="Order">
            <h3 className="Order-title">Order Summary</h3>
            <span className="Order-span">Price can change depending on shipping method and taxes of your state.</span>

            <OrderCard />
            <OrderCard />

            <div className="d-flex justify-content-between align-items-center mt-5 mb-5">
                <div>
                    <span className="d-block subtotal mb-2">Subtotal</span>
                    <span className="d-block subtotal mb-2">Tax</span>
                    <span className="d-block subtotal">Shipping</span>
                </div>

                <div>
                    <span className="subtotalPrice d-block mb-2">73.98 USD</span>
                    <span className="subtotalPrice d-block mb-2">17% 16.53 USD</span>
                    <span className="subtotalPrice d-block">0 USD</span>
                </div>
            </div>

            <div className="orderInputSection">
                <input type="text" placeholder="Apply promo code" className="orderRightInput" />
                <button className="orderRightBtn">Apply now</button>
            </div>

            <div className="d-flex justify-content-between">
                <div>
                    <span className="subtotal d-block">Total Order</span>
                    <span className="deleveryTitle">Guaranteed delivery day:  June 12, 2020</span>
                </div>

                <h4 className="orderPrice">89.84 USD</h4>
            </div>
        </div>
    )
}

export default CheckoutRight;