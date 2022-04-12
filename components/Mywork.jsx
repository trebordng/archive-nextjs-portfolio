import React, { useRef, useState } from "react";
import Reveal from "react-reveal/Reveal";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Mywork = () => {
  return (
    <div className="my-work-cover">
      <Reveal>
        <h5 className="contact-title">What I Do</h5>
        <div className="my-work-wrapper">
          <div className="col-lg-5 col-md-6 col-sm-6 my-work my-work-border ">
            <Link href="/portfolio">
              <a>
                <button className="normal-button my-work-button">
                  <p className="my-work-title">Portfolio</p>
                  <p>
                    <em>See more about my work</em>
                  </p>
                </button>
              </a>
            </Link>
          </div>

          <div className="col-lg-5 col-md-6 col-sm-6 my-work ">
            <button className="normal-button my-work-button">
              <a>
                <p className="my-work-title">Writing</p>
                <p>
                  <em>I&apos;m planning to write some more about myself</em>
                </p>
              </a>
            </button>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Mywork;
