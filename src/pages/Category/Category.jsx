import { Breadcrumbs, Typography, Link } from '@material-ui/core';

import Header from '../../containers/Header'
import './Category.module.scss';

const Category = () => {
    return (
        <div className="Category">
            <Header />

            <Breadcrumbs aria-label="breadcrumb">

                <Link color="inherit" href="/">
                    Home
                </Link>

                <Link color="inherit" href="/getting-started/installation/">
                    Core
                </Link>
                <Typography color="textPrimary">Breadcrumb</Typography>

            </Breadcrumbs>
        </div>
    )
}

export default Category;