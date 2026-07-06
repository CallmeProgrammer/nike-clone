import { useEffect, useState } from "react";
import Topbar from "../../components/TopBar/TopBar";
import Navbar from "../../components/Navbar/Navbar";
import PromoBar from "../../components/PromoBar/PromoBar";
import BestSellerSection from "../../components/ProductCarouselSection/ProductCarouselSection";
import { useParams } from "react-router-dom";

import { supabase } from "../../services/supabase";
import { useCart } from "../../context/CartContext";

import { Heart } from "lucide-react";
import Footer from "../../components/Footer/Footer";
import "./ProductDetails.css";
import { ChevronDown, ChevronUp } from "lucide-react";
function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedSize, setSelectedSize] =
    useState(null);

  const [selectedImage, setSelectedImage] =
    useState(0);

  const [recentProducts, setRecentProducts] =
    useState([]);

  const [openSections, setOpenSections] = useState({
  vendor: false,
  returns: false
});

const toggleSection = (section) => {

  setOpenSections(prev => ({
    ...prev,
    [section]: !prev[section]
  }));

};

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const { data, error } =
        await supabase
          .from("products")
          .select("*")
          .eq("id", id)
          .single();

      if (error) {
        console.log(error);
        return;
      }

      setProduct(data);

      const { data: relatedProducts } =
        await supabase
          .from("products")
          .select("*")
          .neq("id", id)
          .limit(6);

      setRecentProducts(
        relatedProducts || []
      );

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    addToCart(
      product,
      selectedSize
    );

    alert("Added To Bag");
  };

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

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
     <Topbar />

      
      <Navbar sticky={true} />

      <PromoBar />
      <div className="product-page">

        {/* LEFT */}

        <div className="product-gallery">

          <div className="thumbs">
            {product.images?.map(
              (image, index) => (
                <div
                  key={index}
                  className={`thumb ${
                    selectedImage === index
                      ? "active-thumb"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedImage(index)
                  }
                >
                  <img
                    src={image}
                    alt=""
                  />
                </div>
              )
            )}
          </div>

          <div className="main-image">
            <img
              src={
                product.images?.[
                  selectedImage
                ]
              }
              alt={product.title}
            />
          </div>

        </div>

        {/* RIGHT */}

        <div className="product-info">

          <div className="badge">
            Just In
          </div>

          <h1>
            {product.title}
          </h1>

          <p className="category">
            {product.description}
          </p>

          <h2>
            ₹{Number(product.price).toLocaleString("en-IN")}
          </h2>

          <p className="tax-text">
            Inclusive of all taxes
          </p>

          {/* COLOURS */}

          <div className="color-section">

            <p>
              Available Colours
            </p>

            <div className="color-grid">

              {product.images
                ?.slice(0, 4)
                .map(
                  (
                    image,
                    index
                  ) => (
                    <div
                      key={index}
                      className={`color-thumb ${
                        selectedImage ===
                        index
                          ? "active-color"
                          : ""
                      }`}
                      onClick={() =>
                        setSelectedImage(
                          index
                        )
                      }
                    >
                      <img
                        src={image}
                        alt=""
                      />
                    </div>
                  )
                )}

            </div>

          </div>

          {/* SIZE */}

          <div className="size-header">

            <h3>
              Select Size
            </h3>

            <span>
              Size Guide
            </span>

          </div>

          <div className="sizes-grid">

            {product.attributes?.size?.map(
              (size) => (
                <button
                  key={size}
                  className={
                    selectedSize === size
                      ? "size-btn active"
                      : "size-btn"
                  }
                  onClick={() =>
                    setSelectedSize(
                      size
                    )
                  }
                >
                  {size}
                </button>
              )
            )}

          </div>

          {/* BUTTONS */}

          <button
            className="add-to-bag-btn"
            onClick={
              handleAddToCart
            }
          >
            Add To Bag
          </button>

          <button
            className="fav-btn"
          >
            Favourite
            <Heart size={18} />
          </button>

          {/* DESCRIPTION */}

          <div className="product-description">

            <p>
              {product.description}
            </p>

            <ul>
              <li>
                Shown: Black / White
              </li>

              <li>
                Style: {product.id}
              </li>
            </ul>

          </div>

          {/* ACCORDIONS */}

          <div className="product-accordions">
            
          <div className="accordion-item">
            <div
            className="accordion-header"
            onClick={() => toggleSection("vendor")}
            >
              <span>Vendor Details</span>
              {
              openSections.vendor
              ? <ChevronUp size={20}/>
              : <ChevronDown size={20}/>
              }
            </div>
            {
            openSections.vendor &&
            <div className="accordion-content">

      <div className="detail-block">
        <span>Sold By</span>
        <p>Nykaa Fashion Ltd</p>
      </div>

      <div className="detail-block">
        <span>Country Of Origin</span>
        <p>Vietnam</p>
      </div>

      <div className="detail-block">
        <span>Name Of Manufacturer / Packer / Importer</span>
        <p>Nike</p>
      </div>

      <div className="detail-block">
        <span>Address Of Manufacturer / Packer / Importer</span>
        <p>
          Changshin Vietnam Co., Ltd.,
          Thanh Phu Vinh Cuu Dong Nai,
          Dong Nai, 760001089
        </p>
      </div>

    </div>

  }</div>

          </div>
          <div className="accordion-item">

  <div
    className="accordion-header"
    onClick={() => toggleSection("returns")}
  >

    <span>Return And Exchange Policy</span>

    {
      openSections.returns
        ? <ChevronUp size={20}/>
        : <ChevronDown size={20}/>
    }

  </div>

  {

    openSections.returns &&

    <div className="accordion-content">

      <p>

        This product is eligible for returns or replacement.
        Please initiate returns/replacements from the
        'My Orders' section within 14 days of delivery.
        Kindly ensure the product is in its original
        condition with all tags attached.

      </p>

    </div>

  }
</div>

        </div>

      </div>
      {/* YOU MIGHT ALSO LIKE */}
      
      <BestSellerSection title="YOU MIGHT ALSO LIKE" products={BestSellers} />

      <Footer />
    </>
  );
}

export default ProductDetails;