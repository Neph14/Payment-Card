import React from "react";
import { useState } from "react";
import Money from "../../../Assets/White (2).png";
const Nav = () => {
  const [open, setopen] = useState(false);

  return (
    <>
      <div className="w-full bg-transparent h-16 flex items-center px-8">
        <div className="h-fit w-1/2 flex items-center justify-start">
          <img src={Money} alt="Icon" className="h-6 w-6" />
          <p className="text-white font-semibold">Payme</p>
        </div>
        <div className="h-fit w-1/2 flex justify-end text-white gap-12 pr-24">
          <p className="px-1">About</p>
          <p className="px-1">Product</p>
          <p className="px-1">Pricing</p>
          <p className="border rounded-full px-1">Sign Up</p>
        </div>
      </div>
    </>
  );
};

export default Nav;
