import "./Navbar.css";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  Heart,
  ShoppingBag,
  Search
} from "lucide-react";

import { useCart }
from "../../context/CartContext";

import { useWishlist }
from "../../context/WishlistContext";

const menuData = {
  new: [
    {
      title: "Featured",
      links: [
        "New Arrivals",
        "Bestsellers",
        "SNKRS Launch Calendar",
        "Member Exclusive",
        "Top Picks Under ₹4999"
      ]
    },
    {
      title: "Trending",
      links: [
        "Running",
        "Retro Running",
        "Nike 24.7",
        "Air Max",
        "Pegasus"
      ]
    },
    {
      title: "Shop Icons",
      links: [
        "Air Force 1",
        "Air Jordan 1",
        "Dunk",
        "Vomero"
      ]
    },
    {
      title: "Sport",
      links: [
        "Running",
        "Gym & Training",
        "Sportswear",
        "Football",
        "Basketball",
        "Vomero"
      ]
    }
  ],

  men: [
    {
      title: "Featured",
      links: [
        "New Arrivals",
        "Bestsellers",
        "Shop All Sale",
        "All Conditions Gear"
      ]
    },
    {
      title: "Shoes",
      links: [
        "All Shoes",
        "Lifestyle",
        "Jordan",
        "Running",
        "Basketball",
        "Training"
      ]
    },
    {
      title: "Clothing",
      links: [
        "Tops & T-Shirts",
        "Shorts",
        "Jackets",
        "Hoodies",
        "Pants"
      ]
    },
    {
      title: "Shop By Sport",
      links: [
        "Running",
        "Football",
        "Basketball",
        "Gym & Training",
        "Tennis"
      ]
    }
  ],

  women: [
    {
      title: "Featured",
      links: [
        "New Arrivals",
        "Bestsellers",
        "Shop All Sale"
      ]
    },
    {
      title: "Shoes",
      links: [
        "Lifestyle",
        "Running",
        "Training",
        "Sandals"
      ]
    },
    {
      title: "Clothing",
      links: [
        "Sports Bras",
        "Leggings",
        "Tops",
        "Skirts",
        "Jackets"
      ]
    },
    {
      title: "Shop By Sport",
      links: [
        "Yoga",
        "Running",
        "Gym & Training",
        "Basketball"
      ]
    }
  ],

  kids: [
    {
      title: "Featured",
      links: [
        "New Arrivals",
        "Bestsellers",
        "Back To School",
        "Lifestyle Looks"
      ]
    },
    {
      title: "Shoes",
      links: [
        "All Shoes",
        "Running",
        "Jordan",
        "Lifestyle"
      ]
    },
    {
      title: "Clothing",
      links: [
        "All Clothing",
        "Tops & T-Shirts",
        "Pants and Leggings",
        "Shorts"
      ]
    },
    {
      title: "Kids By Age",
      links: [
        "Older Kids(7 - 14 years)",
        "Younger Kids(4 - 7 years)",
        "Babies & Toddlers(0 - 4 years)"
      ]
    },
    {
      title: "Shop By Sport",
      links: [
        "Running",
        "Gym & Training"
      ]
    },
    {
      title: "Accessories & Equipment",
      links: [
        "All Accessories & Equipment",
        "Bags & Backpacks",
        "Hats & Headwear"
      ]
    }
  ],

  jordan: [
    {
      title: "Featured",
      links: [
        "New Arrivals",
        "Bestsellers"
      ]
    },
    {
      title: "Men",
      links: [
        "New Arrivals",
        "Shoes",
        "Clothing",
        "Accessories"
      ]
    },
    {
      title: "Women",
      links: [
        "New Arrivals",
        "Shoes",
        "Clothing",
        "Accessories"
      ]
    },
    {
      title: "Sport",
      links: [
        "Jordan Basketball",
        "Jordan Football"
      ]
    }
  ],

  sale: [
    {
      title: "Sale & Offers",
      links: [
        "Shop All Sale"
      ]
    },
    {
      title: "Mens Sale",
      links: [
        "Shoes",
        "Clothing",
        "Accessories"
      ]
    },
    {
      title: "Womens Sale",
      links: [
        "Shoes",
        "Clothing",
        "Accessories"
      ]
    },
    {
      title: "Shop By Sport",
      links: [
        "Running",
        "Gym & Training",
        "Basketball",
        "Football"
      ]
    }
  ]
};
const linkRoutes = {
  // Common
  "New Arrivals": "/shop",
  "Bestsellers": "/shop",
  "Member Exclusive": "/shop",
  "Top Picks Under ₹4999": "/shop",
  "Shop All Sale": "/shop",
  "SNKRS Launch Calendar": "/shop",

  // Shoes
  "All Shoes": "/shop",
  "Lifestyle": "/category/lifestyle",
  "Running": "/category/running",
  "Retro Running": "/category/running",
  "Air Max": "/category/airforce1",
  "Pegasus": "/category/pegasuspremium",
  "Pegasus Premium": "/category/pegasuspremium",
  "Vomero": "/category/vomero",
  "Air Force 1": "/category/airforce1",
  "Air Jordan 1": "/category/airjordan1",
  "Dunk": "/category/dunk",
  "Jordan": "/category/airjordan1",
  "Training": "/category/training",
  "Basketball": "/category/basketball",
  "Football": "/category/football",
  "Sandals": "/category/shop",

  // Clothing
  "Tops & T-Shirts": "/category/graphictees",
  "All Clothing": "/shop",
  "Tops": "/category/graphictees",
  "Shorts": "/category/shorts",
  "Pants": "/category/womentights",
  "Pants and Leggings": "/category/womentights",
  "Leggings": "/category/womentights",
  "Sports Bras": "/category/sportsbras",
  "Skirts": "/category/womentights",
  "Jackets": "/category/jackets",
  "Hoodies": "/category/jackets",

  // Accessories
  "Accessories": "/shop",
  "All Accessories & Equipment": "/shop",
  "Bags & Backpacks": "/category/shop",
  "Hats & Headwear": "/category/caps",

  // Sports
  "Gym & Training": "/category/training",
  "Yoga": "/category/shop",
  "Tennis": "/category/shop",

  // Kids
  "Older Kids(7 - 14 years)": "/kids",
  "Younger Kids(4 - 7 years)": "/kids",
  "Babies & Toddlers(0 - 4 years)": "/kids",

  // Jordan
  "Jordan Basketball": "/category/basketball",
  "Jordan Football": "/category/football",

  // Fallback
  "Shoes": "/shop",
  "Clothing": "/shop",
  "Men": "/men",
  "Women": "/women"
};

function Navbar({ sticky = true }) {

  const [menu, setMenu] = useState("");

  const navigate = useNavigate();

  const { totalItems } = useCart();
  const { cartItems } = useCart();
  console.log("NAVBAR CART:",cartItems);
  
  const { wishlistCount } = useWishlist();

  return (

    <div
      className={`navbar-wrapper ${
        sticky ? "navbar-sticky" : ""
      }`}
      onMouseLeave={() => setMenu("")}
    >

      <div className="navbar">

        <div
          className="navbar-left"
          onClick={() => navigate("/")}
        >

          <img
            src="/nike-logo.png"
            alt="nike"
            className="nike-logo"
          />

        </div>

        <div className="navbar-center">

          <div
            className="nav-item"
            onMouseEnter={() => setMenu("new")}
          >
            New & Featured
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => setMenu("men")}
            onClick={() => navigate("/men")}
          >
            Men
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => setMenu("women")}
            onClick={() => navigate("/women")}
          >
            Women
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => setMenu("kids")}
            onClick={() => navigate("/kids")}
          >
            Kids
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => setMenu("jordan")}
            onClick={() => navigate("/jordan")}
          >
            Jordan
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => setMenu("sale")}
          >
            Sale
          </div>

        </div>

        <div className="navbar-right">

          <div className="search-box">

            <Search size={18} />

            <input
              type="text"
              placeholder="Search"
            />

          </div>

          <div
            className="cart-icon"
            onClick={() => navigate("/wishlist")}
          >

            <Heart className="nav-icon" />

            {wishlistCount > 0 && (

              <span className="cart-count">

                {wishlistCount}

              </span>

            )}

          </div>

          <div
            className="cart-icon"
            onClick={() => navigate("/cart")}
          >

            <ShoppingBag className="nav-icon" />

            {totalItems > 0 && (

              <span className="cart-count">

                {totalItems}

              </span>

            )}

          </div>

        </div>

      </div>

      <div
        className={`dropdown ${
          menu ? "show-dropdown" : ""
        }`}
      >

        <div
          key={menu}
          className="dropdown-content"
        >

          {menuData[menu]?.map(
            (section, index) => (

              <div
                className="dropdown-column"
                key={index}
              >

                <h3>

                  {section.title}

                </h3>

                {section.links.map(
                  (link, idx) => (
                    /*
                    <a
                      href="#"
                      key={idx}
                    >

                      {link}

                    </a>
                    */
                    <span
  key={idx}
  className="dropdown-link"
  onClick={() => {
    navigate(linkRoutes[link] || "/shop");
    setMenu("");
  }}
>
  {link}
</span>
                  )
                )}

              </div>

            )
          )}

        </div>

      </div>

    </div>

  );

}

export default Navbar;