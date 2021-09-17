import React from "react";
import { Breadcrumbs, Typography, Link, Radio, RadioGroup, FormControlLabel, FormControl, Checkbox, } from "@material-ui/core";

import Header from "../../containers/Header";
import CategoryLink from "../../components/CategoryLink";
import CategoryCard from "../../components/CategoryCard";
import { X } from "../../assets/icons/icons";

import "./Category.scss";

const Category = () => {
  const [value, setValue] = React.useState("female");
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChangeCheckbox = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="Category">
      <Header />
      <div className="container">
        <div className="mb-5">
          <Breadcrumbs aria-label="breadcrumb" className="breadcrumbItems">
            <Link color="inherit" href="/">
              Home
            </Link>

            <Link color="inherit" href="/getting-started/installation/">
              Core
            </Link>
            <Typography color="textPrimary">Breadcrumb</Typography>
          </Breadcrumbs>

          <div className="d-flex align-center justify-content-between">
            <h3 className="category-title">Fruit and vegetables</h3>

            <div>
              <span>Grid view</span>
              <span>List view</span>
              <span>Products</span>
            </div>
          </div>

          <div className="d-flex w-100">
            <div className="d-flex align-items-center justify-content-center radio-section check">
              <FormControl>

                <RadioGroup aria-label="gender" row name="gender1" value={value} onChange={handleChange}>
                  <FormControlLabel value="female" control={<Radio color="primary" />} label="Filtre text" />
                  <FormControlLabel value="male" control={<Radio color="primary" />} label="Filtre text" />
                </RadioGroup>

              </FormControl>
            </div>

            <div className="checkbox-item check">
              <FormControlLabel control={ <Checkbox color="primary" onChange={handleChangeCheckbox} inputProps={{ "aria-label": "secondary checkbox" }} /> } label="Filtre" />
                <button className="radio-btn">Nbm</button>
            </div>

            <div className="checkbox-item check">
              <FormControlLabel control={ <Checkbox color="primary" onChange={handleChangeCheckbox} inputProps={{ "aria-label": "secondary checkbox" }} /> } label="Filtre" />
              <button className="radio-btn">Nbm</button>
            </div>

            <div className="checkbox-item check">

              <FormControlLabel control={ <Checkbox color="primary" onChange={handleChangeCheckbox} inputProps={{ "aria-label": "secondary checkbox" }} /> } label="Filtre" />
              <button className="radio-btn">12</button>

              <span className="line"></span>

              <select name="" id="">
                <option value="select">Select</option>
                <option value="select">Select</option>
                <option value="select">Select</option>
                <option value="select">Select</option>
                <option value="select">Select</option>
              </select>

            </div>
          </div>

          <div className="selectedItems d-flex align-items-center justify-content-start mt-3">
            <span className="selectedTitle">Applied filtres:</span>
            <button className="selectedBtn"><span className="mr-5">Selected Filtre </span><X/></button>
            <button className="selectedBtn"><span className="mr-5">Selected Filtre </span><X/></button>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <CategoryLink className="d-flex justify-content-between" title="Categories" name={[ 'Category name', 'Category name', 'Category name', 'Category name' ]} num1="320" num2="112" num3="32" num4="48" />

          <div className="categorycard-section">
            <CategoryCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
