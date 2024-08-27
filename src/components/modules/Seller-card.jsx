import React from "react";

const SellerCard = () => {
  return (
    <div className="h-[10vh] border flex gap-[1.5rem] items-center">
      <div className="h-[70%] w-[20%] flex justify-center items-center gap-[1.5rem]">
        <div className=" rounded-full overflow-hidden h-[4rem]">
          <img
            src="/img/profile.webp"
            alt="profile"
            className="size-full object-cover object-center "
          />
        </div>
        <p>Store page</p>
      </div>
      <div className="h-[70%] w-[80%] border-l px-[1.5rem] flex justify-between items-center">
        <div className="flex flex-col w-[25%]">
          <p className="flex justify-between">
            <span>Rating</span> <span className="text-[#f97316]">1,000</span>
          </p>
          <p className="flex justify-between">
            <span>Selling produnts</span>{" "}
            <span className="text-[#f97316]">10,000</span>
          </p>
        </div>
        <div className="flex flex-col w-[25%]">
          <p className="flex justify-between">
            <span>Respons</span> <span className="text-[#f97316]">20%</span>
          </p>
          <p className="flex justify-between">
            <span>Respons time</span>{" "}
            <span className="text-[#f97316]">within 1 hour</span>
          </p>
        </div>
        <div className="flex flex-col w-[25%]">
          <p className="flex justify-between">
            <span>Join</span> <span className="text-[#f97316]">1 year</span>
          </p>
          <p className="flex justify-between">
            <span>Follower</span> <span className="text-[#f97316]">200</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellerCard;
