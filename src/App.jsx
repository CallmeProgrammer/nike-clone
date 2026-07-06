import {
  BrowserRouter,
  Routes,
  Route
}
from "react-router-dom";

import Products
from "./pages/Products/Products";

import ProductsPage from "./pages/Products/ProductsPage";

import ProductDetails
from "./pages/ProductDetails/ProductDetails";

import Cart
from "./pages/Cart/Cart";

import Wishlist
from "./pages/Wishlist/Wishlist.jsx";

import AddProduct
from "./admin/pages/AddProduct";

import Home
from "./admin/pages/Home/Home";

import Men
from "./components/Men/Men";

import Women
from "./components/Women/Women";

import Kids
from "./components/Kids/Kids";

import Jordan
from "./components/Jordan/Jordan";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        /* Show ALL products */
        <Route
          path="/shop"
          element={<ProductsPage />}
        />

        <Route
        path="/category/:category"
        element={<ProductsPage />}
        />
        
        
        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />

        <Route
          path="/admin"
          element={<AddProduct />}
        />

        <Route
          path="/men"
          element={<Men />}
        />

        <Route
          path="/women"
          element={<Women />}
        />

        <Route
          path="/kids"
          element={<Kids />}
        />

        <Route
          path="/jordan"
          element={<Jordan />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;