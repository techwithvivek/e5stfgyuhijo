import React from "react";
export default function Banner() {
  return (
    <>
      <section id="home">
        <div className="banner-section">
          <div className="banner-img">
            <img src="assets/banner.jpeg" alt="" />
            <div className="banner-info ">
              <h1 className="text-center text-dark">Shuwb Rug Service</h1>
              <p className="text-center mb-2 text-dark">
                Pet Odors?? It’ll All Come Out In The Wash
              </p>
              <div className="banner-info-btn text-center ">
                <a href="#">LEARN MORE</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
