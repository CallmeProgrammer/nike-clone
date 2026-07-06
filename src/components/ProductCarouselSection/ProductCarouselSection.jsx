import "./ProductCarouselSection.css";

import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

function ProductCarouselSection({

  title = "Products",

  products = []

}) {

  return (

    <section className="product-section">

      <h2>{title}</h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={14}
        slidesPerView={3.2}
        slidesPerGroup={3}
        speed={500}
      >

        {products.map((product, index) => (

          <SwiperSlide key={index}>

            <a
              href="/products"
              className="product-card"
            >
              
              <img
                src={product.image}
                alt={product.title}
              />

              <h3>{product.title}</h3>

              {product.description && (

                <p className="product-description">
                  {product.description}
                </p>

              )}

              {product.price && (

                <div className="product-price">

                   ₹{Number(product.price).toLocaleString("en-IN")}
                  {product.oldPrice && (

                    <span>
                       ₹{Number(product.oldPrice).toLocaleString("en-IN")}
                    </span>

                  )}

                  {product.discount && (

                    <small>
                      {product.discount}% Off
                    </small>

                  )}

                </div>

              )}

            </a>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>

  );
}

export default ProductCarouselSection;