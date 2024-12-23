import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer-section mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-title  mt-5">
                <h4 className="mt-3 text-center">Orientalrugservice</h4>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="footer-about mt-5 me-5">
                <ul>
                  <li>Home</li>
                  <li>Aboutus</li>
                  <li>Services</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="footer-media-contant mt-5 mb-5 text-center">
              <i class="fa-solid fa-wifi "></i>
              <i class="fa-brands fa-facebook  "></i>
              <i class="fa-brands fa-youtube "></i>
              <i class="fa-brands fa-instagram "></i>
              </div>
            </div>

            <div className="col-lg-3 text-center">
              <div className="footer-map  mb-3">              
            <img src="assets/map.png" alt="" />
              </div>
            </div>

            <div className="footer-name mt-2">
            <p>Copyright <span className="text-info">2024</span> ,Desigend by <span className="text-info"> Tech with vivek</span></p>
          </div>

          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div className="footer-title">
            <h3 className="mt-3">Get A Free Estimate</h3>
          </div>
          <div className="footer-about">
            <ul>
              <li >Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact</li>
              <i class="fa-solid fa-wifi "></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-instagram"></i>
              <img src="assets/map.png" alt="" />
            </ul>
          </div>
          <div className="footer-name mt-2">
            <p>Copyright <span className="text-info">2024</span> ,Desigend by <span className="text-info"> Tech with vivek</span></p>
          </div> */
}
