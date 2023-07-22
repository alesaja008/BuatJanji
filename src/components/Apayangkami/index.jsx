import React from "react";

import IconPrint from "../../assets/images/icon/icon-01.svg";
import IconKain from "../../assets/images/icon/icon-02.svg";
import IconMerchandise from "../../assets/images/icon/icon-03.svg";
import IconDisplay from "../../assets/images/icon/icon-04.svg";



const Apayangkami = () => {
  return (
    <>
      <section className="how-it-works" id="how-works">
        <div className="container">
          <h3 className="section-title">Apa Yang Kami Lakukan</h3>
          <p className="section-subtitle">
            Menyediakan solusi cetak lengkap berkualitas sesuai ekspektasi,
            didukung oleh material dan teknologi printing terkini.
            <br />
            Temukan kebutuhan kamu di sini!
          </p>

          <div className="working-content mobile-cards">
            <div className="work-card">
              <div className="work-img ">
                <img src={IconPrint} alt="work-img" />
              </div>
              <h6 className="work-steps">Print A3+</h6>
              <p className="steps-para">
                Tuangkan kreatifitasmu dengan selembar kertas A3+, untuk cetak
                stiker, brosur, cetak dummy dsb
              </p>
            </div>
            <div className="work-card">
              <div className="work-img">
                <img src={IconKain} alt="work-img" />
              </div>
              <h6 className="work-steps">Print Kain </h6>
              <p className="steps-para">
                Kamu juga bisa berkreasi cetak dengan kain seperti cetak kaos,
                cetak pashmina, scarf dsb.
              </p>
            </div>
            <div className="work-card">
              <div className="work-img">
                <img src={IconMerchandise} alt="work-img" />
              </div>
              <h6 className="work-steps">Print Merchandise</h6>
              <p className="steps-para">
                Mainkan kreatifitas kamu. Buat eksklusif merchandise sendiri
                yang kamu banget!
              </p>
            </div>
            <div className="work-card">
              <div className="work-img">
                <img src={IconDisplay} alt="work-img" />
              </div>
              <h6 className="work-steps">Print Sign &amp; Display </h6>
              <p className="steps-para">
                Cetak poster, Kanvas Frame, sampai Lenticular Printing ada di
                sini!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Apayangkami;
