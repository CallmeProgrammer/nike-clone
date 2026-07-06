import "./SpotlightSection.css";
import { Link } from "react-router-dom";
const spotlightItems = [
  { title: "Air Jordan 1", image: "/images/AirJordan1.png", link: "/category/airJordan1" },
  { title: "Air Force 1", image: "/images/AirForce1.png" , link: "/category/airForce1"},
  { title: "Graphic Tees", image: "/images/GraphicTees.png" , link: "/category/graphicTees"},
  { title: "Pegasus Premium", image: "/images/PegasusPremium.png" ,link: "/category/pegasusPremium"},
  { title: "Tights", image: "/images/Tights.png" ,link: "/category/womenTights"},
  { title: "Structure", image: "/images/Structure.png" ,link: "/category/running"},
  { title: "Jackets", image: "/images/Jackets.png" ,link: "/category/jackets"},
  { title: "Vomero 18", image: "/images/Vomero18.png",link: "/category/airForce1" },

  { title: "Dunk", image: "/images/Dunk.png" ,link: "/category/dunk"},
  { title: "Bottoms", image: "/images/Bottoms.png" ,link: "/category/womenTights"},
  { title: "P6000", image: "/images/P6000.png",link: "/category/p6000" },
  { title: "Caps", image: "/images/Caps.png",link: "/category/caps" },
  { title: "Air Max", image: "/images/AirMax.png" ,link: "/category/airForce1"},
  { title: "Sports Bras", image: "/images/SportsBras.png", link: "/category/sportsBras" },
  { title: "Court Vision", image: "/images/CourtVision.png", link: "/category/airForce1" },
  { title: "Shorts", image: "/images/Shorts.png" , link: "/category/shorts" },
];

function SpotlightSection() {
  return (
    <section className="spotlight-section">

      {/* NIKE APP BANNER */}

      <div className="nike-app-banner">

        <img
          src="/images/ItsBetterNikeBanner.png"
          alt="Nike App"
        />

      </div>

      {/* SPOTLIGHT IMAGE HEADER */}

      <div className="spotlight-header">

        <img
          src="/images/SpotlightBanner.png"
          alt="Spotlight"
          className="spotlight-banner"
        />

      </div>

      {/* GRID */}

      <div className="spotlight-grid">

  {spotlightItems.map((item, index) => (

    <Link
      to={item.link || "/"}
      className="spotlight-item"
      key={index}
    >

      <img
        src={item.image}
        alt={item.title}
      />

    </Link>

  ))}

</div>

    </section>
  );
}

export default SpotlightSection;