import * as React from "react";
import { Rating } from '@mui/material';
import OrderImg from '../../assets/images/OrderImg.png';
import { OrderLikeIcon, OrderCompireIcon, RemoveIcon } from '../../assets/icons/icons';

import './OrderCard.scss';

const OrderCard = ({ orderWidth }) => {
    return (
        <div className={`OrderCard ${orderWidth ? 'orderWidth': undefined}`}>
            
            <div className="d-flex mt-5">
                    <img src={OrderImg} alt="" width="100" height="70" className="me-3"/>

                <div className="">
                    <h5 className="titleOrder">Product title</h5>
                    <div>
                        <span className="iconTitle">Farm:</span>
                        <span className="farmValue ms-5">Tharamis Farm</span>
                    </div>
                    <div>
                        <span className="iconTitle">Freshness:</span>
                        <span className="farmValue ms-4">1 day old</span>
                    </div>
                    <Rating name="half-rating" defaultValue={4} precision={0.5} />
                </div>
            </div>

            <div className="d-flex">
                <div className="me-5">
                    <span className="d-block iconTitle mb-2" style={{cursor: 'pointer'}}>
                        <span className="me-2"><OrderLikeIcon /></span>
                        Wishlist
                    </span>

                    <span className="d-block iconTitle mb-2" style={{cursor: 'pointer'}}>
                        <span className="me-2"><OrderCompireIcon /></span>
                        Compare
                    </span>

                    <span className="d-block iconTitle mb-2" style={{cursor: 'pointer'}}>
                        <span className="me-2"><RemoveIcon /></span>
                        Remove
                    </span>
                </div>

                <div className="d-flex align-items-center justify-content-between ms-2">
                        <div className="addButtons addButtons-priceItems">
                            <h4 className="addButtons-price">36.23 USD</h4>
                            <span className="addButtons-smBtn">48.56 USD</span>
                        </div>

                        <div className="addButtons-select d-flex align-items-center justify-content-center ms-5">
                            <input type="text" placeholder="1pcs" />
                            <select name="" id="">
                                <option value="">Pcs</option>
                                <option value="">Kgs</option>
                                <option value="">Box</option>
                                <option value="">Pack</option>
                            </select>
                        </div>
                </div>
                
            </div>
        </div>
    )
}

export default OrderCard;