import Header from "@/components/modules/Header";
import Footer from "@/components/modules/Footer";
import { useEffect, useState, useContext } from "react";
import { FevoriteContext } from "../../contexts/fevoriteContext";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function Fevorite() {
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
          <h1 className="text-[3rem] font-semibold">Fevorite Product</h1>
          <hr />
          {addFevoriteProduct[0] ? (
            addFevoriteProduct.map((product, index) => {
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
                        <span className="font-semibold">Detail :</span>{" "}
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
                        handleClickFevorite(product.id);
                        handleAddToFevorite(product);
                      }}
                    >
                      Unfevorite
                    </Button>
                    {isAddToCart[product.id] ? (
                      <Button className="w-full" variant="outline">
                        <Link to="/shoppingcart">Check out your cart</Link>
                      </Button>
                    ) : (
                      <Button
                        className="w-full"
                        onClick={() => {
                          handleClickAddToCart(product.id);
                          handleAddToCart(product);
                        }}
                      >
                        Add to cart
                      </Button>
                    )}

                    <Button className="w-full">Buy</Button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="w-full h-[70vh] flex flex-col justify-center items-center text-[1.5rem]">
              <p>There is no fevorite product</p>
              <p>
                Check out many our{" "}
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
export default Fevorite;
