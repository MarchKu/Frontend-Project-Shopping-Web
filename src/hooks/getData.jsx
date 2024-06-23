import axios from "axios";
import { useEffect, useState } from "react";

export const useProduct = () => {
  const [products, setProducts] = useState([]);
  const getData = async() => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setProducts(result.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return products; 
};
