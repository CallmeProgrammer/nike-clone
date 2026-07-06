import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PromoBar from "../../components/PromoBar/PromoBar";
import Hero from "../../components/Hero/Hero";
import CampaignSection from "../../components/CampaignSection/CampaignSection";
import ShopBySport from "../../components/ShopBySport/ShopBySport";
import FeaturedSection from "../../components/FeaturedSection/FeaturedSection";
import BestSellerSection from "../../components/ProductCarouselSection/ProductCarouselSection";
import Footer from "../../components/Footer/Footer";

import "./Kids.css";
import TopBar from "../TopBar/TopBar";

function Kids() {
    const [showVideo, setShowVideo] = useState(false);
    const sports = [
      {
        title: "Running",
        image: "/images/Kids/ShopByActivity/Running.png"
      },
      {
         title: "Training",
         image: "/images/Kids/ShopByActivity/Training.png"
      },
      {
         title: "Sportswear",
         image: "/images/Kids/ShopByActivity/Sportswear.png"
      },
      {
        title: "Basketball",
        image: "/images/Kids/ShopByActivity/Basketball.png"
      }
    ];
    const featuredItems = [

  {
    image: "/images/Kids/FeaturedSection/ForWorkout.png"
  },

  {
    image: "/images/Kids/FeaturedSection/IconicStyles.png"
  }

];
    
    const BestSellers = [
  {
    title: "LeBron Witness IX EP",
    description: "Basketball Shoes",
    price: "6956",
    oldPrice: "8695",
    discount: "20",
    image: "/images/Kids/BestSellersection/BestSeller1.jpg"
  },
  {
    title: "Nike Winflo 11",
    description: "Kids' Road Running Shoes",
    price: "7826",
     oldPrice: "8695",
    discount: "10",
    image: "/images/Kids/BestSellersection/BestSeller2.jpg"
  },
  {
    title: "Nike Court Vision Low",
    description: "Kids' Shoes",
    price: "5196",
    oldPrice: "6495",
    discount: "20",
    image: "/images/Kids/BestSellersection/BestSeller3.jpg"
  },
  {
    title: "Nike Air Force 1 '07",
    description: "Kids' Shoe",
    price: "8195",
    image: "/images/Kids/BestSellersection/BestSeller4.jpg"
  },
  {
    title: "Nike Precision 7",
    description: "Kids' Basketball Shoes",
    price: "4556",
    oldPrice: "5695",
    discount: "20",
    image: "/images/Kids/BestSellersection/BestSeller5.jpg"
  },
   {
    title: "Nike Downshifter 14",
    description: "Kids' Basketball Shoes",
    price: "4895",
    image: "/images/Kids/BestSellersection/BestSeller6.jpg"
  },
   {
    title: "Nike Dunk Low Retro",
    description: "Kids' Shoes",
    price: "8295",
    image: "/images/Kids/BestSellersection/BestSeller7.jpg"
  },
   {
    title: "Nike Dunk Low Retro",
    description: "Kids' Shoes",
    price: "8295",
    image: "/images/Kids/BestSellersection/BestSeller8.jpg"
  }
  
];
const MoreToExplore = [
      {
        title: "Footwear",
        image: "/images/Kids/MoreToExploreSection/Footwear.png"
      },
      {
         title: "Apparel",
         image: "/images/Kids/MoreToExploreSection/Apparel.png"
      },
      {
         title: "Accessories",
         image: "/images/Kids/MoreToExploreSection/Accessories.png"
      }
    ];

  return (
    <>

      <TopBar />
      <Navbar sticky={false} />

      <PromoBar />

      <section className="kids-header">

        <h1>Kids</h1>

        <div className="kids-links">

          <a href="#">Shoes</a>

          <a href="#">Clothing</a>

          <a href="#">Accessories</a>

          <a href="#">Shop All</a>

        </div>

      </section>

      <Hero
       isImageHero={true}
        imageSrc="/images/Kids/HeroVideo/HeroBanner.png"
        
        />
        
      <div className="section-spacing"></div>

      <ShopBySport title="Shop By Activity" items={sports} />

       <CampaignSection
      heading="ELEVATE THEIR STYLE"
      description="Classic kicks for the next generation."
      secondaryButtonText="Shop" />

      <ShopBySport title="More To Explore" items={MoreToExplore} />

      <BestSellerSection title="Best Sellers" products={BestSellers} />

      <Footer />
    </>
  );
}

export default Kids;