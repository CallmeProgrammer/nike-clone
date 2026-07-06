import { X } from "lucide-react";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

import Topbar from "../../components/TopBar/TopBar";
import Navbar from "../../components/NavBar/Navbar";
import PromoBar from "../../components/PromoBar/PromoBar";
import Footer from "../../components/Footer/Footer";

import "./Wishlist.css";

function Wishlist() {

  const {
    wishlist,
    removeFromWishlist
  } = useWishlist();

  const {
    addToCart
  } = useCart();

  const handleMoveToBag = (product) => {

    addToCart(
      product,
      product.selectedSize || "UK 8"
    );

    removeFromWishlist(
      product.id
    );

  };

  return (

    <>

      <Topbar />

      <Navbar sticky={true} />

      <PromoBar />

      <div className="wishlist-page">

        <h1>

          Favourites · {wishlist.length} products

        </h1>

        {

          wishlist.length === 0 ? (

            <div className="empty-wishlist">

              <h2>

                Your favourites list is empty.

              </h2>

              <p>

                Save your favourite Nike products here.

              </p>

            </div>

          ) : (

            <div className="wishlist-grid">

              {

                wishlist.map(product => (

                  <div
                    className="wishlist-card"
                    key={product.id}
                  >

                    <button
                      className="remove-btn"
                      onClick={() =>
                        removeFromWishlist(
                          product.id
                        )
                      }
                    >

                      <X size={22} />

                    </button>

                    <img
                      src={product.images?.[0]}
                      alt={product.title}
                    />

                    <div className="wishlist-info">

                      <h3>

                        Nike

                      </h3>

                      <p>

                        {product.title}

                      </p>

                      <h4>

                        ₹{
                          Number(
                            product.price
                          ).toLocaleString(
                            "en-IN"
                          )
                        }

                      </h4>

                      <button
                        className="move-btn"
                        onClick={() =>
                          handleMoveToBag(
                            product
                          )
                        }
                      >

                        Move to Bag

                      </button>

                    </div>

                  </div>

                ))

              }

            </div>

          )

        }

      </div>

      <Footer />

    </>

  );

}

export default Wishlist;