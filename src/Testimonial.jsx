import React from "react";

export default function Testimonial() {
  return (
    <>
      <div className="testimonial-section mt-5">
        <div className="container">
          <div className="testimonial-section-title">
            <h5 className="text-center mb-3">
              <i class="fa-solid fa-rug me-2"></i>Testimonial
            </h5>

            <div id="carouselExampleIndicators" class="carousel slide">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <i class="fa-solid fa-quote-left"></i>
                  <p>
                    Robert was very professional. He came out, explained how the
                    carpet would be cleaned, and rolled up the rug and took it
                    to his facility to clean. He provided an exact figure for
                    the rug. He was very prompt and the rug was cleaned and
                    delivered when he promised. He did a beautiful job. We’ve
                    had this rug since 2004, it was custom made, and this is
                    it’s first cleaning. I highly recommend Robert. We’ll call
                    him again.
                  </p>
                  <h4 className="mt-2">
                    <i class="fa-solid fa-user me-3 mb-2"></i>
                    Gary M.
                  </h4>
                  <div className="star-icon">
                    <i class="fa-solid fa-star ms-5 me-1 text-warning"></i>
                    <i class="fa-solid fa-star me-1 text-warning"></i>
                    <i class="fa-solid fa-star me-1 text-warning"></i>
                    <i class="fa-regular fa-star me-1"></i>
                    <i class="fa-regular fa-star me-1"></i>
                  </div>
                </div>
                <div class="carousel-item">
                  <i class="fa-solid fa-quote-left"></i>
                  <p>
                    Robert was very professional. He came out, explained how the
                    carpet would be cleaned, and rolled up the rug and took it
                    to his facility to clean. He provided an exact figure for
                    the rug. He was very prompt and the rug was cleaned and
                    delivered when he promised. He did a beautiful job. We’ve
                    had this rug since 2004, it was custom made, and this is
                    it’s first cleaning. I highly recommend Robert. We’ll call
                    him again.
                  </p>
                  <h4 className="mt-2">
                    <i class="fa-solid fa-user me-3 mb-2"></i>
                    Gary M.
                  </h4>
                  <div className="star-icon">
                    <i class="fa-solid fa-star ms-5 me-1 text-warning"></i>
                    <i class="fa-solid fa-star me-1 text-warning"></i>
                    <i class="fa-solid fa-star me-1 text-warning"></i>
                    <i class="fa-regular fa-star me-1"></i>
                    <i class="fa-regular fa-star me-1"></i>
                  </div>
                </div>
                <div class="carousel-item">
                  <i class="fa-solid fa-quote-left"></i>
                  <p>
                    Robert was very professional. He came out, explained how the
                    carpet would be cleaned, and rolled up the rug and took it
                    to his facility to clean. He provided an exact figure for
                    the rug. He was very prompt and the rug was cleaned and
                    delivered when he promised. He did a beautiful job. We’ve
                    had this rug since 2004, it was custom made, and this is
                    it’s first cleaning. I highly recommend Robert. We’ll call
                    him again.
                  </p>
                  <h4 className="mt-2">
                    <i class="fa-solid fa-user me-3 mb-2"></i>
                    Gary M.
                  </h4>
                  <div className="star-icon">
                    <i class="fa-solid fa-star ms-5 me-1 text-warning"></i>
                    <i class="fa-solid fa-star me-1 text-warning"></i>
                    <i class="fa-solid fa-star me-1 text-warning"></i>
                    <i class="fa-regular fa-star me-1"></i>
                    <i class="fa-regular fa-star me-1"></i>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
