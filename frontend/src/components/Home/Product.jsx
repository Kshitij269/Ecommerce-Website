import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component"
import Rating from "react-rating"

const options={
    edit:false,
    color:"rgba(20,20,20,0.1)",
    activeColor:"tomato",
    value:2.5,
    isHalf:true,
    size: window.innerWidth<600 ? 20:25
};

const Product=({product})=>{
    return(
        <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product[0].images.url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`₹${product.price}`}</span>
    </Link>
    )
}

export default Product