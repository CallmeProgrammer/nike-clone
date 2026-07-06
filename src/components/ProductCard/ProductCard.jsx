import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";

import "./ProductCard.css";

function ProductCard({ product }) {

  const navigate = useNavigate();

  const {
    wishlist,
    toggleWishlist
  } = useWishlist();

  const isWishlisted =
    wishlist.some(

      item => item.id === product.id

    );

  return (

    <div
      className="product-card"
      onClick={() =>
        navigate(
          `/product/${product.id}`
        )
      }
    >

      <button
        className="wishlist-btn"
        onClick={(e) => {

          e.stopPropagation();

          toggleWishlist(product);

        }}
      >

        <Heart
          size={22}
          fill={
            isWishlisted
              ? "black"
              : "none"
          }
        />

      </button>

      <div className="product-image-wrapper">

        <img
          src={product.images?.[0]}
          alt={product.title}
          className="product-image"
        />

      </div>

      <div className="product-info">

        {

          product.productLabel && (

            <div className="product-label">

              {product.productLabel}

            </div>

          )

        }

        <div className="product-title">

          {product.title}

        </div>
        
        <div className="product-category">

           {product.description}

        </div>

        <div className="product-colors">
          {
          product.attributes?.colour?.map(
            colour => (
            <span
            key={colour}
            className="dot"
            style={{
            backgroundColor: colour.toLowerCase()
           }}
           ></span> 
          ))}
        </div>

        <div className="product-price">
          ₹{Number(product.price).toLocaleString("en-IN")}
        </div>

      </div>

    </div>

  );

}

export default ProductCard;