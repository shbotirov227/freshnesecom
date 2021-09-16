import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import CategoryCardImg from '../../assets/images/categoryCardImg.png';
import './CategoryCard.scss';

const CategoryCard = () => {
    return (
        <div className="CategoryCard">
            <Card sx={{ maxWidth: 345 }} className="d-flex categoryCard">
                <CardMedia className="categoryCardImg" component="img" height="140" image={CategoryCardImg} alt="green iguana" />

                <CardMedia />
                
                <CardContent className="d-flex justify-content-between">
                    <div>
                        <Typography gutterBottom variant="h5" className="categoryCardTitle" component="div">Product title</Typography>
                        <Typography variant="body2" color="text.secondary">Space for a small product description</Typography>
                    </div>

                    <div>
                        <Typography gutterBottom variant="h5" className="categoryCardTitle" component="div">36.99 USD</Typography>
                        <Typography variant="body2" color="text.secondary">48.56</Typography>
                    </div>
                </CardContent>

            </Card> 
                <div className="d-block">
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </div>
        </div>
    )
}

export default CategoryCard;