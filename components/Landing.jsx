import React, { useState, useEffect } from "react";
import portraitImage from "../public/portrait.png";
import Fade from "react-reveal/Fade";


const Landing = () => {
  let [loading, setLoading] = useState(true);
  let [loadingAnimation, setLoadingAnimation] = useState(true);
  
  useEffect(() => {
    if (loading === true) {
      setLoadingAnimation(true);
    } else {
      setLoadingAnimation(false);
    }
  }, [loading]);
  return (
    <div className="landing-page row">
      <div className="right-corner"></div>
      <div className="left-corner"></div>
      <Fade>
        
          <div className="col-lg-3 portrait">
            <img
              src={portraitImage.src}
              className="portrait-image"
              alt="logo"
            />
            <div className="portrait-shadow"></div>

            <div className="portrait-rectangle"></div>
          </div>
          <div className="col-lg-9 introduction">
            <div className="introduction-rectangle"></div>

            {loading ? (
              <div
                id="short-introduction"
                className={
                  loadingAnimation
                    ? "short-introduction fade-in"
                    : "display-none"
                }
              >
                <h5>
                  Hi, I<span>&apos;</span>m
                </h5>
                <h5>Robert Tran</h5>
                <p>Front-End Developer</p>
                <button
                  onClick={() => setLoading(false)}
                  className="normal-button"
                >
                  More
                </button>
              </div>
            ) : (
              <div
                id="detail-introduction"
                className={
                  loadingAnimation
                    ? "display-none"
                    : "detail-introduction fade-in"
                }
              >
                <p>
                  A post-graduate IT developer with a bachelor certification in
                  Information Technology from QUT. Passionate in HTML, CSS,
                  JavaScript, JS library such as React/Next, Vue/Nuxt. To me,
                  one of the most important aspects when working with website is
                  making it responsive.
                </p>
                <p>Hobby: Soccer, PC Games, Guitar</p>
                <button
                  onClick={() => setLoading(true)}
                  className="normal-button"
                >
                  Back
                </button>
              </div>
            )}
          </div>
        
      </Fade>
      
    </div>
  );
};

export default Landing;
