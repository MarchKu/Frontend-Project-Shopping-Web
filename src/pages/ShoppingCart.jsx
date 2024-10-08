import Header from "@/components/modules/Header";
import Footer from "@/components/modules/Footer";
import { useEffect, useState, useContext } from "react";
import { FevoriteContext } from "../../contexts/fevoriteContext";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
function ShoppingCart() {
  const {
    handleClickFevorite,
    handleClickAddToCart,
    handleAddToFevorite,
    handleAddToCart,
    addFevoriteProduct,
    isFevorite,
    isAddToCart,
    addCartProduct,
  } = useContext(FevoriteContext);
  return (
    <>
      <Header />
      <section className="w-full flex flex-col justify-center items-center">
        <div className="w-full max-w-[1440px] min-h-[85vh] flex flex-col py-[1.5rem] gap-[1.5rem]">
          <h1 className="text-[3rem] font-semibold">Your Product Cart</h1>
          <hr />
          {addCartProduct[0] ? (
            addCartProduct.map((product, index) => {
              return (
                <div className="w-full h-[300px] border flex flex-row justify-between p-[1rem]">
                  <div className="w-[30%]">
                    <img
                      src={product.image}
                      alt="Product image"
                      className="size-full object-contain"
                    />
                  </div>
                  <div className="w-[55%] px-[1rem] flex flex-col justify-between">
                    <div className="w-full flex flex-col gap-[1rem]">
                      <Link
                        to={`/products/${product.id}`}
                        className="text-[1.5rem] font-semibold hover:underline"
                      >
                        {product.title}
                      </Link>
                      <p className="line-clamp-3">
                        <span className="font-semibold ">Detail :</span>{" "}
                        {product.description}
                      </p>
                      <div className="w-auto flex flex-wrap">
                        <Badge className=" w-auto inline">
                          {product.category}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-[2rem]">
                      <span className="font-semibold">Price :</span>{" "}
                      {product.price} $
                    </p>
                  </div>
                  <div className="w-[15%] flex flex-col gap-[1rem] justify-center items-center ">
                    <Button
                      className="w-full"
                      onClick={() => {
                        handleClickAddToCart(product.id);
                        handleAddToCart(product);
                      }}
                    >
                      Remove from cart
                    </Button>
                    <Button className="w-full">Buy</Button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="w-full h-[70vh] flex flex-col justify-center items-center text-[1.5rem]">
              <p>There is no product in yout Cart</p>
              <p>
                Check out our{" "}
                <Link to="/" className=" underline font-semibold">
                  store
                </Link>
                .{" "}
              </p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
export default ShoppingCart;
