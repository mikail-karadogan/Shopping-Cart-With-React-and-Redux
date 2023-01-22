import { connect } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import HeadLayout from "./pages/layouts/HeadLayout";
import ProductList from "./pages/product/ProductList";

function App() {
  return (
    <>
      <Router>
        <HeadLayout />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
