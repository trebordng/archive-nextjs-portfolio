import React, { useState, useEffect } from "react";
import Reveal from "react-reveal/Reveal";
import Head from "next/head";

function Skill() {
  var ProgressBar = require("progressbar.js");

  useEffect(() => {
    var frontEnd = new ProgressBar.Circle("#frontEnd", {
      color: "#323643",
      strokeWidth: 4,
      trailWidth: 4,
      text: {
        value: "HTML/css 70%",
      },
    });

    frontEnd.animate(0.7);
    var react = new ProgressBar.Circle("#react", {
      color: "#545a70",
      strokeWidth: 4,
      trailWidth: 4,
      text: {
        value: "react 60%",
      },
    });

    react.animate(0.6);
    var Javascript = new ProgressBar.Circle("#Javascript", {
      color: "#6d7592",
      strokeWidth: 4,
      trailWidth: 4,
      text: {
        value: "Js 50%",
      },
    });

    Javascript.animate(0.5);
    var vue = new ProgressBar.Circle("#vue", {
      color: "#545a70",
      strokeWidth: 4,
      trailWidth: 4,
      text: {
        value: "vue 60%",
      },
    });

    vue.animate(0.6);
    var photoshop = new ProgressBar.Circle("#photoshop", {
      color: "#78809a",
      strokeWidth: 4,
      trailWidth: 4,
      text: {
        value: "photoshop 30%",
      },
    });

    photoshop.animate(0.4);
    var backEnd = new ProgressBar.Circle("#backEnd", {
      color: "#838aa2",
      strokeWidth: 4,
      trailWidth: 4,
      text: {
        value: "Back-End (Progressing)",
      },
    });

    backEnd.animate(0.1);
  }, []);

  return (
    <div id="skills">
      <Reveal>
        
        <h5 className="skills-title">Skills</h5>
        <div className="row">
          <div className="col-lg-6">
            <div className="soft-skills">
              <span>Team Work as well as Individual.</span> Three years at
              university gave me a great chance to collaborate with a lot of
              teams in different subjects. Overall, the experience was good and
              I was able to develop my skills to work with different people in
              different culture and doing different tasks. However,
              communication is what I am seeking to improve in order to have
              better understanding of other team members&apos;s ideas,
              suggestions (and jokes ٭(•﹏•)٭).Working individiually is also my
              strength as most of my time studying and practicing coding is just
              by myself. Therefore, I can organize a better timeline for me to
              achive my goal.
            </div>
            <div className="soft-skills">
              <span>Design and Implementation.</span> Either working as a team
              or individually, I am normally engaged as a front end developer.
              Designing with illustrators, Photoshop, Figma is usually not my
              thing, however, I do have basic knowledge in using these softwares
              as well as design theory. Therefore, if I get a chance to improve
              these skills furthermore, I&apos;m willing to take it.
            </div>
            <div className="soft-skills">
              <span>Open-Minded and Willingness.</span> I&apos;m always up to
              new ideas and new things. While considering myself as a front-end
              developer, I&apos;m also really fond of studying about back-end
              and design in the near future.
            </div>
            <div className="soft-skills honorable-mention">
              <span>Honorable Mention:</span> Mutual Respect, Friendliness,
              Self-Motivation, Self Starter.
            </div>
          </div>

          <div className="col-lg-6 ">
            <div className="progress " id="frontEnd"></div>

            <div className="progress " id="Javascript"></div>
            <div className="progress " id="react"></div>
            <div className="progress " id="vue"></div>
            <div className="progress " id="photoshop"></div>
            <div className="progress " id="backEnd"></div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default Skill;
