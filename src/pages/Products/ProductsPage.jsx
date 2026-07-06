import { useState } from "react";
import { useParams } from "react-router-dom";

import Topbar from "../../components/TopBar/TopBar";
import Navbar from "../../components/Navbar/Navbar";
import PromoBar from "../../components/PromoBar/PromoBar";

import FiltersSidebar from "../../components/FiltersSidebar/FiltersSidebar";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

import { categoryConfigs } from "../../config/categoryConfigs";

import "./ProductsPage.css";

function ProductsPage() {

  const { category } = useParams();
  /*
  const normalizedCategory =
    category?.toLowerCase();
  */

  const normalizedCategory = category ? category.toLowerCase() : "all";

  const [productCount, setProductCount] =
    useState(0);

  const [selectedFilters, setSelectedFilters] =
    useState({});

  const [showFilters, setShowFilters] =
    useState(true);

  const [sortBy, setSortBy] =
    useState("featured");

    /*
  const config =
    categoryConfigs[
      normalizedCategory
    ];

  if (!config) {

    return (

      <h1
        style={{
          padding: "100px"
        }}
      >

        Category not found

      </h1>

    );

  }
    */
   const config = normalizedCategory === "all"
    ? {
        title: "Shop"
      }
    : categoryConfigs[
        normalizedCategory
      ];
      
      if (!config) {
        return (
        <h1
        style={{
        padding: "100px"
      }}
      >
      Category not found
      </h1>
      );
}

  return (

    <>

      <Topbar />

      <Navbar sticky={false} />

      <PromoBar />

      <div className="products-page">

        <div className="products-header">

          <h1>

            {config.title} ({productCount})

          </h1>

          <div className="header-actions">

            <span
              className="header-btn"
              onClick={() =>
                setShowFilters(
                  !showFilters
                )
              }
            >

              {
                showFilters
                  ? "Hide Filters"
                  : "Show Filters"
              }

            </span>

            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value
                )
              }
            >

              <option value="featured">
                Featured
              </option>

              <option value="newest">
                Newest
              </option>

              <option value="priceLow">
                Price: Low-High
              </option>

              <option value="priceHigh">
                Price: High-Low
              </option>

              <option value="nameAZ">
                Name: A-Z
              </option>

            </select>

          </div>

        </div>

        <div className="products-body">

          {

            showFilters &&

            <FiltersSidebar
              category={normalizedCategory}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />

          }

          <div className="products-content">

            <ProductGrid
              category={normalizedCategory}
              selectedFilters={selectedFilters}
              sortBy={sortBy}
              setProductCount={setProductCount}
            />

          </div>

        </div>

      </div>

    </>

  );

}

export default ProductsPage;