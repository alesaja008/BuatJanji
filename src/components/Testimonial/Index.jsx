import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

// image
import ImgTest1 from "../../assets/images/testimonials/testimonial1.jpg";
import ImgTest2 from "../../assets/images/testimonials/testimonial3.jpg";
import ImgTest3 from "../../assets/images/testimonials/testimonial6.jpg";
import ImgTest4 from "../../assets/images/testimonials/testimonial7.jpg";
import ImgTest5 from "../../assets/images/testimonials/testimonial8.jpg";
import ImgTest6 from "../../assets/images/testimonials/testimonial9.jpg";

const Testimonial = () => {
  return (
    <>
      <section className="testimonial">
        <div className="container">
          <h3 className="section-title">Kata Mahasiswa</h3>
          <p className="section-subtitle">
            Begini feedback dari mahasiswa lainnya yang telah mengikuti sesi
            Share & Discuss bersama Bintang Sempurna
          </p>
        </div>

        <div className="container-fluid">
          <div className="testimonial-circles">
            <span />

            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              centeredSlides={true}
              spaceBetween={30}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="testimonial-items">
                  <div className="review">
                    <img src={ImgTest1} alt="testimonial" />
                    <p>
                      “Menambah wawasan dalam dunia printing
                      <br />
                      dan next project bakal berkonsultasi lagi nih
                      <br />
                      Terimakasih Terimakasih
                      <br />
                      <strong>PT. Bintang Sempurna</strong> ”
                    </p>
                    <h6 className="review-by">
                      Natasha
                      <span>Binus University</span>
                    </h6>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-items">
                  <div className="review">
                    <img src={ImgTest2} alt="testimonial" />
                    <p>
                      “Konsultasi mudah di pahami
                      <br />
                      Membantu banget untuk Skripsi aku
                      <br />
                      Terimakasih Terimakasih
                      <br />
                      <strong>PT. Bintang Sempurna</strong> ”
                    </p>
                    <h6 className="review-by">
                      Jeniffer Smith
                      <span>Binus International</span>
                    </h6>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="testimonial-items">
                  <div className="review">
                    <img src={ImgTest6} alt="testimonial" />
                    <p>
                      “Jadi lebih tau deh <br />
                      untuk teknik dan print yang bagus.
                      <br />
                      Terimakasih <br />
                      <strong>PT. Bintang Sempurna</strong> ”
                    </p>
                    <h6 className="review-by">
                      Sarah<span>UMN</span>
                    </h6>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="testimonial-imgs">
              <img className="testimonial-2" src={ImgTest1} alt="testimonial" />
              <img className="testimonial-3" src={ImgTest2} alt="testimonial" />
              <img className="testimonial-4" src={ImgTest3} alt="testimonial" />
              <img className="testimonial-5" src={ImgTest4} alt="testimonial" />
              <img className="testimonial-6" src={ImgTest5} alt="testimonial" />
              <img className="testimonial-7" src={ImgTest6} alt="testimonial" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
