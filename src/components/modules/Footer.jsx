import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full h-[50vh] bg-gray-100 flex flex-col justify-start items-center px-[5%]">
      <div className="max-w-[1440px] w-full h-full ">
        <div className="h-[80%] pt-[2rem] size-full flex justify-between pb-[1.5rem]">
          <div className="w-[40%] h-full flex flex-col gap-[1.5rem]">
            <Link to="/">
              <img
                src="/img/logo.png"
                alt="profile"
                className="h-[50px] object-cover object-center bg-white "
              />
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus vero quo quia minima illo quae deleniti laudantium
              modi, provident voluptates soluta, delectus incidunt commodi! Quo
              rem itaque ducimus nobis optio?
            </p>
          </div>
          <div className="w-[20%]">
            <h3 className="font-bold underline">Assistance</h3>
            <p>Support Center</p>
            <p>Policy</p>
            <p>Terms & Condition</p>
            <p>Accessibility Statement</p>
            <p>Wholesaler Information</p>
          </div>
          <div className="w-[20%]">
            <h3 className="font-bold underline">Acout</h3>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>TikTok</p>
            <p>Pinterest</p>
          </div>
        </div>
        <hr className="border-black w-full" />
        <div className="h-[10%] w-full pt-[1.5rem] text-gray-600">Coppy right © 2020</div>
      </div>
      
      
    </footer>
  );
};

export default Footer;
