import { Link } from "react-router-dom";
import "./ShopBySport.css";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

function ShopBySport({
  title = "Shop By Sport",
  items = []
}) {

  return (

    <section className="sport-section">

      <h2>{title}</h2>

      <Swiper
        modules={[Navigation]}
        navigation={items.length > 3}
        spaceBetween={12}
        slidesPerView={
          items.length <= 3
            ? items.length
            : 3.4
        }
        slidesPerGroup={3}
        speed={500}
      >

        {items.map((item, index) => {

          const categorySlug = item.title
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-");

          console.log(
            item.title,
            "=>",
            `/category/${categorySlug}`
          );

          return (

            <SwiperSlide key={index}>

              <Link
                to={`/category/${categorySlug}`}
                className="sport-card"
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <h3>
                  {item.title}
                </h3>

              </Link>

            </SwiperSlide>

          );

        })}

      </Swiper>

    </section>

  );

}

export default ShopBySport;