
import * as React from 'react';
import { Box, FormControlLabel, FormGroup, TextField } from '@mui/material';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Header from '../../containers/Header';

import './Checkout.scss';
import { Label } from '@mui/icons-material';

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
                    <div className="checkoutPage-left">
                        <form action="">
                            <h3 className="checkoutTitle mb-1">Billing info</h3>
                            
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="checkoutSpan">Please enter your billing info</span>
                                <span className="checkoutSpan">Step 1 of 5</span>
                            </div>

                            <div className="formInputs">
                            <Box component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '40ch' },
                                }}
                                    noValidate
                                    autoComplete="off"
                                >
                                <TextField id="outlined-basic" label="Outlined" classes="d-block" variant="outlined" />
                            </Box>
                            </div>
                        </form>
                    </div>

                    <div className="checkoutPage-right"></div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;