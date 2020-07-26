import React from "react";
import classes from "./PizzaImage.css";
import pizzaImage from "../../assets/pizza.jpg";

const pizzaImage = (props) => {
  <div className={classes.pizzaImage}>
    <img src={pizzaImage} className={classes.pizzaImg} />
  </div>;
};

export default pizzaImage;
