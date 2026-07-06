import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PromoBar from "../../components/PromoBar/PromoBar";
import Hero from "../../components/Hero/Hero";
import CampaignSection from "../../components/CampaignSection/CampaignSection";
import ShopBySport from "../../components/ShopBySport/ShopBySport";
import FeaturedSection from "../../components/FeaturedSection/FeaturedSection";
import BestSellerSection from "../../components/ProductCarouselSection/ProductCarouselSection";
import Footer from "../../components/Footer/Footer";

import "./Women.css";
import TopBar from "../TopBar/TopBar";

function Women() {
    const [showVideo, setShowVideo] = useState(false);
    const sports = [
      {
        title: "Running",
        image: "/images/Women/ShopByActivity/Running.png"
      },
      {
         title: "Training",
         image: "/images/Women/ShopByActivity/Training.png"
      },
      {
         title: "Sportswear",
         image: "/images/Women/ShopByActivity/Sportswear.png"
      },
      {
        title: "Basketball",
        image: "/images/Women/ShopByActivity/Basketball.png"
      }
    ];
    
    const BestSellers = [
  {
    title: "Nike Journey Run",
    description: "Women's Road Running Shoes",
    price: "6796",
    oldPrice: "8695",
    discount: "20",
    image: "/images/Women/BestSellersection/BestSeller1.jpg"
  },
  {
    title: "Nike Structure 26",
    description: "Women's Road Running Shoes",
    price: "11895",
    image: "/images/Women/BestSellersection/BestSeller2.jpg"
  },
  {
    title: "Nike Revolution 8",
    description: "Revolution 8 Women's Road Running Shoes",
    price: "3866",
    oldPrice: "4295",
    discount: "10",
    image: "/images/Women/BestSellersection/BestSeller3.jpg"
  },
  {
    title: "Nike Run Defy",
    description: "Women's Road Running Shoes",
    price: "8195",
    image: "/images/Women/BestSellersection/BestSeller4.jpg"
  },
  {
    title: "Nike Air Superfly Moc",
    description: "Women's Shoe",
    price: "8695",
    image: "/images/Women/BestSellersection/BestSeller5.jpg"
  },
   {
    title: "NikeCourt Vintage Premium",
    description: "Women's Shoe",
    price: "5036",
    oldPrice: "6295",
    discount: "20",
    image: "/images/Women/BestSellersection/BestSeller6.jpg"
  },
   {
    title: "Nike Metro Tek",
    description: "Women's Shoes",
    price: "5196",
    oldPrice: "6495",
    discount: "20",
    image: "/images/Women/BestSellersection/BestSeller7.jpg"
  },
   {
    title: "Nike Quest 6",
    description: "Quest 6 Women's Road Running Shoes",
    price: "5676",
    oldPrice: "7095",
    discount: "20",
    image: "/images/Women/BestSellersection/BestSeller8.jpg"
  }
  
    ];

    const MoreToExplore = [
      {
        title: "Footwear",
        image: "/images/Women/MoreToExploreSection/Footwear.png"
      },
      {
         title: "Apparel",
         image: "/images/Women/MoreToExploreSection/Apparel.png"
      },
      {
         title: "Accessories",
         image: "/images/Women/MoreToExploreSection/Accessories.png"
      }
    ];

  return (
    <>

      <TopBar />
      <Navbar sticky={false} />

      <PromoBar />

      <section className="women-header">

        <h1>Women</h1>

        <div className="women-links">

          <a href="#">Shoes</a>

          <a href="#">Clothing</a>

          <a href="#">Accessories</a>

          <a href="#">Shop All</a>

        </div>

      </section>

      <Hero
      /*videoSrc="/videos/Women/HeroVideo/Hero.mp4"*/
      videoSrc="https://wcmpgyhrucsnpacoonre.supabase.co/storage/v1/object/public/videos/Women/HeroVideo/Hero.mp4"
      showVideo={showVideo}
      setShowVideo={setShowVideo}
      showOverlay={false}
      subtitle="Pegasus 42"
      title="FULL HORSEPOWER"
      description="Same workhorse. New wings. Pegasus 42. Feel the power of full-length, curved Air Zoom."
      buttonText="Shop"
      />
      <div className="section-spacing"></div>

      <ShopBySport title="Shop By Sport" items={sports} />

      <CampaignSection
      setShowVideo={setShowVideo}
      heading="RACE THE NIGHT AWAY"
      description="The After Dark Tour is back. Built for women, powered by Nike."
      primaryButtonText="Notify Me"
      secondaryButtonText="Watch ▶" />

      <BestSellerSection title="Best Sellers" products={BestSellers} />

      <ShopBySport title="More To Explore" items={MoreToExplore} />
     

      <Footer />
    </>
  );
}

export default Women;