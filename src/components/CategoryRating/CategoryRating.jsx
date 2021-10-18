import * as React from "react";
import { Checkbox, Box, Rating, Slider, TextField   } from '@mui/material';

import "./CategoryRating.scss";

const minDistance = 10;

const CategoryRating = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [value1, setValue1] = React.useState([20, 37]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };


  return (
    <div className="CategoryRating">
        <div className="Rating mb-5">
            <h4 className="CategoryRating-title">Rating</h4>
            
            <div className="d-flex align-items-center justify-content-start">
                <Checkbox onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
                <Rating name="half-rating" defaultValue={5} precision={0.5} className="ratingStar" />
            </div>
            <div className="d-flex align-items-center justify-content-start">
                <Checkbox onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
                <Rating name="half-rating" defaultValue={4} precision={0.5} className="ratingStar" />
            </div>
            <div className="d-flex align-items-center justify-content-start">
                <Checkbox onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
                <Rating name="half-rating" defaultValue={3} precision={0.5} className="ratingStar" />
            </div>
            <div className="d-flex align-items-center justify-content-start">
                <Checkbox onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
                <Rating name="half-rating" defaultValue={2} precision={0.5} className="ratingStar" />
            </div>
            <div className="d-flex align-items-center justify-content-start">
                <Checkbox onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
                <Rating name="half-rating" defaultValue={1} precision={0.5} className="ratingStar" />
            </div>
        </div>

        <div className="Price mb-3">
            <h4 className="CategoryRating-title">Price</h4>
            
            <div className="RangeSlider">
              <form action="javascript:void(0)" autoComplete="off" noValidate>
                <Box sx={{ width: 300 }}>
                  <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    value={value1}
                    onChange={handleChange1}
                    valueLabelDisplay="auto"
                    disableSwap
                    className="rangeInput"
                  />
                </Box>

                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }} noValidate autoComplete="off" >

                    <div className="d-flex align-items-center">
                      <span className="min d-block price">Min</span>
                      <span className="d-block price">Max</span>
                    </div>
                  <div className="d-flex">
                    {/* <TextField className="inputField" id="outlined-basic" label="0" variant="outlined" /> */}

                    {/* <TextField className="inputField" id="outlined-basic" label="000" variant="outlined" /> */}

                    <input type="text" className="inputField" placeholder="0" />
                    <input type="text" className="inputField" placeholder="000" />
                  </div>

                </Box>
                <div className="d-flex align-items-center mt-5">
                  <button className="priceBtn">Apply</button>
                  <button className="priceBtn">Reset</button>
                </div>
              </form>

            </div>
        </div>

    </div>
  );
};

export default CategoryRating;
