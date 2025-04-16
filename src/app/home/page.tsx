import React from "react";
import Slider from "../../components/home-components/slider";
import HomeBenefits from "../../components/home-components/benefits";

export default function laele() {
    return (
      <div>
        <Slider />
        <div className="m-auto my-12 w-fit">
          <HomeBenefits />
        </div>
      </div>
    );
  }
  