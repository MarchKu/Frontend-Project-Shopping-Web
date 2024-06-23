import { useProduct } from "@/hooks/getData";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

function Home() {
  const products = useProduct();
  const ads = [
    "./src/img/promotion-1.jpg",
    "./src/img/promotion-2.jpg",
    "./src/img/promotion-3.jpg",
  ];

  return (
    <main className="w-[full] flex flex-col justify-center items-center">
      <Header category={products} />
      {/* Campaign start */}
      <section className="w-full h-[200px] flex justify-center items-center bg-secondary ">
        <div className="w-[1440px] flex flex-row justify-between h-[130px]">
          <div className="h-full w-[120px] p-2 ">
            <Card className="h-[80%] bg-[url(./src/img/new-product.jpg)] bg-cover bg-center rounded-2xl"></Card>
            <CardDescription className="text-center py-2 font-semibold">
              New Product
            </CardDescription>
          </div>
          <div className="h-full w-[120px] p-2">
            <Card className="h-[80%] bg-[url(./src/img/promotion-code.jpg)] bg-cover bg-center rounded-2xl"></Card>
            <CardDescription className="text-center py-2 font-semibold">
              Promotion Code
            </CardDescription>
          </div>
          <div className="h-full w-[120px] p-2">
            <Card className="h-[80%] bg-[url(./src/img/lottery.jpg)] bg-cover bg-center rounded-2xl"></Card>
            <CardDescription className="text-center py-2 font-semibold">
              Loterry
            </CardDescription>
          </div>
          <div className="h-full w-[120px] p-2">
            <Card className="h-[80%] bg-[url(./src/img/food-delivery.jpg)] bg-cover bg-center rounded-2xl"></Card>
            <CardDescription className="text-center py-2 font-semibold">
              Food Delivery
            </CardDescription>
          </div>
          <div className="h-full w-[120px] p-2">
            <Card className="h-[80%] bg-[url(./src/img/new-arrival.jpg)] bg-cover bg-center rounded-2xl"></Card>
            <CardDescription className="text-center py-2 font-semibold">
              New Arrival!
            </CardDescription>
          </div>
          <div className="h-full w-[120px] p-2">
            <Card className="h-[80%] bg-[url(./src/img/luxury-brand.jpg)] bg-cover bg-center rounded-2xl"></Card>
            <CardDescription className="text-center py-2 font-semibold">
              Luxury Brands
            </CardDescription>
          </div>
          <div className="h-full w-[120px] p-2">
            <Card className="h-[80%] bg-[url(./src/img/discount-products.jpg)] bg-cover bg-center rounded-2xl"></Card>
            <CardDescription className="text-center py-2 font-semibold">
              Discount Products
            </CardDescription>
          </div>
          <div className="h-full w-[120px] p-2">
            <Card className="h-[80%] bg-[url(./src/img/free-shipping.jpg)] bg-cover bg-center rounded-2xl"></Card>
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
            <img src="./src/img/product-menCloth.jpg" className="h-full "/>
            <div className="flex justify-center h-full items-center w-full">
              <p>Product Categories</p>
            </div>
          </Card>
          <Card className="h-[100px] flex flex-row gap-2 ">
            <img src="./src/img/product-womanCloth.jpg" className="h-full "/>
            <div className="flex justify-center h-full items-center w-full">
              <p>Product Categories</p>
            </div>
          </Card>
          <Card className="h-[100px] flex flex-row gap-2 ">
            <img src="./src/img/product-kidCloth.jpg" className="h-full "/>
            <div className="flex justify-center h-full items-center w-full">
              <p>Product Categories</p>
            </div>
          </Card>
          <Card className="h-[100px] flex flex-row gap-2 ">
            <img src="./src/img/product-homedeco.jpg" className="h-full "/>
            <div className="flex justify-center h-full items-center w-full">
              <p>Product Categories</p>
            </div>
          </Card>
          <Card className="h-[100px] flex flex-row gap-2 ">
            <img src="./src/img/product-phone.jpg" className="h-full "/>
            <div className="flex justify-center h-full items-center w-full">
              <p>Product Categories</p>
            </div>
          </Card>
          <Card className="h-[100px] flex flex-row gap-2 ">
            <img src="./src/img/product-skincare.jpg" className="h-full "/>
            <div className="flex justify-center h-full items-center w-full">
              <p>Product Categories</p>
            </div>
          </Card>
          <Card className="h-[100px] flex flex-row gap-2 ">
            <img src="./src/img/product-jewery.jpg" className="h-full "/>
            <div className="flex justify-center h-full items-center w-full">
              <p>Product Categories</p>
            </div>
          </Card> 
          <Card className="h-[100px] flex flex-row gap-2 ">
            <img src="./src/img/product-computer.jpg" className="h-full "/>
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
        <div className="w-[30%] flex flex-col just gap-2">
          <Card className="w-full h-[50%] overflow-hidden flex items-center">
            <img src="./src/img/ads-1.jpg" className="h-full " />
          </Card>
          <Card className="w-full h-[50%] overflow-hidden flex items-center">
            <img src="./src/img/ads-2.jpg" className="h-full" />
          </Card>
        </div>
      </section>
      {/* Ads end */}
      {/* Product Card Start */}
      <section className="w-[95%] max-w-[1440px] py-[10] mt-9">
        <h1 className="font-semibold text-2xl pb-2">Today pick for you</h1>
        <hr />
        <div className="flex flex-wrap gap-[1rem] justify-center mt-4">
          {products.map((product) => {
            return (
              <Card
                key={product.id}
                className="flex flex-col justify-between w-[200px] h-[300px] "
              >
                <CardHeader className="w-full h-[60%] px-[20%]">
                  <img src={product.image} className="size-full" />
                </CardHeader>
                <CardTitle className="font-bold text-sm line-clamp-2 px-[0.5rem] h-[2.5rem] overflow-hidden">
                  {product.title}
                </CardTitle>
                <CardTitle className="text-[1rem] p-[0.5rem] ">
                  <Badge className="">{product.category}</Badge>
                </CardTitle>
                <CardFooter className="flex justify-between px-[0.5rem] text-sm">
                  ${product.price}
                  <div className="flex items-center gap-1">
                    <img src="./src/img/star.svg" className="h-[1rem]" />
                    Rating : {product.rating.rate} ({product.rating.count})
                  </div>
                </CardFooter>
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
      </section>
      {/* Product Card end  */}
    </main>
  );
}
export default Home;
