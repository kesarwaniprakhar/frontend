import Footer from "./components/layout/Footer.js";
import Header from "./components/layout/Header.js";
import Home from "./components/Home.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDetails from "./components/product/ProductDetails.js";

function App() {
  return (
    <Router>
      <Header></Header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/products/:product_id" element={<ProductDetails />} />
        </Routes>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </Router>
  );
}

export default App;
