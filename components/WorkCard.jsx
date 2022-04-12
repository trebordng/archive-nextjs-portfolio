import Link from "next/link";
import React from "react";
import Reveal from "react-reveal/Reveal";
import Footer from "./Footer";
import Fancybox from "./fancybox.js";

const WorkCard = (props) => {
  return (
    <Reveal>
      <div id="portfolio">
        <h5 className="portfolio-title">{props.post.title}</h5>
        <div className="row portfolio-wrapper">
          <div className="col-lg-6 work-description">
            <p>{props.post.company}</p>
            <p>{props.post.period}</p>
            <p>{props.post.description}</p>
          </div>
          <div className="col-lg-6">
            <Fancybox>
              <p>
                <a data-fancybox="gallery" href={props.post.image1.url}>
                  <img
                    alt=""
                    src={props.post.image1.url}
                    className="work-image"
                  />
                </a>

                <a data-fancybox="gallery" href={props.post.image2.url}>
                  <img
                    alt=""
                    src={props.post.image2.url}
                    className="work-image"
                  />
                </a>

                <a data-fancybox="gallery" href={props.post.image3.url}>
                  <img
                    alt=""
                    src={props.post.image3.url}
                    className="work-image"
                  />
                </a>
              </p>
            </Fancybox>
            {props.post.demo != undefined ? (
              <div className="demo-code">

                <a
                  href={`${props.post.demo}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                <button className="menu-button"> Demo</button>
                  
                </a>
                <a
                  href={`${props.post.code}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="menu-button"> Code</button>
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <Footer />
    </Reveal>
  );
};

export default WorkCard;
