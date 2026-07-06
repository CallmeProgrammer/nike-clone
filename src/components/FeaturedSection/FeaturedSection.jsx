import { Link } from "react-router-dom";
import "./FeaturedSection.css";

function FeaturedSection({

  showFeatured = true,
  showTrending = true,

  featuredTitle = "Featured",
  trendingTitle = "Trending",

  featuredItems = [],
  trendingItems = []

}) {

  return (

    <section className="featured-section">

      {showFeatured && (

        <>
          <h2 className="section-title">
            {featuredTitle}
          </h2>

          <div className="featured-grid">

            {featuredItems.map((item, index) => (
              /*
              <a
                href={item.link || "/products"}
                key={index}
              >
                <img
                  src={item.image}
                  alt={item.title || "Featured"}
                />
              </a>
              */
              <Link
               to={item.link || "/shop"}
               key={index}
               >
              <img
               src={item.image}
               alt={item.title || "Featured"}
               />
               </Link>
            ))}

          </div>
        </>

      )}

      {showTrending && (

        <>
          <h2 className="section-title trending-title">
            {trendingTitle}
          </h2>

          <div className="trending-grid">

            {trendingItems.map((item, index) => (

              <a
                href={item.link || "/shop"}
                key={index}
              >
                <img
                  src={item.image}
                  alt={item.title || "Trending"}
                />
              </a>

            ))}

          </div>
        </>

      )}

    </section>

  );
}

export default FeaturedSection;
