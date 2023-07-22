import React from "react";

import LogoBs from "../../assets/images/logo/logo-black.png";
import Icon1 from "../../assets/images/img/hp-3-vector-1.png";
import Icon2 from "../../assets/images/img/hp-3-vector-2.png";
import Icon3 from "../../assets/images/img/hp-3-vector-3.png";
import Icon4 from "../../assets/images/img/hp-3-vector-4.png";
import Icon5 from "../../assets/images/img/hp-3-vector-5.png";
import Icon6 from "../../assets/images/img/hp-3-vector-6.png";
import Icon7 from "../../assets/images/img/hp-3-vector-7.png";

import Button from "react-bootstrap/Button";

import Apayangkami from "../Apayangkami";
import MisiKami from "../MisiKami";
import PlayGround from "../Playground";
import Calendly from "../Candaly";
import Testimonial from "../Testimonial/Index";
import Footer from "../Footer";
import SliderClient from "../SliderClient";

import { LazyLoadImage } from "react-lazy-load-image-component";

const NavbarBs = () => {
  return (
    <>
      <div className="wrapper">
        <header className="homepage-3">
          <div className="container">
            <div className="nav">
              <div className="logo">
                <a href="index3.html">
                  <img src={LogoBs} alt="logo" />
                </a>
              </div>

              <div className="nav-button"></div>
            </div>
          </div>
        </header>

        <div className="main-content hp-3">
          <section
            className="banner-section"
            id="home"
            style={{ scrollbarWidth: "5rem" }}
          >
            <div className="container">
              <h1>
                Berani Cetak
                <br /> Uji Kreatifitas.
              </h1>
              <p className="section-subtitle">
                Ide saja tidak cukup tanpa{" "}
                <strong>teknologi dan material</strong> pendukung untuk
                menciptakan karya terbaik. Temukan pengaplikasian yang sesuai
                untuk karya cetakmu bersama <strong> para ahli.</strong> Asah
                kreatifitasmu bareng
                <strong> Bintang Sempurna!</strong>
              </p>
              <Button className="btn-Make an appointment" href="#BuatJanjiYuk">
                Buat Janji 🎉
              </Button>{" "}
              <div className="banner-image">
                <LazyLoadImage
                  effect="blur"
                  src="https://res.cloudinary.com/bintangsempurna/image/upload/v1689839565/playground_img-min_krfzir.webp"
                  alt="banner-image"
                />
              </div>
              <div className="banner-vectors">
                <img className="vector-1" src={Icon1} alt="banner-vector" />
                <img className="vector-2" src={Icon2} alt="banner-vector" />
                <img className="vector-3" src={Icon3} alt="banner-vector" />
                <img className="vector-4" src={Icon4} alt="banner-vector" />
                <img className="vector-5" src={Icon5} alt="banner-vector" />
                <img className="vector-6" src={Icon6} alt="banner-vector" />
                <img className="vector-7" src={Icon7} alt="banner-vector" />
              </div>
            </div>
          </section>

          <SliderClient />
          <Apayangkami />
          <MisiKami />
          <PlayGround />

          <section className="features" id="BuatJanjiYuk">
            <div className="container">
              <h3 className="section-title">Ayo Kita Berdiskusi!</h3>
              <p className="section-subtitle">
                Temukan waktu yang tepat untuk sharing dan berdiskusi bareng Tim
                Bintang Sempurna, <br />
                tentukan hasil cetak yang kamu banget.
              </p>

              <Calendly />
            </div>
          </section>

          <Testimonial />
          <Footer />
        </div>
      </div>
    </>
  );
};

//testimonial carousel //

export default NavbarBs;
