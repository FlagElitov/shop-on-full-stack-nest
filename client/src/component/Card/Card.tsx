import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { dataProduct } from "../../redux/action/ItemsActionTypes";
import { useDispatch } from "react-redux";
import { addCardAC } from "../../redux/action/CardAction";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const MediaCard: React.FC<dataProduct> = ({
  company,
  title,
  price,
  rating,
  image,
  _id,
}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const card: dataProduct = { company, title, price, rating, image, _id };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="410"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Компания: {company}
            <br />
            Рейтинг: {rating}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(addCardAC(card))}
        >
          В корзину
        </Button>
        <span className="price"> Цена: {price}$</span>
      </CardActions>
    </Card>
  );
};
export default MediaCard;
