import { Breadcrumbs, Typography, Link } from "@material-ui/core";

import Header from "../../containers/Header";
import "./Category.scss";

const Category = () => {
  return (
    <div className="Category">
      <Header />

      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Home
          </Link>

          <Link color="inherit" href="/getting-started/installation/">
            Core
          </Link>
          <Typography color="textPrimary">Breadcrumb</Typography>
        </Breadcrumbs>

        <div className="d-flex align-center justify-content-between">
          <h3>Fruit and vegetables</h3>
          <span>Grid view</span>
          <span>List view</span>
          <span>Products</span>
        </div>

        <div>
          <div>
            <form action="form">
              <div>
                <input type="radio" name="" id="radio1" formControl />
                <label htmlFor="radio1">Filtre text</label>
              </div>

              <div>
                <input type="radio" name="" id="radio2" formControl />
                <label htmlFor="radio2">Filtre text</label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
