
import * as React from 'react';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import CheckoutLeft from '../../containers/CheckoutLeft/CheckoutLeft';

import Header from '../../containers/Header';

import './Checkout.scss';
import CheckoutRight from '../../containers/CheckoutRight/CheckoutRight';

const Checkout = () => {
    return (
        <div className="Checkout">
            <Header />
            <div className="container">
            <Breadcrumbs aria-label="breadcrumb" className="breadcrumbItems mt-4 mb-5">
                <Link color="inherit" href="/" className="text-decoration-none">Homepage</Link>
                <Typography color="textPrimary">Checkout page</Typography>
            </Breadcrumbs>

                <div className="checkoutPage d-flex justify-content-between">
                    <CheckoutLeft />
                    <CheckoutRight />
                </div>
                
            </div>
        </div>
    )
}

export default Checkout;