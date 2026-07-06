import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./index.css";   // <-- VERY IMPORTANT
import { CartProvider }
from "./context/CartContext";

import { WishlistProvider }
from "./context/WishlistContext";

createRoot(document.getElementById("root")).render(

 <CartProvider>
  <WishlistProvider>
    <App />
  </WishlistProvider>
</CartProvider>
);