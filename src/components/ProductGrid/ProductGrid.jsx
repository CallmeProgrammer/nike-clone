import { useEffect, useState } from "react";

import { supabase }
from "../../services/supabase";

import ProductCard
from "../ProductCard/ProductCard";

import "./ProductGrid.css";

function ProductGrid({
  category,
  selectedFilters,
  sortBy,
  setProductCount
}) {

  const [products, setProducts] =
    useState([]);

  useEffect(() => {

    fetchProducts();

  }, [
    category,
    selectedFilters,
    sortBy
  ]);

  const fetchProducts =
    async () => {

      /*
      const {
        data,
        error
      } = await supabase
        .from("products")
        .select("*")
        .eq("category", category);
        */
       let query = supabase.from("products").select("*");
       if (category && category !== "all") {
       query = query.eq( "category",category);}
       const { data, error } = await query;

      if (error) {

        console.log(error);
        return;

      }

      let filtered =
        data || [];

      // FILTERS

      Object.entries(
        selectedFilters
      ).forEach(

        ([key, values]) => {

          if (!values.length)
            return;

          filtered =
            filtered.filter(

              product =>

                values.some(

                  value =>

                    product.attributes?.[
                      key
                    ]?.includes(
                      value
                    )

                )

            );

        }

      );

      // SORTING

      switch (sortBy) {

        case "priceLow":

          filtered.sort(
            (a, b) =>
              Number(a.price) -
              Number(b.price)
          );

          break;

        case "priceHigh":

          filtered.sort(
            (a, b) =>
              Number(b.price) -
              Number(a.price)
          );

          break;

        case "nameAZ":

          filtered.sort(
            (a, b) =>
              a.title.localeCompare(
                b.title
              )
          );

          break;

        case "newest":

          filtered.sort(
            (a, b) =>
              new Date(
                b.created_at || 0
              ) -
              new Date(
                a.created_at || 0
              )
          );

          break;

        default:

          break;

      }

      setProducts(filtered);

      if (setProductCount) {

        setProductCount(
          filtered.length
        );

      }

    };

  return (

    <div className="products-grid">

      {

        products.map(product => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))

      }

    </div>

  );

}

export default ProductGrid;