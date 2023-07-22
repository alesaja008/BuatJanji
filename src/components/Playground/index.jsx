import React from "react";

const PlayGround = () => {
  return (
    <>
      <section className="about-banner">
        <div className="container">
          <div className="about-top">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="top-img">
                  <img
                    className="top-1"
                    src="https://res.cloudinary.com/bintangsempurna/image/upload/v1689923071/4_kwmijd.png"
                    alt="about-top"
                  />
                  <img
                    className="top-2"
                    src="https://res.cloudinary.com/bintangsempurna/image/upload/v1689923071/2_tjo59q.png"
                    alt="about-top"
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
                  <img
                    className="top-3"
                    src="https://res.cloudinary.com/bintangsempurna/image/upload/v1689923071/3_gmofio.png"
                    alt="about"
                  />
                </div>
                <div className="col-lg-8 col-sm-8 col-8">
                  <img
                    className="top-4"
                    src="https://res.cloudinary.com/bintangsempurna/image/upload/v1689923071/1_iapodr.png"
                    alt=" about"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="about-info-mobile">
            <h3 className="section-title">
              We provide innovative idea and awesome services for your client
            </h3>
            <p className="section-subtitle">
              Duis orci nisl, ornare non diam id, dapibus faucibus urna.
              Vestibulum tristique posuere iaculis. Suspendisse orci tortor,
              auctor non luctus sed, vulputate sit amet libero. Maecenas congue
              fringilla justo molestie dapibus. Cras quis erat in velit rhoncus
              mollis. Phasellus eu enim dignissim an
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlayGround;
