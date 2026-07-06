import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PromoBar from "../../components/PromoBar/PromoBar";
import Hero from "../../components/Hero/Hero";
import CampaignSection from "../../components/CampaignSection/CampaignSection";
import ShopBySport from "../../components/ShopBySport/ShopBySport";
import FeaturedSection from "../../components/FeaturedSection/FeaturedSection";
import BestSellerSection from "../../components/ProductCarouselSection/ProductCarouselSection";
import Footer from "../../components/Footer/Footer";

import "./Men.css";
import TopBar from "../TopBar/TopBar";

function Men() {
    const [showVideo, setShowVideo] = useState(false);
    const sports = [
      {
        title: "Running",
        image: "/images/Men/ShopByActivity/Running.png"
      },
      {
         title: "Training",
         image: "/images/Men/ShopByActivity/Training.png"
      },
      {
         title: "Sportswear",
         image: "/images/Men/ShopByActivity/Sportswear.png"
      },
      {
        title: "Basketball",
        image: "/images/Men/ShopByActivity/Basketball.png"
      }
    ];
    const featuredItems = [

  {
    image: "/images/Men/FeaturedSection/ForWorkout.png"
  },

  {
    image: "/images/Men/FeaturedSection/IconicStyles.png"
  }

];
    
    const BestSellers = [
  {
    title: "LeBron Witness IX EP",
    description: "Basketball Shoes",
    price: "6956",
    oldPrice: "8695",
    discount: "20",
    image: "/images/Men/BestSellersection/BestSeller1.jpg"
  },
  {
    title: "Nike Winflo 11",
    description: "Men's Road Running Shoes",
    price: "7826",
     oldPrice: "8695",
    discount: "10",
    image: "/images/Men/BestSellersection/BestSeller2.jpg"
  },
  {
    title: "Nike Court Vision Low",
    description: "Men's Shoes",
    price: "5196",
    oldPrice: "6495",
    discount: "20",
    image: "/images/Men/BestSellersection/BestSeller3.jpg"
  },
  {
    title: "Nike Air Force 1 '07",
    description: "Men's Shoe",
    price: "8195",
    image: "/images/Men/BestSellersection/BestSeller4.jpg"
  },
  {
    title: "Nike Precision 7",
    description: "Men's Basketball Shoes",
    price: "4556",
    oldPrice: "5695",
    discount: "20",
    image: "/images/Men/BestSellersection/BestSeller5.jpg"
  },
   {
    title: "Nike Downshifter 14",
    description: "Basketball Shoes",
    price: "4895",
    image: "/images/Men/BestSellersection/BestSeller6.jpg"
  },
   {
    title: "Nike Dunk Low Retro",
    description: "Men's Shoes",
    price: "8295",
    image: "/images/Men/BestSellersection/BestSeller7.jpg"
  },
   {
    title: "Nike Dunk Low Retro",
    description: "Men's Shoes",
    price: "8295",
    image: "/images/Men/BestSellersection/BestSeller8.jpg"
  }
  
];
const MoreToExplore = [
      {
        title: "Footwear",
        image: "/images/Men/MoreToExploreSection/Footwear.png"
      },
      {
         title: "Apparel",
         image: "/images/Men/MoreToExploreSection/Apparel.png"
      },
      {
         title: "Accessories",
         image: "/images/Men/MoreToExploreSection/Accessories.png"
      }
    ];

  return (
    <>

      <TopBar />
      <Navbar sticky={false} />

      <PromoBar />

      <section className="men-header">

        <h1>Men</h1>

        <div className="men-links">

          <a href="#">Shoes</a>

          <a href="#">Clothing</a>

          <a href="#">Accessories</a>

          <a href="#">Shop All</a>

        </div>

      </section>

      <Hero
      /*videoSrc="/videos/Men/HeroVideo/Hero.mp4"*/
      videoSrc="https://wcmpgyhrucsnpacoonre.supabase.co/storage/v1/object/public/videos/Men/HeroVideo/Hero.mp4"
      showVideo={showVideo}
      setShowVideo={setShowVideo}
      showOverlay={true}
      subtitle="Pegasus 42"
      title="FULL HORSEPOWER"
      description="Same workhorse. New wings. Pegasus 42. Feel the power of full-length, curved Air Zoom."
      buttonText="Shop"
      />
      <div className="section-spacing"></div>

      <ShopBySport title="Shop By Activity" items={sports} />

      <FeaturedSection
      showFeatured={true}
      showTrending={false}
      featuredTitle="Featured"
      featuredItems={featuredItems}
      />

      <BestSellerSection title="Best Sellers" products={BestSellers} />

      <ShopBySport title="More To Explore" items={MoreToExplore} />
     

      <Footer />
    </>
  );
}

export default Men;