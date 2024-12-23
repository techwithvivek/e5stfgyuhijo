import React from "react";

export default function Video() {
  return (
    <>
      <div className="video-section mt-5 ">
        <div className="container">
          <div className="video-section-title">
              <h5 className="text-center mb-3">
                <i class="fa-solid fa-rug me-2"></i>Watch our video library showing how
              </h5>
              <h2 className="text-center">Skilled Washing + Out & Out Rinsing = “CLEAN”</h2>
             <div className="row">
                <div className="col-lg-6">
                    <div className="video-card mt-5">
                        <img src="assets/video1.png" alt="" />
                        <p className="mt-2">Here we are rinsing a light colored Chinese Rug and cleaning it. It’s amazing how much dirt can get trapped inside those light colored rugs! When rugs are returned to the homeowner, all dirt, debris and cleaning products are completely removed.</p>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="video-card mt-5">
                        <img src="assets/video2.png" alt="" />
                        <p className="mt-2">This Karastan piece is about forty years old and is getting professionally dusted. Please note that the rug is flipped (fuzzy side down). The brushes on the vacuum cleaner have been replaced with beater bars to help remove as much dust and debris as possible.</p>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </>
  );
}
