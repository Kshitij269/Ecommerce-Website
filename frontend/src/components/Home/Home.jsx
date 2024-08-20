import React, { Fragment, useEffect } from "react";
import Product from "./Product";
import "./Home.css";
import { CgMouse } from "react-icons/cg";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";

// const initialState = {
//   loading: false, // Ensure this is defined in your initial state
//   data: [],
//   error: null,
// };

const product = [
  {
    name: "T-shirt",
    price: "20.99",
    images: [
      {
        url: "https://picsum.photos/seed/picsum/200/300",
      },
    ],
    _id: "abhishek",
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(
    (state) => state.products
  );
  // const { loading, error, products, productCount } = useSelector(
  //   (state) => state.products
  // );

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <Fragment>
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <Fragment>
        <MetaData title="ECOMMERCE" />
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
          {products && products.map((product) => <Product product={product} />)}
        </div>
      </Fragment>
    </Fragment>
  );
};

export default Home;
