import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/Home/Home";
import Contact from "./components/layout/Contact/Contact";
import About from "./components/layout/About/About";
import Products from "./components/Product/Products"; // Ensure this is correctly imported
import Search from "./components/Product/Search.jsx"; // Ensure this is correctly imported
import ProductDetails from "./components/Product/ProductDetails.jsx";
import LoginSignUp from "./components/User/LoginSignUp.jsx";
import store from "./store.js";
import { loadUser } from "./actions/UserAction.jsx";
import UserOptions from "./components/layout/Header/UserOptions.jsx";
import { useSelector } from "react-redux";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser);
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        {isAuthenticated && <UserOptions user={user} />}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginSignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
