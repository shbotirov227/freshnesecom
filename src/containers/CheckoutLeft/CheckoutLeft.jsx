import React from 'react';
import OrderCard from '../../components/OrderCard';
import FedEx from '../../assets/images/icons/FedEx.svg';
import DHL from '../../assets/images/icons/DHL.svg';
import VisaCard from '../../assets/images/icons/VisaCard.svg';
import PayPal from '../../assets/images/icons/PayPal.svg';
import Bitcoin from '../../assets/images/icons/Bitcoin.svg';
import SafeIcon from '../../assets/images/icons/SafeIcon.svg';
import { ModalClose } from '../../assets/icons/icons';

import "./CheckoutLeft.scss";

const CheckoutLeft = () => {

  const [checked, setChecked] = React.useState(false);

  return (
    <div className="checkoutPage-left">
        <h3 className="checkoutTitle mb-1">Billing info</h3>

        <div className="d-flex align-items-center justify-content-between mb-5">
          <span className="checkoutSpan">Please enter your billing info</span>
          <span className="checkoutSpan">Step 1 of 5</span>
        </div>

        <div
          className="formInputs d-flex align-items-center justify-content-between"
          style={{ width: "100%" }}
        >
          <div>
            <label
              htmlFor="firstName"
              className="labelElement"
              style={{ display: "block" }}
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="inputElement"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="labelElement"
              style={{ display: "block" }}
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="inputElement"
            />
          </div>
        </div>

        <div
          className="formInputs d-flex align-items-center justify-content-between"
          style={{ width: "100%" }}
        >
          <div>
            <label
              htmlFor="email"
              className="labelElement"
              style={{ display: "block" }}
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              className="inputElement"
            />
          </div>

          <div>
            <label
              htmlFor="tel"
              className="labelElement"
              style={{ display: "block" }}
            >
              Phone number
            </label>
            <input
              type="tel"
              id="tel"
              name="tel"
              placeholder="Phone number"
              className="inputElement"
            />
          </div>
        </div>

        <div
          className="formInputs d-flex align-items-center justify-content-between"
          style={{ width: "100%" }}
        >
          <div>
            <label
              htmlFor="address"
              className="labelElement"
              style={{ display: "block" }}
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Adress"
              className="inputElement"
            />
          </div>

          <div>
            <label
              htmlFor="city"
              className="labelElement"
              style={{ display: "block" }}
            >
              Town / City
            </label>
            <input
              type="text"
              id="city"
              placeholder="Town or city"
              className="inputElement"
            />
          </div>
        </div>

        <div
          className="formInputs d-flex align-items-center justify-content-between"
          style={{ width: "100%" }}
        >
          <div>
            <label
              htmlFor="country"
              className="labelElement"
              style={{ display: "block" }}
            >
              State / Country
            </label>
            <select name="" id="country" className="inputElement">
              <option value="uzbekistan">Uzbekistan</option>
              <option value="america">America</option>
              <option value="italy">Italy</option>
              <option value="russia">Russia</option>
              <option value="turkey">Turkey</option>
              <option value="brasil">Brasil</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="postalCode"
              className="labelElement"
              style={{ display: "block" }}
            >
              ZIP/Postal code
            </label>
            <input
              type="text"
              id="postalCode"
              placeholder="Postal code or ZIP"
              className="inputElement"
            />
          </div>
        </div>

        <div className="checkboxElement" style={{ width: "35%" }}>
          <input
            type="checkbox"
            name=""
            id="checkbox"
            style={{ cursor: "pointer" }}
          />
          <label
            htmlFor="checkbox"
            className="checkboxLabel"
            style={{ cursor: "pointer" }}
          >
            Ship to a different address?
          </label>
        </div>

        <div className="fedEx">
          <h3 className="checkoutTitle mb-1">Billing method</h3>

          <div className="d-flex align-items-center justify-content-between mb-5">
            <span className="checkoutSpan">
              Please enter your payment method
            </span>
            <span className="checkoutSpan">Step 2 of 5</span>
          </div>

          <div className="radioSection">
            <div
              className="radioElement d-flex align-items-center justify-content-between mb-4"
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex align-center">
                <input
                  type="radio"
                  name="dostavka"
                  id="fedEx"
                  className="me-3"
                />
                <label
                  htmlFor="fedEx"
                  className="fedEx-title"
                  style={{ cursor: "pointer" }}
                >
                  FedEx
                </label>
              </div>

              <div className="d-flex">
                <span className="fedEx-price me-3">+32 USD</span>
                <h5 className="fedEx-title">Additional price</h5>
              </div>

              <img src={FedEx} alt="" />
            </div>

            <div
              className="radioElement d-flex align-items-center justify-content-between"
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex align-center">
                <input type="radio" name="dostavka" id="dhl" className="me-3" />
                <label
                  htmlFor="dhl"
                  className="fedEx-title"
                  style={{ cursor: "pointer" }}
                >
                  DHL
                </label>
              </div>

              <div className="d-flex">
                <span className="fedEx-price me-3 ps-5">+15 USD</span>
                <h5 className="fedEx-title">Additional price</h5>
              </div>

              <img src={DHL} alt="" />
            </div>
          </div>
        </div>

        <h3 className="checkoutTitle mb-1">Payment method</h3>
        <div className="d-flex align-items-center justify-content-between mb-5">
          <span className="checkoutSpan">Please enter your payment method</span>
          <span className="checkoutSpan">Step 3 of 5</span>
        </div>

        <div className="CreditCards">
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <input type="radio" name="" id="credit" className="me-3" />
              <label
                htmlFor="credit"
                className="fedEx-title"
                style={{ cursor: "pointer" }}
              >
                Credit card
              </label>
            </div>

            <img src={VisaCard} alt="" style={{ cursor: "pointer" }} />
          </div>

          <div className="mb-4">
            <label
              htmlFor="cardNumber"
              className="labelElement"
              style={{ display: "block", width: "100%" }}
            >
              Card number
            </label>
            <input
              type="text"
              id="cardNumber"
              placeholder="Card number"
              className="inputElement"
              style={{ width: "660px" }}
            />
          </div>

          <div className="d-flex">
            <div className="me-4">
              <label
                htmlFor="cardHolder"
                className="labelElement"
                style={{ display: "block", width: "100%" }}
              >
                Card holder
              </label>
              <input
                type="text"
                id="cardHolder"
                placeholder="Card holder"
                className="inputElement"
                style={{ width: "350px" }}
              />
            </div>

            <div className="me-4">
              <label
                htmlFor="cardDate"
                className="labelElement"
                style={{ display: "block" }}
              >
                Expiration date
              </label>
              <input
                type="datetime-local"
                id="cardDate"
                placeholder="DD/MM/YY"
                className="inputElement"
                style={{ width: "130px" }}
              />
            </div>

            <div>
              <label
                htmlFor="cardCvc"
                className="labelElement"
                style={{ display: "block" }}
              >
                CVC
              </label>
              <input
                type="text"
                id="cardCvc"
                placeholder="CVC"
                className="inputElement"
                style={{ width: "130px" }}
              />
            </div>
          </div>
        </div>

        <div className="radioSection">
          <div
            className="radioElement d-flex align-items-center justify-content-between mb-4"
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex align-center">
              <input type="radio" name="payment" id="paypal" className="me-3" />
              <label
                htmlFor="paypal"
                className="fedEx-title"
                style={{ cursor: "pointer" }}
              >
                PayPal
              </label>
            </div>

            <img src={PayPal} alt="" />
          </div>

          <div
            className="radioElement d-flex align-items-center justify-content-between"
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex align-center">
              <input
                type="radio"
                name="payment"
                id="bitcoin"
                className="me-3"
              />
              <label
                htmlFor="bitcoin"
                className="fedEx-title"
                style={{ cursor: "pointer" }}
              >
                Bitcoin
              </label>
            </div>

            <img src={Bitcoin} alt="" />
          </div>
        </div>

        <div className="textareaSection">
          <h3 className="checkoutTitle mb-1">Additional informations</h3>
          <div className="d-flex align-items-center justify-content-between mb-5">
            <span className="checkoutSpan">
              Need something else? We will make it for you!
            </span>
            <span className="checkoutSpan">Step 4 of 5</span>
          </div>

          <div>
            <label className="labelElement d-block" id="textarea">
              Order notes
            </label>
            <textarea
              name=""
              id="textarea"
              className="textarea"
              cols="30"
              rows="10"
              placeholder="Need a specific delivery day? Sending a gitf? Let’s say ..."
            ></textarea>
          </div>
        </div>

        <div className="confirmation  mb-5">
          <h3 className="checkoutTitle mb-1">Confirmation</h3>
          <div className="d-flex align-items-center justify-content-between mb-5">
            <span className="checkoutSpan">
              We are getting to the end. Just few clicks and your order si
              ready!
            </span>
            <span className="checkoutSpan">Step 5 of 5</span>
          </div>

          <div
            className="checkboxElement check2 d-flex align-items-center"
            style={{ width: "83%" }}
          >
            <input
              type="checkbox"
              name=""
              id="reciept1"
              style={{ cursor: "pointer" }}
            />
            <label
              htmlFor="reciept1"
              className="checkboxLabel"
              style={{ cursor: "pointer" }}
            >
              I agree with sending an Marketing and newsletter emails. No spam,
              promissed!
            </label>
          </div>
          <div
            className="checkboxElement d-flex align-items-center"
            style={{ cursor: "pointer", width: "62%" }}
          >
            <input
              type="checkbox"
              name=""
              id="reciept2"
              style={{ cursor: "pointer" }}
            />
            <label
              htmlFor="reciept2"
              className="checkboxLabel"
              style={{ cursor: "pointer" }}
            >
              I agree with our{" "}
              <span
                className="text-decoration-underline"
                style={{ cursor: "pointer" }}
              >
                terms and conditions
              </span>{" "}
              and{" "}
              <span
                className="text-decoration-underline"
                style={{ cursor: "pointer" }}
              >
                privacy policy.
              </span>
            </label>
          </div>

          <button onClick={() => setChecked(true)} className="confirmationBtn">Complete order</button>

          {
            checked ? (
              <div className="Modal">
                <div className="Modal-inner">
                  <div className="d-flex align-items-center justify-content-between mb-5">
                    <h2 className="modalTitle">Shopping cart</h2>
                    <button onClick={() => setChecked(false)} className="modalClose">
                      <span className="me-1">Close</span>
                      <ModalClose />
                    </button>
                  </div>

                  <div className="modalOrderCard">
                    <OrderCard orderWidth />
                    <OrderCard orderWidth />
                  </div>

                  <span className="modalSubtotal">Subtotal</span>
                  <h4 className="modalTotalPrice">73.98 USD</h4>
                </div>

                <div className="modalShopping d-flex align-items-center justify-content-between">
                    <span className="modalBtnTitle">Continue shopping</span>
                    <button onClick={() => setChecked(false)} className="modalBtn">Go to Checkout</button>
                </div>
              </div>
            ) : undefined
          }


          <img src={SafeIcon} alt="" className="d-block mt-5 mb-3" />
          <span className="labelElement d-block">All your data are safe</span>

          <span className="checkoutSpan" style={{ marginBottom: "80px" }}>
            We are using the most advanced <br></br>
            security to provide you the best<br></br>
            experience ever.
          </span>
          <span className="checkboxLabel d-block mt-5">
            Copyright © 2020 Freshnesecom
          </span>
        </div>
    </div>
  );
};

export default CheckoutLeft;