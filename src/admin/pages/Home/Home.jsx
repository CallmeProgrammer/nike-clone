import { useState } from "react";
import Topbar from "../../../components/TopBar/TopBar";
import Navbar from "../../../components/Navbar/Navbar";
import PromoBar from "../../../components/PromoBar/PromoBar";
import Hero from "../../../components/Hero/Hero";
import CampaignSection from "../../../components/CampaignSection/CampaignSection";
import FeaturedSection from "../../../components/FeaturedSection/FeaturedSection";
import ShopBySport from "../../../components/ShopBySport/ShopBySport";
import SpotlightSection from "../../../components/SpotlightSection/SpotlightSection";
import Footer from "../../../components/Footer/Footer";
function Home() {

  const [showVideo, setShowVideo] = useState(false);

  const sports = [
  {
    title: "Running",
    image: "/images/Running.png"
  },
  {
    title: "Training",
    image: "/images/Training.png"
  },
  {
    title: "Sportswear",
    image: "/images/SportsWear.png"
  },
  {
    title: "Basketball",
    image: "/images/Basketball.png"
  },
  {
    title: "Football",
    image: "/images/Football.png"
  }

  
];
const featuredItems = [

  {
    image: "/images/MoreChoice.png",
    link: "/category/running"
  },

  {
    image: "/images/AtheletePicks.png",
    link: "/category/basketball"
  }

];

const trendingItems = [

  {
    image: "/images/trending1.png"
  },

  {
    image: "/images/trending2.png"
  },

  {
    image: "/images/trending3.png"
  }

];

  return (
    <>
      <Topbar />

      
      <Navbar sticky={true} />

      <PromoBar />

      <Hero
       /*videoSrc="/videos/hero.mp4"*/
        videoSrc="https://wcmpgyhrucsnpacoonre.supabase.co/storage/v1/object/public/videos/hero.mp4"
        showVideo={showVideo}
        setShowVideo={setShowVideo}
      />

      <CampaignSection
        setShowVideo={setShowVideo}
      />
     <FeaturedSection
      showFeatured={true}
      showTrending={true}
      featuredTitle="Featured"
      trendingTitle="Trending"
      featuredItems={featuredItems}
      trendingItems={trendingItems}
      />
      <ShopBySport title="Shop By Sport" items={sports} />
      <SpotlightSection />
      <Footer />
    </>
  );
}

export default Home;