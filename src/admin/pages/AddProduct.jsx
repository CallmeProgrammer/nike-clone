import { useState } from "react";

import { categoryConfigs }
from "../../config/categoryConfigs";

import { fieldDefinitions }
from "../../config/fieldDefinitions";

import { supabase }
from "../../services/supabase";

import { importProducts } from "../../importProducts";


const AddProduct = () => {

  const categories =
    Object.keys(categoryConfigs);

  const [selectedCategory,
    setSelectedCategory] =
    useState("");

  const [loading,
    setLoading] =
    useState(false);

  const [uploadingImages,
    setUploadingImages] =
    useState(false);

  const [productData,
    setProductData] =
    useState({

      title: "",

      description: "",

      price: "",

      images: [],

      availableSizes: [],

      attributes: {}

    });

  // INPUTS

  const handleInputChange = (
    e
  ) => {

    const {
      name,
      value
    } = e.target;

    setProductData((prev) => ({
      ...prev,
      [name]: value
    }));

  };

  // CHECKBOXES

  const handleCheckboxChange = (
    filterKey,
    option
  ) => {

    setProductData((prev) => {

      const currentValues =
        prev.attributes[
          filterKey
        ] || [];

      const alreadyExists =
        currentValues.includes(option);

      let updatedValues;

      if (alreadyExists) {

        updatedValues =
          currentValues.filter(
            (item) =>
              item !== option
          );

      } else {

        updatedValues = [
          ...currentValues,
          option
        ];

      }

      return {

        ...prev,

        attributes: {

          ...prev.attributes,

          [filterKey]:
            updatedValues

        }

      };

    });

  };

  // SIZE SELECTION

  const handleSizeSelection = (
    size
  ) => {

    setProductData((prev) => {

      const alreadySelected =
        prev.availableSizes.includes(
          size
        );

      let updatedSizes;

      if (alreadySelected) {

        updatedSizes =
          prev.availableSizes.filter(
            (s) => s !== size
          );

      } else {

        updatedSizes = [
          ...prev.availableSizes,
          size
        ];

      }

      return {

        ...prev,

        availableSizes:
          updatedSizes

      };

    });

  };

  // IMAGE UPLOAD

  const handleImageUpload =
    async (e) => {

      try {

        setUploadingImages(true);

        const files =
          Array.from(
            e.target.files
          );

        let uploadedUrls = [];

        for (const file of files) {

          const fileName =
            `${Date.now()}-${file.name}`;

          const {
            error
          } = await supabase
            .storage
            .from(
              "product-images"
            )
            .upload(
              fileName,
              file
            );

          if (error) {

            console.log(error);

            continue;

          }

          const {
            data
          } = supabase
            .storage
            .from(
              "product-images"
            )
            .getPublicUrl(
              fileName
            );

          uploadedUrls.push(
            data.publicUrl
          );

        }

        setProductData((prev) => ({

          ...prev,

          images: [
            ...prev.images,
            ...uploadedUrls
          ]

        }));

      } catch (err) {

        console.log(err);

      } finally {

        setUploadingImages(false);

      }

    };

  // SAVE PRODUCT

  const handleSaveProduct =
    async () => {

      try {

        setLoading(true);

        const productToInsert = {

          title:
            productData.title,

          description:
            productData.description,

          category:
            selectedCategory,

          price:
            Number(
              productData.price
            ),

          images:
            productData.images,

          attributes: {

            ...productData.attributes,

            sizes:
              productData.availableSizes

          }

        };

        const {
          error
        } = await supabase
          .from("products")
          .insert([
            productToInsert
          ]);

        if (error) {

          console.log(error);

          alert(
            "Failed To Save Product"
          );

          return;

        }

        alert(
          "Product Added Successfully"
        );

        setProductData({

          title: "",

          description: "",

          price: "",

          images: [],

          availableSizes: [],

          attributes: {}

        });

        setSelectedCategory("");

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);

      }

    };

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow">

        <h1 className="text-3xl font-bold mb-8">
          Add Product
        </h1>

        {/* TITLE */}

        <div className="mb-6">

          <label className="block mb-2 font-semibold">
            Product Title
          </label>

          <input
            type="text"
            name="title"
            value={productData.title}
            onChange={handleInputChange}
            placeholder="Enter Product Title"
            className="border p-3 rounded w-full"
          />

        </div>

        {/* DESCRIPTION */}

        <div className="mb-6">

          <label className="block mb-2 font-semibold">
            Description
          </label>

          <textarea
            name="description"
            value={productData.description}
            onChange={handleInputChange}
            placeholder="Enter Description"
            className="border p-3 rounded w-full h-32"
          />

        </div>

        {/* PRICE */}

        <div className="mb-6">

          <label className="block mb-2 font-semibold">
            Price
          </label>

          <div className="relative">

            <span className="absolute left-4 top-1/2 -translate-y-1/2">
              ₹
            </span>

            <input
              type="number"
              name="price"
              value={productData.price}
              onChange={handleInputChange}
              placeholder="Enter Price"
              className="border p-3 pl-8 rounded w-full"
            />

          </div>

        </div>

        {/* IMAGES */}

        <div className="mb-8">

          <label className="block mb-2 font-semibold">
            Upload Images
          </label>

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
          />

          {
            uploadingImages && (
              <p className="mt-2">
                Uploading...
              </p>
            )
          }

          <div className="flex flex-wrap gap-4 mt-4">

            {
              productData.images.map(
                (img, index) => (

                  <img
                    key={index}
                    src={img}
                    alt=""
                    className="w-28 h-28 object-cover rounded"
                  />

                ))
            }

          </div>

        </div>

        {/* CATEGORY */}

        <div className="mb-8">

          <label className="block mb-2 font-semibold">
            Category
          </label>

          <select
            className="border p-3 rounded w-full"
            value={selectedCategory}
            onChange={(e) =>
              setSelectedCategory(
                e.target.value
              )
            }
          >

            <option value="">
              Select Category
            </option>

            {
              categories.map((category) => (

                <option
                  key={category}
                  value={category}
                >
                  {
                    categoryConfigs[
                      category
                    ].title
                  }
                </option>

              ))
            }

          </select>

        </div>

        {/* SIZES */}

        <div className="mb-8">

          <h2 className="text-lg font-semibold mb-4">
            Available Sizes
          </h2>

          <div className="flex flex-wrap gap-4">

            {
              fieldDefinitions
                .size
                .options.map(
                  (size) => (

                    <label
                      key={size}
                      className="flex items-center gap-2 bg-gray-100 border px-4 py-2 rounded cursor-pointer"
                    >

                      <input
                        type="checkbox"

                        checked={
                          productData
                            .availableSizes
                            .includes(size)
                        }

                        onChange={() =>
                          handleSizeSelection(
                            size
                          )
                        }
                      />

                      {size}

                    </label>

                  ))
            }

          </div>

        </div>

        {/* FILTERS */}

        {
          selectedCategory && (

            <div className="space-y-6">

              {
                categoryConfigs[
                  selectedCategory
                ].filters.map(
                  (filterKey) => {

                  const field =
                    fieldDefinitions[
                      filterKey
                    ];

                  if (!field)
                    return null;

                  if (
                    filterKey ===
                    "size"
                  ) {
                    return null;
                  }

                  return (

                    <div
                      key={filterKey}
                      className="border rounded-lg p-5 bg-gray-50"
                    >

                      <h2 className="text-lg font-semibold mb-4">
                        {field.label}
                      </h2>

                      {
                        field.type ===
                        "checkbox" && (

                          <div className="flex flex-wrap gap-4">

                            {
                              field.options?.map(
                                (option) => (

                                  <label
                                    key={option}
                                    className="flex items-center gap-2 bg-white border px-4 py-2 rounded cursor-pointer"
                                  >

                                    <input
                                      type="checkbox"

                                      checked={
                                        productData
                                          .attributes[
                                            filterKey
                                          ]?.includes(
                                            option
                                          ) || false
                                      }

                                      onChange={() =>
                                        handleCheckboxChange(
                                          filterKey,
                                          option
                                        )
                                      }
                                    />

                                    <span>
                                      {option}
                                    </span>

                                  </label>

                                ))
                            }

                          </div>

                        )
                      }

                    </div>

                  );

                })
              }

            </div>

          )
        }

        {/* SAVE */}

        <button
          onClick={handleSaveProduct}

          disabled={
            loading ||
            uploadingImages
          }

          className="mt-8 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800"
        >

          {
            loading
              ? "Saving..."
              : "Save Product"
          }

        </button>
        <button onClick={importProducts}>
          Import Products
        </button>
      </div>

    </div>

  );
};

export default AddProduct;