import React from "react";

export default function Services() {
  return (
    <section id="services">
    <div className="service-section mt-4">
      <div className="container">
        <div className="service-section-tittle">
          <h5 className="text-center ">
          <i class="fa-solid fa-rug me-2 mt-3"></i>Services</h5>
        <h1 className="text-center">What We Provide</h1>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="service-card mt-5">
              <img src="assets/card1.png" alt="" />
              <h5 className="mt-3 mb-3">Color Restoration</h5>
              <p>From removing grime and restoring rugs to their original glory, one of our most popular services is a traditional rug cleaning.</p>
            </div>
          </div>
          <div className="col-lg-4"> <div className="service-card mt-5">
              <img src="assets/card2.png" alt="" />
              <h5 className="mt-3 mb-3">Rug Repair</h5>
              <p>Sometimes our most treasurer pieces need repair and care. We specialize in handling the most delicate of fabrics and rugs.</p>
            </div>

          </div>
          <div className="col-lg-4">
          <div className="service-card mt-5">
              <img src="assets/card3.png" alt="" />
              <h5 className="mt-3 mb-3">Stain Removal</h5>
              <p>Spilled drinks such as wine and soft drinks will create a stain. Organic stains caused by pets are removable as well. </p>
            </div>
            </div>
        </div>
      </div>
      <div className="section-btn">
      <button class="btn mt-4">View more</button>
      </div>
      </div>
      </section>
  );
}
