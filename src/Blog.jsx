import React from "react";

export default function Blog() {
  return (
    <>
    <section id="blog">
      <div className="blog-section mt-5">
        <div className="container">
          <div className="blog-section-tittle">
            <h5 className="text-center mb-3">
              <i class="fa-solid fa-rug me-2"></i>Blog
            </h5>
            <h1 className="text-center">Blog will be soon</h1>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="blog-card mt-5">
                <img src="assets/blg-card.png " alt="" />
                <h5 className="mt-3 mb-3">Color Restoration</h5>
                <p>
                  From removing grime and restoring rugs to their original
                  glory, one of our most popular services is a traditional rug
                  cleaning.
                </p>
                <div className="blog-btn mt-4 mb-3 ">
                <a href="#">View more</a>
              </div>
              </div>            
            </div>

            <div className="col-lg-4">
              <div className="blog-card mt-5">
                <img src="assets/blg-card.png " alt="" />
                <h5 className="mt-3 mb-3">Color Restoration</h5>
                <p>
                  From removing grime and restoring rugs to their original
                  glory, one of our most popular services is a traditional rug
                  cleaning.
                </p>
                <div className="blog-btn mt-4 mb-3 ">
                <a href="#">View more</a>
              </div>
              </div>             
            </div>

            <div className="col-lg-4">
              <div className="blog-card mt-5">
                <img src="assets/blg-card.png " alt="" />
                <h5 className="mt-3 mb-3">Color Restoration</h5>
                <p>
                  From removing grime and restoring rugs to their original
                  glory, one of our most popular services is a traditional rug
                  cleaning.
                </p>
                <div className="blog-btn mt-4 mb-3 ">
                <a href="#">View more</a>
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

