import React, { Fragment } from "react";

import background from "../../Assets/20231003_141723.png";
import Herobanner from "../Herobanner/Herobanner";

function Layout() {
  return (
    <>
      <div
        className="w-screen h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center overflow-hidden"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Herobanner />
      </div>
    </>
  );
}

export default Layout;
