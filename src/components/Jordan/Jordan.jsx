import { useState } from "react";
import Navbar from "../../components/NavBar/Navbar";
import PromoBar from "../../components/PromoBar/PromoBar";
import Hero from "../../components/Hero/Hero";
import CampaignSection from "../../components/CampaignSection/CampaignSection";
import ShopBySport from "../../components/ShopBySport/ShopBySport";
import FeaturedSection from "../../components/FeaturedSection/FeaturedSection";
import BestSellerSection from "../../components/ProductCarouselSection/ProductCarouselSection";
import Footer from "../../components/Footer/Footer";

import "./Jordan.css";
import TopBar from "../TopBar/TopBar";

function Jordan() {
    const [showVideo, setShowVideo] = useState(false);
    const sports = [
      {
        title: "Running",
        image: "/images/Jordan/ShopByActivity/Running.png"
      },
      {
         title: "Training",
         image: "/images/Jordan/ShopByActivity/Training.png"
      },
      {
         title: "Sportswear",
         image: "/images/Jordan/ShopByActivity/Sportswear.png"
      },
      {
        title: "Basketball",
        image: "/images/Jordan/ShopByActivity/Basketball.png"
      }
    ];
    const featuredItems = [

  {
    image: "/images/Jordan/FeaturedSection/JordanWomen.png",
    link: "/category/airjordan1"
  },
  
  {
    image: "/images/Jordan/FeaturedSection/JordanShorts.png",
    link: "/category/shorts"
  },
   {
    image: "/images/Jordan/FeaturedSection/JordanWomen2.png",
    link: "/category/airjordan1"
  },
  {
    image: "/images/Jordan/FeaturedSection/OversizedFits.png",
    link: "/category/graphictees"
  }


];

    
    const BestSellers = [
  {
    title: "Air Jordan 4 Retro",
    description: "Women's Shoes",
    price: "19,495",
    image: "/images/Jordan/BestSellersection/BestSeller1.jpg"
  },
  {
    title: "Air Jordan 1 Low SE",
    description: "Men's Shoes",
    price: "11,495",
    image: "/images/Jordan/BestSellersection/BestSeller2.jpg"
  },
  {
    title: "Air Jordan 1 Mid",
    description: "Nike Air Jordan 1 Mid Shoes",
    price: "11,495",
    image: "/images/Jordan/BestSellersection/BestSeller3.jpg"
  },
  {
    title: "Nike Air Force 1 '07",
    description: "Kids' Shoe",
    price: "8195",
    image: "/images/Jordan/BestSellersection/BestSeller4.jpg"
  },
  {
    title: "Air Jordan 1 Retro High OG",
    description: "Men's Shoes",
    price: "16,995",
    image: "/images/Jordan/BestSellersection/BestSeller5.jpg"
  },
   {
    title: "Air Jordan 1 Mid SE",
    description: "Nike Air Jordan 1 Mid SE Men's Shoes",
    price: "12,295",
    image: "/images/Jordan/BestSellersection/BestSeller6.jpg"
  },
   {
    title: "Air Jordan 1 Low",
    description: "Men's Shoes",
    price: "8,995",
    image: "/images/Jordan/BestSellersection/BestSeller7.jpg"
  }
    ];
    const MoreToExplore = [
      {
        title: "Men",
        image: "/images/Jordan/MoreToExploreSection/Men.png"
      },
      {
         title: "Women",
         image: "/images/Jordan/MoreToExploreSection/Women.png"
      },
      {
         title: "Accessories",
         image: "/images/Jordan/MoreToExploreSection/Accessories.png"
      }
    ];

  return (
    <>

      <TopBar />
      <Navbar sticky={false} />

      <PromoBar />

      <section className="jordan-header">

      <h1>Jordan</h1>
      
      <div className="jordan-links">
        <a href="#">Shoes</a>
        <a href="#">Clothing</a>
        <a href="#">Accessories</a>
        <a href="#">Shop All</a>
      </div>

      </section>

      <Hero isImageHero={true} 
      imageSrc="/images/Jordan/HeroVideo/HeroBanner.png"/>

      <CampaignSection
      heading="HERITAGE ON YOUR FEET"
      description="Air Jordan 1"
       primaryButtonText = "Explore Jordan"
      secondaryButtonText="Shop" />
        
      <div className="section-spacing"></div>

      <FeaturedSection
      layout="jordan"
      showTrending={false}
      featuredTitle="Featured"
      featuredItems={featuredItems}/>

      <ShopBySport title="More To Explore" items={MoreToExplore} />

      <BestSellerSection title="Best Sellers" products={BestSellers} />

      <Footer />
    </>
  );
}

export default Jordan;