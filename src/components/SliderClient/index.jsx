import React from "react";

import Univ1 from "../../assets/images/univeristas/univ-01.jpg";
import Univ2 from "../../assets/images/univeristas/univ-02.jpg";
import Univ3 from "../../assets/images/univeristas/univ-03.jpg";
import Univ4 from "../../assets/images/univeristas/univ-04.jpg";
import Univ5 from "../../assets/images/univeristas/univ-05.jpg";
import Univ6 from "../../assets/images/univeristas/univ-06.jpg";
import Univ7 from "../../assets/images/univeristas/univ-07.jpg";

import "./styles.css";

const SliderClient = () => {
  return (
    <>
      <div className="slider mt-5">
        <div className="slide-track">
          <div className="slide">
            <img src={Univ1} height={100} width={250} alt="" />
          </div>
          <div className="slide">
            <img src={Univ2} height={100} width={250} alt="" />
          </div>
          <div className="slide">
            <img src={Univ3} height={100} width={250} alt="" />
          </div>
          <div className="slide">
            <img src={Univ4} height={100} width={250} alt="" />
          </div>
          <div className="slide">
            <img src={Univ5} height={100} width={250} alt="" />
          </div>
          <div className="slide">
            <img src={Univ6} height={100} width={250} alt="" />
          </div>
          <div className="slide">
            <img src={Univ7} height={100} width={250} alt="" />
          </div>
          <div className="slide">
            <img src={Univ1} height={100} width={250} alt="" />
          </div>
          <div className="slide">
            <img src={Univ2} height={100} width={250} alt="" />
          </div>
          <div className="slide">
            <img src={Univ3} height={100} width={250} alt="" />
          </div>
          <div className="slide">
            <img src={Univ4} height={100} width={250} alt="" />
          </div>
          <div className="slide">
            <img src={Univ5} height={100} width={250} alt="" />
          </div>
          <div className="slide">
            <img src={Univ6} height={100} width={250} alt="" />
          </div>
          <div className="slide">
            <img src={Univ7} height={100} width={250} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderClient;
