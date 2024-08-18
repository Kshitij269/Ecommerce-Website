import { useEffect } from "react";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import WebFont from "webfontloader";
import Home from "./components/Home/Home";
import Contact from "./components/layout/Contact/Contact";
import About from "./components/layout/About/About";
import Products from "./components/Product/Products";
import Layout from "./Layout";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <>
      <Header />
      <Home></Home>
      <Footer />
    </>
  );
}

export default App;
