import React, { createContext, useState, useEffect } from "react";

export const FevoriteContext = createContext();

const GetInitialFevorite = () => {
  const initialState = localStorage.getItem("product");
  return initialState ? JSON.parse(initialState) : [];
};

const GetInitialFevoriteProductData = () => {
  const initialProductData = localStorage.getItem("productData");
  return initialProductData ? JSON.parse(initialProductData) : [];
};
const GetInitialCart = () => {
  const initialState = localStorage.getItem("product_cart");
  return initialState ? JSON.parse(initialState) : [];
};

const GetInitialCartProductData = () => {
  const initialProductData = localStorage.getItem("productData_cart");
  return initialProductData ? JSON.parse(initialProductData) : [];
};

const FevoriteContextProvider = ({ children }) => {
  const [isFevorite, setIsFevorite] = useState(GetInitialFevorite);
  const [addFevoriteProduct, setAddFevoriteProduct] = useState(
    GetInitialFevoriteProductData
  );
  const [isAddToCart, setIsAddToCart] = useState(GetInitialCart);
  const [addCartProduct, setAddCartProduct] = useState(
    GetInitialCartProductData
  );

  const handleClickFevorite = (id) => {
    !isFevorite[id]
      ? setIsFevorite((prev) => {
          const fevoriteProduct = { ...prev, [id]: true };
          return fevoriteProduct;
        })
      : setIsFevorite((prev) => {
          const fevoriteProduct = { ...prev, [id]: false };
          return fevoriteProduct;
        });
  };

  const handleAddToFevorite = (data) => {
    const index = addFevoriteProduct.findIndex((item) => item.id === data.id);
    if (index === -1) {
      const dataToAdd = [...addFevoriteProduct, data];
      setAddFevoriteProduct(dataToAdd);
    } else if (addFevoriteProduct.length === 1) {
      setAddFevoriteProduct([]);
    } else if (addFevoriteProduct.length > 1) {
      const dataAfterUnfevorite = addFevoriteProduct.filter(
        (_, i) => i !== index
      );
      setAddFevoriteProduct(dataAfterUnfevorite);
    }
  };

  const handleClickAddToCart = (id) => {
    !isAddToCart[id]
      ? setIsAddToCart((prev) => ({ ...prev, [id]: true }))
      : setIsAddToCart((prev) => ({ ...prev, [id]: false }));
  };

  const handleAddToCart = (data) => {
    const index = addCartProduct.findIndex((item) => item.id === data.id);
    if (index === -1) {
      const dataToAdd = [...addCartProduct, data];
      setAddCartProduct(dataToAdd);
    } else if (addCartProduct.length === 1) {
      setAddCartProduct([]);
    } else if (addCartProduct.length > 1) {
      const dataAfterRemoveFromCart = addCartProduct.filter(
        (_, i) => i !== index
      );
      setAddCartProduct(dataAfterRemoveFromCart);
    }
  };

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(isFevorite));
    localStorage.setItem("productData", JSON.stringify(addFevoriteProduct));
  }, [isFevorite, addFevoriteProduct]);

  useEffect(() => {
    localStorage.setItem("product_cart", JSON.stringify(isAddToCart));
    localStorage.setItem("productData_cart", JSON.stringify(addCartProduct));
  }, [isAddToCart, addCartProduct]);

  return (
    <FevoriteContext.Provider
      value={{
        handleClickFevorite,
        handleClickAddToCart,
        handleAddToFevorite,
        handleAddToCart,
        addFevoriteProduct,
        isFevorite,
        isAddToCart,
        addCartProduct,
      }}
    >
      {children}
    </FevoriteContext.Provider>
  );
};

export default FevoriteContextProvider;
