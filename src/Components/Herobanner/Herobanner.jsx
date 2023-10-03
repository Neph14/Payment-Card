import React from "react";

import Background from "../../Assets/20231003_151911.jpg";
import Nav from "../UI/Navbar/Navbar";
import Money from "../../Assets/green-money-bag.png";
import Visacard from "../UI/Widget/Visacard";
import RuPay from "../UI/Widget/RuPay";

const Home = () => {
  return (
    <>
      <div
        className="w-[98%] h-[92%] rounded-2xl bg-cover bg-no-repeat border bg-center border-[#DE629E]"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <Nav />
        <div className="flex h-[86%] w-full">
          <div className="w-2/3 h-full bg-transparent grid place-content-center">
            <Visacard />
            <RuPay />
          </div>
          <div className="h-full w-1/3 grid place-content-end pb-10 gap-3">
            <div className="text-green-500 text-xs flex items-center">
              <img src={Money} alt="Money" className="w-auto h-5" />
              START SAVING YOUR MONEY SMARTLY
            </div>
            <div className="text-7xl text-white">
              Payments have never been easier
            </div>
            <div className="text-xl text-white font-light">
              Discover the easiest and smartest way to manage your personal
              finances, Save, analyse, invest, withdraw, send, and receive money
              all over world with no limit
            </div>
            <div className="flex justify-between pr-20 items-center">
              <button className="bg-violet-700 rounded-3xl px-5 py-2 h-fit font-medium text-white">
                Get Started
              </button>
              <button className="font-medium text-white h-fit">
                <ion-icon name="download-outline"></ion-icon>
                Download App
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
