import React from "react";

export default function () {
  return (
    <>
    <section id="about">
      <div className="about-section mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-img-box">
                <div className="img-about mt-3">
                  <img src="assets/truk.jpeg" alt="" />
                  <h6>
                  <i class="fa-solid fa-truck-fast me-2 mt-3"></i>Free Pickup & Delivery
                  </h6>
                   <div className="about-card">
                    <img src="assets/mat.jpeg" alt="" />
                   </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-info-box">
                <div className="about-info-box-title">
                  <h6>
                    <i class="fa-solid fa-rug me-2 mt-3 " ></i>About us
                  </h6>
                </div>
                <div className="about-info-box-heading mt-2">
                  <h4>
                    Providing Specialty Rug Wash <br />, Repair Service, and Cleaning
                  </h4>
                  <p className="mt-3 mb-3">
                    Online videos of rug cleanings on social media are all the
                    rage right now. We  have been doing this for 25 years and
                    know how to professionally care for your most delicate rugs.
                  </p>
                </div>
                <div className=" about-box-profile">
                  <div className="profile-img">
                    <img src="assets/robet.png" alt="" />
                  </div>
                  <div className="profile-name">
                    <h6 className="mb-2">ROBERT KRYSMALSKI</h6>
                    <p>Owner, Shuwb Rug Service</p>
                  </div>
                </div>
                <div className="about-para">
                  <p className="mt-3 mb-2">
                    Robert has been servicing the Metro Detroit area since 1970
                    as a leader in carpet care and fabric cleaning. In 2003, we
                    established our Oriental Rug Service specialty and have been
                    cleaning rugs in our unique shop ever since.
                  </p>
                  <div className="about-btn">
                  <a href="#" >View more</a>
                  </div>
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
