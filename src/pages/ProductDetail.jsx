import { useParams } from "react-router-dom";
import Header from "@/components/modules/Header";
import { useProduct } from "@/hooks/getData";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Footer from "@/components/modules/Footer";
import SellerCard from "@/components/modules/Seller-card";

function ProductDetail() {
  const params = useParams();
  const { product, isLoading, isError, getDataByID } = useProduct();
  const [quantity, setQuantiry] = useState(1);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    if (params.productID) {
      getDataByID(params.productID);
    }
  }, []);
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <Header />
      {product && (
        <section className="w-full flex flex-col justify-start items-center px-[5%] gap-[1rem] my-[1.5rem]">
          <div className="w-full h-[60vh] max-w-[1440px] flex pt-[1.5rem] gap-[1.5rem] text-[1.25rem] border p-[1.5rem]">
            <div className="w-[50%] h-full">
              <img
                src={product.image}
                alt="Product image"
                className="size-full object-contain object-center"
              />
            </div>

            <div className="w-[50%] flex flex-col gap-[2rem] pt-[2rem]">
              <div className="w-full">
                <h1 className="font-bold text-[2rem]">{product.title}</h1>
                <div className="flex justify-between items-center">
                  <p className="flex items-center gap-[1rem]">
                    <img src="/img/star.svg" className="h-[1rem]" />
                    <span>Rating : {product.rating.rate}</span>
                    <span className="border-l-[1px] pl-[1rem]">
                      Review : {product.rating.count}
                    </span>
                  </p>
                  <p> Sold : {product.rating.count}</p>
                </div>
              </div>
              <hr />
              {price ? (
                <p className="text-[1.5rem]">{price}</p>
              ) : (
                <p className="text-[1.5rem]">{`${Math.round(
                  product.price
                )} - ${Math.round(product.price + 25)} $`}</p>
              )}
              <div className="w-full gap-[1rem] flex">
                <p className="text-[1.5rem] font-bold">Shipping</p>
                <div className="flex gap-[1rem]">
                  <Button
                    className="flex flex-col p-[1.5rem]"
                    variant="outline"
                  >
                    <p>Startdard : + 0 $ </p>
                    <p>(4-7 days)</p>
                  </Button>
                  <Button
                    className="flex flex-col p-[1.5rem]"
                    variant="outline"
                  >
                    <p>Express : + 5 $ </p>
                    <p>(3-4 days)</p>
                  </Button>
                </div>
              </div>
              <div className="flex gap-[2.4rem]">
                <p className="text-[1.5rem] font-bold">Option</p>
                <div className="flex gap-[1rem]">
                  <Button
                    className="flex flex-col p-[1.5rem]"
                    variant="outline"
                  >
                    <p>Option 1</p>
                    <p>+ 5 $</p>
                  </Button>
                  <Button
                    className="flex flex-col p-[1.5rem]"
                    variant="outline"
                  >
                    <p>Option 2 </p>
                    <p>+ 10 $</p>
                  </Button>
                  <Button
                    className="flex flex-col p-[1.5rem] "
                    variant="outline"
                  >
                    <p>Option 4 </p>
                    <p>+ 15 $</p>
                  </Button>
                  <Button
                    className="flex flex-col p-[1.5rem]"
                    variant="outline"
                  >
                    <p>Option 4 </p>
                    <p>+ 20 $</p>
                  </Button>
                </div>
              </div>

              <div className="w-full flex gap-[1.2rem]">
                <h3 className="text-[1.5rem] font-bold">Quantity</h3>
                <div className="flex">
                  <Button
                    variant="outline"
                    className="h-full"
                    onClick={() => {
                      quantity > 1 &&
                        (setQuantiry(quantity - 1),
                        setPrice(`${Math.round(product.price * quantity)} $`));
                    }}
                  >
                    -
                  </Button>
                  <p className="w-[50px] text-center content-center border ">
                    {quantity}
                  </p>
                  <Button
                    variant="outline"
                    className="h-full"
                    onClick={() => {
                      setQuantiry(quantity + 1);
                      setPrice(`${Math.round(product.price * quantity)} $`);
                    }}
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="flex gap-[1rem]">
                <Button className="w-[200px]">Add to cart</Button>
                <Button className="w-[200px]">Buy</Button>
              </div>
              <div className="flex gap-[1rem]">
                <p>Share : </p>
                <img
                  src="/img/instagram.svg"
                  alt="instragram"
                  className="h-[2rem]"
                />
                <img
                  src="/img/facebook.svg"
                  alt="facebook"
                  className="h-[2rem]"
                />
                <img src="/img/line.svg" alt="line" className="h-[2rem]" />
                <p className="border-l pl-[1rem]">Fevorite : </p>
                <img src="/img/heart.svg" alt="line" className="h-[2rem]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full max-w-[1440px] gap-[1rem]">
            <SellerCard />
            <div className="w-full flex flex-col border">
              <h3 className="text-[1.5rem] font-bold bg-gray-300 w-full px-[1rem]">
                About product
              </h3>
              <div className="p-[1rem]">
                <p className="font-">Brand : Brand name </p>
                <p>Stock : 134 </p>
                <p>Specification :</p>
                <div className="pl-[1.5rem]">
                  <li>Coffee</li>
                  <li>Tea</li>
                  <li>Milk</li>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col border">
              <h3 className="text-[1.5rem] font-bold bg-gray-300 px-[1rem]">
                Description
              </h3>
              <div className="p-[1rem]">
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </main>
  );
}
export default ProductDetail;
