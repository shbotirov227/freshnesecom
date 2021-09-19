import { Breadcrumbs, Link, Typography } from "@material-ui/core";

import Header from '../../containers/Header';
import ButtonDefault from '../../components/ButtonDefault';

import './BlogDetail.scss';

const BlogDetail = () => {
    return (
        <div className="BlogDetail">
            <Header />
            <div className="container">
                <Breadcrumbs aria-label="breadcrumb" className="breadcrumbItems mt-4">
                    <Link color="inherit" href="/" className="text-decoration-none">Homepage</Link>
                    <Link color="inherit" href="/category" className="text-decoration-none">Fruit and vegetables</Link>
                    <Typography color="textPrimary">Product title</Typography>
                </Breadcrumbs>

                <ButtonDefault text="Related topics" btnTitle="Button" />
            </div>
        </div>
    )
}

export default BlogDetail;