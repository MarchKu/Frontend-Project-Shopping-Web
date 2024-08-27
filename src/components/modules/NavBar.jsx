import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useProduct } from "@/hooks/getData";
import { useEffect, useState, useContext } from "react";
import { FevoriteContext } from "../../../contexts/fevoriteContext";

function NavBar(props) {
  const productsCount = {};
  const {
    products,
    categoryForSearch,
    isLoading,
    isError,
    getData,
    getDataByCategory,
  } = useProduct();
  const { addFevoriteProduct, addCartProduct } = useContext(FevoriteContext);
  const [fevoriteProductCount, setFevoriteProductCount] = useState(0);
  const [cartProductCount, setCartProductCount] = useState(0);

  if (products) {
    products.forEach((name) => {
      productsCount[name.category]
        ? (productsCount[name.category] += 1)
        : (productsCount[name.category] = 1);
    });
  }

  const hadleClickCategory = (category) => {
    getDataByCategory(category);
  };

  useEffect(() => {
    setFevoriteProductCount(addFevoriteProduct.length);
    setCartProductCount(addCartProduct.length);
  }, [addFevoriteProduct, addCartProduct]);

  const ArrayOfProductsCount = Object.entries(productsCount);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="w-full h-[70px] flex justify-center bg-primary">
      <div className="w-[1440px] flex justify-between">
        <ToggleGroup type="single">
          <ToggleGroupItem className="bg-secondary">
            <DropdownMenu>
              <DropdownMenuTrigger className="w-[300px] flex justify-between ">
                Product categories <span className="text-[0.7rem]">▼</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[330px]">
                <DropdownMenuLabel className="flex justify-between w-full">
                  <p>Categories</p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {ArrayOfProductsCount.map((categoryDetail, index) => {
                  return (
                    <DropdownMenuItem key={index}>
                      <div className="flex justify-between w-full">
                        <span>{categoryDetail[0]}</span>
                        <span>Products : ({categoryDetail[1]})</span>
                      </div>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </ToggleGroupItem>
          <Link to="/">
            <ToggleGroupItem value="">Home</ToggleGroupItem>
          </Link>
          <Link to="/">
            <ToggleGroupItem value="">Shop</ToggleGroupItem>
          </Link>
          <Link to="/">
            <ToggleGroupItem value="">Detail</ToggleGroupItem>
          </Link>
          <Link to="/">
            <ToggleGroupItem value="">Orders</ToggleGroupItem>
          </Link>
          <Link to="/">
            <ToggleGroupItem value="">Contact</ToggleGroupItem>
          </Link>
        </ToggleGroup>
        <div className="w-auto h-full flex justify-center items-center py-[1rem] gap-[1rem]">
          <div className="h-full rounded-full overflow-hidden ">
            <img
              src="/img/profile.webp"
              alt="profile"
              className="size-full object-cover object-center"
            />
          </div>
          <p>kunakorn</p>
          <Link to="/fevorite" className=" content-center">
            <div className="relative h-[1.5rem]">
              <img src="/img/heart-black.svg" className="size-full z-10" />
              {fevoriteProductCount !== 0 && (
                <p className="size-[1rem] rounded-full absolute text-[0.8rem] bg-red-700 text-white font-semibold -top-2 -right-3 flex justify-center items-center z-0">
                  {fevoriteProductCount}
                </p>
              )}
            </div>
          </Link>

          <Link to="/ShoppingCart" className=" content-center">
            <div className="relative h-[1.5rem]">
              <img src="/img/cart.svg" className="size-full z-10" />
              {cartProductCount !== 0 && (
                <p className="size-[1rem] rounded-full absolute text-[0.8rem] bg-red-700 text-white font-semibold -top-2 -right-3 flex justify-center items-center z-0">
                  {cartProductCount}
                </p>
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
