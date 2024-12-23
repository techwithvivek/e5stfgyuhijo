import React from "react";

export default function Gallery() {
  return (
    <>
    <section id="gallery">
      <div className="gallery-section">
        <div className="container">
          <div className="gallery-section-title">
            <h5 className="text-center ">
              <i class="fa-solid fa-rug me-2 mt-3 mb-2"></i>Gallery
            </h5>
            <h1 className="text-center mb-4">FEATURED WORKS</h1>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="gallery-card text-center">
                <div className="gallery-card-info me-5">
                  <i class="fa-solid fa-magnifying-glass me-3"></i>
                  <i class="fa-solid fa-location-dot bg-dark"></i>
                </div>
                <div className="card-img mb-3">
                  <img src="assets/G-bg1.jpeg" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="gallery-card text-center">
                <div className="gallery-card-img2 me-5">
                <img src="assets/G-bg2.jpeg" alt="" />
                </div>
                <div className="card-img mb-3">
                  <img src="assets/G-bg3.jpeg" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="gallery-card text-center">
                <div className="gallery-card-img3 mb-3">
                  <img src="assets/G-bg4.jpeg" alt="" />
                </div>
                <div className="card-img4">
                  <img src="assets/G-bg5.jpeg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
