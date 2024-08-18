import React from "react";
import Product from "./Product";
import "./Home.css";
import { CgMouse } from "react-icons/cg";

const product = {
  name: T - shirt,
  price: 20.99,
  image: [
    {
      url: "https://png.pngtree.com/png-vector/20220527/ourmid/pngtree-unisex-bright-blue-t-shirt-mock-up-png-image_4757174.png",
    },
  ],
  _id: "abhishek",
};

const Home = () => {
  return (
    <>
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>Find amazing products below</h1>
        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        <Product product={product} />
      </div>
    </>
  );
};

export default Home;
