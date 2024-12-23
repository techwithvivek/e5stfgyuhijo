import React from "react";

export default function Contact() {
  return (
    <>
    <section id="contact">
      <div className="contact-section mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
            <div className="contact-title">
            <h5 className="mb-3">
              <i class="fa-solid fa-rug me-3"></i>Contact
            </h5>
            <h1 className="mb-4">Get A Free Estimate</h1>
          </div>
          <div className="conact-phone">
            <h5 >
            <i class="fa-solid fa-phone me-3"></i>
            Call us
            </h5> 
            <h6 className="mt-1 mb-3">6394000012</h6>        
          </div>
          <div className="contact-address">
            <h5 className="mb-1">
            <i class="fa-solid fa-location-dot me-3"></i>
            Address:
            </h5>
            <h6>062 RVM Inter College Tilhar, 232407 </h6>
          </div>
          <div className="contact-email mt-2">
            <h5 className="mb-1">
            <i class="fa-solid fa-envelope me-3"></i>
            Email ID
            </h5>
            <h6>abcd@gmail.com</h6>          
          </div>
            </div>
            <div className="col-lg-6">
                <div className="contact-form">
                    <form>
                       <div className="input-box m-2">
                        <input type="text" className="field" placeholder="Full Name"/>
                       </div>

                       <div className="input-box m-2">
                        <input type="text" className="field" placeholder="Your Email"/>
                       </div>

                       <div className="input-box m-2">
                        <input type="text" className="mess" placeholder="Message"/>
                       </div>
                       <div className="contact-btn mt-4">
                        
                           <label className="math text-light">4+5=</label>
                        <input type="text" className="captch me-3 ms-3" placeholder=""/>
                        <a href="#" className="btn1">View more</a>                 
                             
                    
                       </div>
                    </form>
                </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
