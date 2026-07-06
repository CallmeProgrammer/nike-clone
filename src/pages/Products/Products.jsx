import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Heart } from "lucide-react";

import { supabase } from "../../services/supabase";

import { useWishlist } from "../../context/WishlistContext";

import "./Products.css";

function Products() {

  const navigate = useNavigate();

  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const {
    wishlist,
    toggleWishlist
  } = useWishlist();

  useEffect(() => {

    fetchProducts();

  }, []);

  const fetchProducts = async () => {

    try {

      const {
        data,
        error
      } = await supabase
        .from("products")
        .select("*");

      if (error) {

        console.log(error);

        return;

      }

      setProducts(data);

    }

    catch (err) {

      console.log(err);

    }

    finally {

      setLoading(false);

    }

  };

  if (loading) {

    return (

      <div className="products-loading">

        Loading Products...

      </div>

    );

  }

  return (

    <div className="products-page">

      <h1 className="products-title">

        Products

      </h1>

      <div className="products-grid">

        {products.map(product => {

          const isWishlisted =
            wishlist.some(

              item =>
                item.id ===
                product.id

            );

          return (

            <div
              key={product.id}
              className="product-card"
              onClick={() =>
                navigate(
                  `/product/${product.id}`
                )
              }
            >

              {/* WISHLIST */}

              <button

                className="wishlist-btn"

                onClick={(e) => {

                  e.stopPropagation();

                  toggleWishlist(
                    product
                  );

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

              {/* IMAGE */}

              <div className="product-image-wrapper">

                <img

                  src={
                    product.images?.[0]
                  }

                  alt={
                    product.title
                  }

                  className="product-image"

                />

              </div>

              {/* INFO */}

              <div className="product-info">

                {product.productLabel && (

                  <div className="product-label">

                    {product.productLabel}

                  </div>

                )}

                <h3>

                  {product.title}

                </h3>

                <p className="product-category">

                  {product.category}

                </p>

                <div className="product-colors">

                  <div className="color-dot black"></div>

                  <div className="color-dot gray"></div>

                  <div className="color-dot yellow"></div>

                </div>

                <div className="product-price">

                  ₹{product.price}

                </div>

              </div>

            </div>

          );

        })}

      </div>

    </div>

  );

}

export default Products;