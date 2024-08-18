import React from "react";
import "./Home.css";
import Product from "./ProductCard";

<<<<<<< HEAD
import "./Home.css";
// import { CgMouse } from "react-icons/cg";

// const product = {
//   name: T - shirt,
//   price: 20.99,
//   image: [{
//       url: "https://png.pngtree.com/png-vector/20220527/ourmid/pngtree-unisex-bright-blue-t-shirt-mock-up-png-image_4757174.png",
//     },
//   ],
//   _id: "abhishek",
// };

=======
const product = {
  name: "T-shirt",
  price: 20.99,
  images: [{ url: "https://png.pngtree.com/png-vector/20220527/ourmid/pngtree-unisex-bright-blue-t-shirt-mock-up-png-image_4757174.png" }],
  _id: "abhishek",
  ratings: 4.5,  // Add these properties if you want to use them
  numOfReviews: 10,
};

>>>>>>> c885bba4e29fa493f8cdeb0fd0e2b823e7b27445
const Home = () => {
  return (
    <>
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>Find amazing products below</h1>
        <a href="#container">
          {/* <button>
            Scroll <CgMouse />
          </button> */}
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
