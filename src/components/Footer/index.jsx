import React from "react";
import LogoFooter from "../../assets/images/logo/logo-white.png";
import "./styles.css";

import {
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoInstagram,
} from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <section className="subscribe-input">
        <img src={LogoFooter} height={60} alt="logo" />
        <p className="section-subtitle text-white">
          Jl. Bendungan Hilir No.46, RT.8/RW.1, Bend. Hilir,Tanah Abang, Kota
          Jakarta Pusat,Daerah Khusus Ibukota Jakarta 10210
        </p>
        <div className="social-icon">
          <a href="#!">
            <BiLogoFacebookCircle className="icon" />
          </a>
          <a href="#!">
            <BiLogoTwitter className="icon" />
          </a>
          <a href="#!">
            <BiLogoInstagram className="icon" />
          </a>
        </div>
        <p className="section-subtitle mt-5">
          © 2013 - 2023 | PT. Bintang Sempurna ©Copyright
        </p>
      </section>
    </>
  );
};

export default Footer;
