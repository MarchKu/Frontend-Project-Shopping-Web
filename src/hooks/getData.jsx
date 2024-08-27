import axios from "axios";
import { useEffect, useState } from "react";

export const useProduct = () => {
  const [categoryForSearch, setCategoryForSearch] = useState(null);
  const [products, setProducts] = useState(null);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const getData = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get("https://fakestoreapi.com/products");
      setProducts(result.data);
      setCategoryForSearch(null)
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  const getDataByID = async (id) => {
    try {
      setIsLoading(true);
      const result = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(result.data);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  const getDataByCategory = async (category) => {
    try {
      setIsLoading(true);
      const result = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      setProducts(result.data);
      setCategoryForSearch(category)
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  return { products,categoryForSearch, product , isLoading, isError, getData, getDataByID,getDataByCategory
  };
};
