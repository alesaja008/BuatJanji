import React from "react";
import LogoFooter from "../../assets/images/logo/logo-white.png";
import "./styles.css";
import { Row, Col } from "react-bootstrap";

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
        <Row className="justify-content-center">
          <Col lg={3}>
            <p className="section-subtitle text-white">
              Jl. Bendungan Hilir No.46, RT.8/RW.1, Bend. Hilir,Tanah Abang,
              Kota Jakarta Pusat,Daerah Khusus Ibukota Jakarta 10210
            </p>
          </Col>
        </Row>

        <div className="social-icon">
          <a href="https://www.facebook.com/bintangsempurna/?locale=id_ID">
            <BiLogoFacebookCircle className="icon" />
          </a>
          <a href="https://twitter.com/bisempurna46">
            <BiLogoTwitter className="icon" />
          </a>
          <a href="https://www.instagram.com/bisempurna46/?hl=en">
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



