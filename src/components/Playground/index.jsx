import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

const PlayGround = () => {
  return (
    <>
      <section className="about-banner">
        <div className="container">
          <div className="about-top">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="top-img">
                  <LazyLoadImage
                    className="top-1"
                    src="https://res.cloudinary.com/bintangsempurna/image/upload/v1689923071/4_kwmijd.png"
                    alt="content-img"
                  />
                  <LazyLoadImage
                    className="top-2"
                    src="https://res.cloudinary.com/bintangsempurna/image/upload/v1689923071/2_tjo59q.png"
                    alt="content-img"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="about-info">
                  <h3 className="section-title">
                    Material & Teknologi
                    <br />
                    Printing ter-Update.
                  </h3>
                  <p className="section-subtitle">
                    Jelajah Advance Printing di atas bahan Rigid Media (Akrilik,
                    Lenticular Printing, Aluminium) dengan metode cetak UV
                    Flatbed sampai Laser Engraving.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-images">
            <div className="bottom-img">
              <div className="row">
                <div className="col-lg-4 col-xl-4 col-sm-4 col-4">
                  <LazyLoadImage
                    className="top-3"
                    src="https://res.cloudinary.com/bintangsempurna/image/upload/v1689923071/3_gmofio.png"
                    alt="content-img"
                  />
                </div>
                <div className="col-lg-8 col-sm-8 col-8">
                  <LazyLoadImage
                    className="top-4"
                    src="https://res.cloudinary.com/bintangsempurna/image/upload/v1689923071/1_iapodr.png"
                    alt="content-img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="about-info-mobile">
            <h3 className="section-title">
              Material & Teknologi Printing ter-Update.
            </h3>
            <p className="section-subtitle">
              Jelajah Advance Printing di atas bahan Rigid Media (Akrilik,
              Lenticular Printing, Aluminium) dengan metode cetak UV Flatbed
              sampai Laser Engraving.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlayGround;
