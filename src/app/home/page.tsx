import React from "react";
import Slider from "../../components/home-components/slider";
import HomeBenefits from "../../components/home-components/benefits";
import HomeDestaques from "@/components/home-components/destaques";

export default function laele() {
    return (
      <div>
        <Slider />
        <div className="m-auto my-12 w-[65%]">
          <HomeBenefits />
          <HomeDestaques />
        </div>
      </div>
    );
  }
  