import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cart-slice";
import { Link } from "react-router-dom";

const ProductCard = ({ title, image, description, price, rating, id }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const dispatch = useDispatch();

  const toggleDescription = () => {
    setShowFullDescription((prevState) => !prevState);
  };

  const cartHandler = () => {
    dispatch(addItem({ id, price, title }));
  };

  return (
    <Card sx={{ width: "calc(60% - 20px)", margin: 10 }}>
      <CardMedia
        component="img"
        height={150}
        image={image}
        alt={title}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Link to={`/productDetails?productId=${id}`}>
          <Typography gutterBottom variant="h5" component="h4">
            {`${title.slice(0, 30)}...`}
          </Typography>
        </Link>
        <Typography variant="body2" color="textSecondary" component="p">
          {showFullDescription ? description : `${description.slice(0, 50)}...`}
        </Typography>

        <Button onClick={toggleDescription} size="small" color="primary">
          {`Read ${showFullDescription ? "less" : "more"}`}
        </Button>

        <Typography variant="h6" component="p">
          Price: ${price}
        </Typography>
        <Rating name="rating" value={rating.rate} precision={0.5} readOnly />
        <button onClick={cartHandler}>Add to cart</button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
