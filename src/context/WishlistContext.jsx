import {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";

const WishlistContext =
  createContext();

export const WishlistProvider = ({
  children
}) => {

  const [wishlist,
    setWishlist] =
    useState(() => {

      const savedWishlist =
        localStorage.getItem(
          "wishlist"
        );

      return savedWishlist
        ? JSON.parse(
            savedWishlist
          )
        : [];

    });

  useEffect(() => {

    localStorage.setItem(
      "wishlist",
      JSON.stringify(
        wishlist
      )
    );

  }, [wishlist]);

  const toggleWishlist =
    (product) => {

      setWishlist(prev => {

        const exists =
          prev.find(
            item =>
              item.id ===
              product.id
          );

        if (exists) {

          return prev.filter(
            item =>
              item.id !==
              product.id
          );

        }

        return [
          ...prev,
          product
        ];

      });

    };

  const removeFromWishlist =
    (id) => {

      setWishlist(prev =>
        prev.filter(
          item =>
            item.id !== id
        )
      );

    };

  const clearWishlist =
    () => {

      setWishlist([]);

    };

  const wishlistCount =
    wishlist.length;

  return (

    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistCount,
        toggleWishlist,
        removeFromWishlist,
        clearWishlist
      }}
    >

      {children}

    </WishlistContext.Provider>

  );

};

export const useWishlist =
  () =>
    useContext(
      WishlistContext
    );