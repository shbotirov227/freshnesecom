import React from "react";
import {
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

import "./CategoryRadio.scss";

const CategoryRadio = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChangeCheckbox = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="CategoryRadio">
        <h4 className="CategoryRadio-title">Brands</h4>
        <FormControlLabel className="CategoryRadio-checkbox d-block" control={ <Checkbox color="primary" onChange={handleChangeCheckbox} inputProps={{ "aria-label": "secondary checkbox" }} /> } label="Filtre by brand item" />
        <FormControlLabel className="CategoryRadio-checkbox d-block" control={ <Checkbox color="primary" onChange={handleChangeCheckbox} inputProps={{ "aria-label": "secondary checkbox" }} /> } label="Filtre by brand item" />
        <FormControlLabel className="CategoryRadio-checkbox d-block" control={ <Checkbox color="primary" onChange={handleChangeCheckbox} inputProps={{ "aria-label": "secondary checkbox" }} /> } label="Filtre by brand item" />
        <FormControlLabel className="CategoryRadio-checkbox d-block" control={ <Checkbox color="primary" onChange={handleChangeCheckbox} inputProps={{ "aria-label": "secondary checkbox" }} /> } label="Filtre by brand item" />
        <FormControlLabel className="CategoryRadio-checkbox d-block" control={ <Checkbox color="primary" onChange={handleChangeCheckbox} inputProps={{ "aria-label": "secondary checkbox" }} /> } label="Filtre by brand item" />
    </div>
  );
};

export default CategoryRadio;