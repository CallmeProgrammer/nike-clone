import * as XLSX from "xlsx";
import { supabase } from "./services/supabase";

export async function importProducts() {
  try {
    const response = await fetch("/import/products.xlsx");

    if (!response.ok) {
      alert("products.xlsx not found in public/import/");
      return;
    }

    const arrayBuffer = await response.arrayBuffer();

    const workbook = XLSX.read(arrayBuffer, {
      type: "array",
    });

    const sheet =
      workbook.Sheets[
        workbook.SheetNames[0]
      ];

    const rows =
      XLSX.utils.sheet_to_json(sheet, {
        defval: "",
      });

    console.log(`Found ${rows.length} products`);

    let inserted = 0;
    let updated = 0;
    let failed = 0;

    // Mapping Excel headers -> Filter Keys
    const keyMap = {
      Gender: "gender",
      gender: "gender",

      Size: "size",
      Sizes: "size",
      size: "size",

      ShopByPrice: "shopByPrice",
      shopByPrice: "shopByPrice",

      Brand: "brand",
      brand: "brand",

      Discount: "discount",
      discount: "discount",

      ProductLabel: "productLabel",
      productLabel: "productLabel",

      LaunchedIn: "launchedIn",
      launchedIn: "launchedIn",

      Colour: "colour",
      colour: "colour",

      Collections: "collections",
      collections: "collections",

      Fit: "fit",
      fit: "fit",

      Closure: "closure",
      closure: "closure",

      Features: "features",
      features: "features",

      Sports: "sports",
      sports: "sports",

      PackSize: "packSize",
      packSize: "packSize",

      Material: "material",
      material: "material",

      Technology: "technology",
      technology: "technology",

      Benefits: "benefits",
      benefits: "benefits",

      Depth: "depth",
      depth: "depth",

      Athletes: "athletes",
      athletes: "athletes",

      ShoeHeight: "shoeHeight",
      shoeHeight: "shoeHeight",

      SizeRange: "sizeRange",
      sizeRange: "sizeRange",

      KidsAge: "kidsAge",
      kidsAge: "kidsAge",

      Sizing: "sizing",
      sizing: "sizing",

      SleeveLength: "sleeveLength",
      sleeveLength: "sleeveLength",

      NeckStyle: "neckStyle",
      neckStyle: "neckStyle",

      Length: "length",
      length: "length",

      RiseStyle: "riseStyle",
      riseStyle: "riseStyle",

      Waistband: "waistband",
      waistband: "waistband",

      LegStyle: "legStyle",
      legStyle: "legStyle",

      Pockets: "pockets",
      pockets: "pockets",

      InsulationType: "insulationType",
      insulationType: "insulationType",

      BestFor: "bestFor",
      bestFor: "bestFor",

      BackType: "backType",
      backType: "backType",

      CupType: "cupType",
      cupType: "cupType",

      Width: "width",
      width: "width"
    };

    for (const row of rows) {

      // Images
      const images = [];

      ["Image1", "Image2", "Image3", "Image4"].forEach((img) => {

        if (
          row[img] &&
          row[img].toString().trim() !== ""
        ) {
          images.push(
            row[img].toString().trim()
          );
        }

      });

      // Attributes
      const attributes = {};

      Object.keys(row).forEach((originalKey) => {

        if (
          [
            "Title",
            "Description",
            "Price",
            "Category",
            "Image1",
            "Image2",
            "Image3",
            "Image4",
          ].includes(originalKey)
        ) {
          return;
        }

        const value = row[originalKey];

        if (
          value === "" ||
          value === null ||
          value === undefined
        ) {
          return;
        }

        const key =
          keyMap[originalKey] ||
          originalKey;

        if (
          typeof value === "string" &&
          value.includes(",")
        ) {

          attributes[key] = value
            .split(",")
            .map((v) => v.trim())
            .filter(Boolean);

        } else {

          attributes[key] = [
            value.toString().trim()
          ];

        }

      });

      const product = {

        title: row.Title,

        description:
          row.Description,

        price: Number(
          row.Price
        ),

        category:
          row.Category
            ?.toLowerCase()
            .replace(/\s+/g, ""),

        images,

        attributes

      };

      const {
        data: existingProduct,
        error: checkError
      } = await supabase

        .from("products")

        .select("id")

        .eq("title", row.Title)

        .eq(
          "category",
          product.category
        )

        .maybeSingle();

      if (checkError) {

        console.error(checkError);

        failed++;

        continue;

      }

      if (existingProduct) {

        const { error } =
          await supabase

            .from("products")

            .update(product)

            .eq(
              "id",
              existingProduct.id
            );

        if (error) {

          console.error(error);

          failed++;

        } else {

          console.log(
            "Updated:",
            row.Title
          );

          updated++;

        }

      } else {

        const { error } =
          await supabase

            .from("products")

            .insert(product);

        if (error) {

          console.error(error);

          failed++;

        } else {

          console.log(
            "Inserted:",
            row.Title
          );

          inserted++;

        }

      }

    }

    alert(`✅ Import Complete!

Inserted : ${inserted}
Updated : ${updated}
Failed : ${failed}`);

  } catch (err) {

    console.error(err);

    alert("Import Failed");

  }
}