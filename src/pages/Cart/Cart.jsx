import {
  Trash2,
  Plus,
  Heart
} from "lucide-react";
import { useState } from "react";
import Topbar from "../../components/TopBar/TopBar";
import Navbar from "../../components/Navbar/Navbar";
import PromoBar from "../../components/PromoBar/PromoBar";
import { useCart } from "../../context/CartContext";

import "./Cart.css";
import Footer from "../../components/Footer/Footer";

function Cart() {

  const {

    cartItems,

    totalItems,

    increaseQuantity,

    decreaseQuantity,

    removeFromCart

  } = useCart();

  const bagTotal =
    cartItems.reduce(

      (total, item) =>

        total +
        item.price *
        item.quantity,

      0

    );

  const discount =
    Math.round(
      bagTotal * 0.02
    );

  const totalPay =
    bagTotal - discount;

  if (cartItems.length === 0) {

  return (

    <>
      <Topbar />

      <Navbar sticky={true} />

      <PromoBar />

      <div className="empty-cart">

        <h1>

          Your bag is empty.

        </h1>

        <p>

          When you add products, they'll appear here.

        </p>

        <button
          className="shop-now-btn"
          onClick={() => window.location.href = "/"}
        >

          Shop Now

        </button>

      </div>

      <Footer />

    </>

  );

}

  return (
    <>

    <Topbar />
    <Navbar sticky={true} />
    <PromoBar />

    <div className="cart-page">

      {/* LEFT */}

      <div className="cart-left">

        <h1>

          Bag

        </h1>

        {

          cartItems.map(item => (

            <div className="cart-item"

              key={`${item.id}-${item.selectedSize}`}

            >

              <img

                src={item.images?.[0]}

                alt={item.title}

                className="cart-image"

              />

              <div className="cart-info">

                <div className="cart-top">

                  <div>

                    <h3>

                      {item.title}

                    </h3>

                    <p>

                      {item.description}

                    </p>

                    <p>

                      14 Day Return

                    </p>

                    <p>

                      Size {item.selectedSize}

                    </p>

                  </div>

                  <h3>

                    ₹{

                      Number(
                        item.price
                      ).toLocaleString(
                        "en-IN"
                      )

                    }

                  </h3>

                </div>

                <div className="cart-actions">

                  <div className="quantity-pill">

                    <button

                      onClick={() =>
                        decreaseQuantity(
                          item.id,
                          item.selectedSize
                        )
                      }

                    >

                      -

                    </button>

                    <span>

                      {item.quantity}

                    </span>

                    <button

                      onClick={() =>
                        increaseQuantity(
                          item.id,
                          item.selectedSize
                        )
                      }

                    >

                      <Plus size={18} />

                    </button>

                  </div>

                  <button

                    className="icon-btn"

                    onClick={() =>
                      removeFromCart(
                        item.id,
                        item.selectedSize
                      )
                    }

                  >

                    <Trash2 size={18} />

                  </button>

                  <button

                    className="icon-btn"

                  >

                    <Heart size={18} />

                  </button>

                </div>

              </div>

            </div>

          ))

        }

      </div>

      {/* RIGHT */}

      <div className="cart-right">

        <div className="summary">

          <h1>

            Summary

          </h1>

          <div className="summary-row">

            <span>

              Bag Total

            </span>

            <span>

              ₹{

                bagTotal.toLocaleString(
                  "en-IN"
                )

              }

            </span>

          </div>

          <div className="summary-row discount">

            <span>

              Discount on MRP

            </span>

            <span>

              -₹{

                discount.toLocaleString(
                  "en-IN"
                )

              }

            </span>

          </div>

          <div className="summary-row">

            <span>

              Sub Total

            </span>

            <span>

              ₹{

                totalPay.toLocaleString(
                  "en-IN"
                )

              }

            </span>

          </div>

          <div className="summary-row">

            <span>

              Shipping Charges

            </span>

            <span className="free">

              Free

            </span>

          </div>

          <div className="summary-row total">

            <span>

              You Pay

            </span>

            <span>

              ₹{

                totalPay.toLocaleString(
                  "en-IN"
                )

              }

            </span>

          </div>

          <button className="buy-btn">

            Proceed To Buy

          </button>

        </div>

      </div>

    </div>

    <Footer/>
    </>
   

  );

}

export default Cart;