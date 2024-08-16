import { useEffect } from "react";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import { BrowserRouter as Router,Route } from "react-router-dom";
import WebFont from "webfontloader";
import Home from "./components/Home/Home";
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
      <Router>
        <Header></Header>
        <Route path="/" exact component={Home}></Route>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
