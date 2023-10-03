import React from "react";

import Code from "../../../Assets/chip-logo.png";
import Visa from "../../../Assets/visa.png";

function Visacard() {
  return (
    <>
      <div className="backdrop-blur-3xl bg-black bg-opacity-20 w-96 h-52 ml-52 -rotate-[10deg] flex px-7 pt-2 rounded-2xl shadow">
        <div className="w-[60%] h-full grid">
          <div className="text-white">platinum</div>
          <img src={Code} alt="Chip Logo" className="h-8 w-auto" />
          <div className="flex justify-between text-white w-full font-light">
            <p>9876</p>
            <p>9876</p>
            <p>9876</p>
            <p>9876</p>
          </div>
          <div className="text-white text-xs flex justify-between items-center">
            <div className="flex items-center gap-x-4">
              <p className="w-9">VALID FROM</p>
              <div>08/23</div>
            </div>
            <div className="flex items-center gap-x-4">
              <p className="w-9">VALID FROM</p>
              <div>08/23</div>
            </div>
          </div>
          <p className="text-white font-medium text-lg">SHIVANSHU MATHUR</p>
        </div>
        <div className="w-[40%] h-full flex items-end justify-end pb-2">
          <img src={Visa} alt="Visa" className="w-auto h-10" />
        </div>
      </div>
    </>
  );
}

export default Visacard;
