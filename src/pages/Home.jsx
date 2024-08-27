import { useProduct } from "@/hooks/getData";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Header from "@/components/modules/Header";
import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/modules/Footer";
import { FevoriteContext } from "../../contexts/fevoriteContext";

function Home() {
  const {
    products,
    categoryForSearch,
    isloading,
    isError,
    getData,
    getDataByCategory,
  } = useProduct();
  const {
    handleClickFevorite,
    handleClickAddToCart,
    handleAddToFevorite,
    handleAddToCart,
    isFevorite,
    isAddToCart,
  } = useContext(FevoriteContext);

  const ads = [
    "/img/promotion-1.jpg",
    "/img/promotion-2.jpg",
    "/img/promotion-3.jpg",
  ];
  const hadleClickCategory = (category) => {
    getDataByCategory(category);
  };
  const hadleClickClearCategory = () => {
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="w-[full] flex flex-col justify-center items-center">
      {products && (
        <>
          <Header />
          {/* Campaign start */}
          <section className="w-full h-[200px] flex justify-center items-center bg-secondary ">
            <div className="w-[1440px] flex flex-row justify-between h-[130px]">
              <div className="h-full w-[120px] p-2 ">
                <Card className="h-[80%] bg-[url(/img/new-product.jpg)] bg-cover bg-center rounded-2xl"></Card>
                <CardDescription className="text-center py-2 font-semibold">
                  New Product
                </CardDescription>
              </div>
              <div className="h-full w-[120px] p-2">
                <Card className="h-[80%] bg-[url(/img/promotion-code.jpg)] bg-cover bg-center rounded-2xl"></Card>
                <CardDescription className="text-center py-2 font-semibold">
                  Promotion Code
                </CardDescription>
              </div>
              <div className="h-full w-[120px] p-2">
                <Card className="h-[80%] bg-[url(/img/lottery.jpg)] bg-cover bg-center rounded-2xl"></Card>
                <CardDescription className="text-center py-2 font-semibold">
                  Loterry
                </CardDescription>
              </div>
              <div className="h-full w-[120px] p-2">
                <Card className="h-[80%] bg-[url(/img/food-delivery.jpg)] bg-cover bg-center rounded-2xl"></Card>
                <CardDescription className="text-center py-2 font-semibold">
                  Food Delivery
                </CardDescription>
              </div>
              <div className="h-full w-[120px] p-2">
                <Card className="h-[80%] bg-[url(/img/new-arrival.jpg)] bg-cover bg-center rounded-2xl"></Card>
                <CardDescription className="text-center py-2 font-semibold">
                  New Arrival!
                </CardDescription>
              </div>
              <div className="h-full w-[120px] p-2">
                <Card className="h-[80%] bg-[url(/img/luxury-brand.jpg)] bg-cover bg-center rounded-2xl"></Card>
                <CardDescription className="text-center py-2 font-semibold">
                  Luxury Brands
                </CardDescription>
              </div>
              <div className="h-full w-[120px] p-2">
                <Card className="h-[80%] bg-[url(/img/discount-products.jpg)] bg-cover bg-center rounded-2xl"></Card>
                <CardDescription className="text-center py-2 font-semibold">
                  Discount Products
                </CardDescription>
              </div>
              <div className="h-full w-[120px] p-2">
                <Card className="h-[80%] bg-[url(/img/free-shipping.jpg)] bg-cover bg-center rounded-2xl"></Card>
                <CardDescription className="text-center py-2 font-semibold">
                  Free Shipping
                </CardDescription>
              </div>
            </div>
          </section>
          {/* Campaign end */}
          {/* product category start */}
          <section className="w-full max-w-[1440px] h-[300px] mt-6">
            <h1 className="font-semibold text-2xl pb-2">Product Categories</h1>
            <hr />
            <div className="grid grid-cols-4 gap-2 mt-4 ">
              <Card className="h-[100px] flex flex-row gap-2 ">
                <img src="/img/product-menCloth.jpg" className="h-full " />
                <div className="flex justify-center h-full items-center w-full">
                  <p>Product Categories</p>
                </div>
              </Card>
              <Card className="h-[100px] flex flex-row gap-2 ">
                <img src="/img/product-womanCloth.jpg" className="h-full " />
                <div className="flex justify-center h-full items-center w-full">
                  <p>Product Categories</p>
                </div>
              </Card>
              <Card className="h-[100px] flex flex-row gap-2 ">
                <img src="/img/product-kidCloth.jpg" className="h-full " />
                <div className="flex justify-center h-full items-center w-full">
                  <p>Product Categories</p>
                </div>
              </Card>
              <Card className="h-[100px] flex flex-row gap-2 ">
                <img src="/img/product-homedeco.jpg" className="h-full " />
                <div className="flex justify-center h-full items-center w-full">
                  <p>Product Categories</p>
                </div>
              </Card>
              <Card className="h-[100px] flex flex-row gap-2 ">
                <img src="/img/product-phone.jpg" className="h-full " />
                <div className="flex justify-center h-full items-center w-full">
                  <p>Product Categories</p>
                </div>
              </Card>
              <Card className="h-[100px] flex flex-row gap-2 ">
                <img src="/img/product-skincare.jpg" className="h-full " />
                <div className="flex justify-center h-full items-center w-full">
                  <p>Product Categories</p>
                </div>
              </Card>
              <Card className="h-[100px] flex flex-row gap-2 ">
                <img src="/img/product-jewery.jpg" className="h-full " />
                <div className="flex justify-center h-full items-center w-full">
                  <p>Product Categories</p>
                </div>
              </Card>
              <Card className="h-[100px] flex flex-row gap-2 ">
                <img src="/img/product-computer.jpg" className="h-full " />
                <div className="flex justify-center h-full items-center w-full">
                  <p>Product Categories</p>
                </div>
              </Card>
            </div>
          </section>
          {/* product category end */}
          {/* Ads start*/}
          <section className="w-[1440px] h-[400px] flex flex-row gap-2 mt-6">
            <Card className="w-[70%] h-full object-cover overflow-hidden flex justify-center items-center">
              <Carousel plugins={[Autoplay({ delay: 3000 })]}>
                <CarouselContent>
                  {ads.map((img, index) => (
                    <CarouselItem key={index}>
                      <img src={img} className="h-full" />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </Card>
            <div className="w-[30%] flex flex-col gap-2">
              <Card className="w-full h-[50%] overflow-hidden flex items-center">
                <img src="/img/ads-1.jpg" className="h-full " />
              </Card>
              <Card className="w-full h-[50%] overflow-hidden flex items-center">
                <img src="/img/ads-2.jpg" className="h-full" />
              </Card>
            </div>
          </section>
          {/* Ads end */}
          {/* Product Card Start */}
          <section className="w-[95%] max-w-[1440px] py-[10] mt-9">
            {categoryForSearch === null ? (
              <h1 className="font-semibold text-2xl pb-2">
                Today pick for you
              </h1>
            ) : (
              <h1 className="w-auto font-semibold text-2xl pb-2 relative">
                Category : {categoryForSearch}
                <span
                  className="text-gray-400 font-extralight hover:cursor-pointer hover:text-red-700"
                  onClick={() => hadleClickClearCategory()}
                >
                  {" "}
                  clear{" "}
                </span>
              </h1>
            )}

            <hr />
            <div className="flex flex-col justify-between min-h-[80vh]">
              <div className="flex flex-wrap gap-[1rem] justify-center mt-4 ">
                {products.map((product, index) => {
                  return (
                    <Card
                      key={product.id}
                      className="flex flex-col w-[200px] h-[300px] gap-[1rem] "
                    >
                      <div className="w-full h-[40%] ">
                        <img
                          src={product.image}
                          className="size-full object-contain object-center"
                        />
                      </div>
                      <div className="w-full h-[60%] flex flex-col justify-between px-[1rem] pb-[1rem]">
                        <CardTitle className="font-bold text-sm line-clamp-2 overflow-hidden h-[2.5rem] hover:underline">
                          <Link
                            to={`/products/${product.id}`}
                            className="size-full text-left"
                          >
                            {product.title}
                          </Link>
                        </CardTitle>
                        <CardTitle className="text-[1rem] ">
                          <Badge
                            onClick={() => hadleClickCategory(product.category)}
                            className="hover:cursor-pointer"
                          >
                            {product.category}
                          </Badge>
                        </CardTitle>
                        <div className="flex w-full justify-between items-center h-[1.5rem]">
                          <p className="font-semibold">
                            $ {Math.round(product.price)}
                          </p>
                          <div className="w-[50%] h-full flex justify-end">
                            {isFevorite[product.id] ? (
                              <button
                                onClick={() => {
                                  handleClickFevorite(product.id);
                                  handleAddToFevorite(product);
                                }}
                              >
                                <img
                                  src="/img/heart-solid.svg"
                                  className="h-full"
                                />
                              </button>
                            ) : (
                              <button
                                onClick={() => {
                                  handleClickFevorite(product.id);
                                  handleAddToFevorite(product);
                                }}
                              >
                                <img src="/img/heart.svg" className="h-full" />
                              </button>
                            )}
                            {isAddToCart[product.id] ? (
                              <button
                                onClick={() => {
                                  handleClickAddToCart(product.id);
                                  handleAddToCart(product);
                                }}
                              >
                                <img
                                  src="/img/cart-check.svg"
                                  className="h-full"
                                />
                              </button>
                            ) : (
                              <button
                                onClick={() => {
                                  handleClickAddToCart(product.id);
                                  handleAddToCart(product);
                                }}
                              >
                                <img
                                  src="/img/cart-plus.svg"
                                  className="h-full"
                                />
                              </button>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <img src="/img/star.svg" className="h-[1rem]" />
                          Rating : {product.rating.rate} ({product.rating.count}
                          )
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
              {/* Pagination Start */}
              <Pagination className="my-6">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="/" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="/">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="/">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="/" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
              {/* Pagination End*/}
            </div>
          </section>
          <Footer />
        </>
      )}
      {/* Product Card end  */}
    </main>
  );
}
export default Home;
