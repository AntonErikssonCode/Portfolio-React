import "./Me.css";
import resume from "./resume.pdf";
import grades from "./grades.pdf";
import thesis from "./thesis.pdf";
import music from "./music.svg";
import coding from "./coding.svg";
import cube from "./cube.svg";
import brain from "./brain.svg";
import Quote from "./Quote";
import Animate from "../features/Animate";
import React from "react";
import SvgWave from "../layout/SvgWave";

function Me() {
  return (
    <div className="me-main">
      <div className="me-container">
        <div className="me-text-container">
          <h3>Hello there!</h3>
          <div>
            <Animate variant={2}>
              <div className="me-top-section">
                <div className="me-top-section-text">
                  <h4>Who am I?</h4>
                  <p>
                    Well, It’s a difficult task to try to convey a cohesive
                    representation of oneself in a few lines on a webpage. I
                    could tell you that I’m 27 years old and moved to Gothenburg
                    five years ago, but it would hardly represent the
                    multidisciplinary nature of my passions and competens. We
                    all have multiple aspects to our character, and here are
                    some of mine.
                  </p>
                </div>
                <div className="me-img-container">
                  <img className="me-img" src={require("./me-small.jpg")}></img>
                </div>
              </div>
            </Animate>
            <Animate variant={1}>
              <div className="me-designer me-icon-alignment">
                <div className="me-icon-container">
                  <img src={cube} className="me-icon"></img>
                </div>
                <div>
                  <h5>Anton The Designer</h5>
                  <p>
                    I love brainstorming and prototyping interesting concepts
                    and find it extremely satisfying to develop and iterate upon
                    an idea into a refined and beautiful experience.{" "}
                  </p>
                </div>
              </div>
            </Animate>
            <Animate variant={1}>
              <div className="me-frontend me-icon-alignment">
                <div className="me-icon-container">
                  <img src={coding} className="me-icon"></img>
                </div>
                <div>
                  <h5>Anton The Front End Developer</h5>
                  <p>
                    Where design yields visceral pleasure, coding gets me
                    logical pleasure. It’s incredibly gratifying to construct
                    and develop the design you’ve created into a working
                    deployed product. Academically I’ve steered into projects
                    involving code and I've been a hobbyist programmer for over
                    five years.{" "}
                  </p>
                </div>
              </div>
            </Animate>
            <Animate variant={1}>
              <div className="me-cognitive me-icon-alignment">
                <div className="me-icon-container">
                  <img src={brain} className="me-icon"></img>
                </div>
                <div>
                  <h5>Anton The Cognitive Scientist </h5>
                  <p>
                    I’ve always been intrigued with thoughts, feelings and
                    behaviors and the discipline of Cognitive Science fit me
                    like a glow. The scientifical backbone of the discipline has
                    to great extent shaped how I perceive and manage the tasks
                    around me.{" "}
                  </p>
                </div>
              </div>
            </Animate>
            <Animate variant={1}>
              <div className="me-musician me-icon-alignment">
                <div className="me-icon-container">
                  <img src={music} className="me-icon"></img>
                </div>
                <div>
                  <h5>Anton The Musician</h5>
                  <p>
                    I’ve been listening, playing and producing music for many
                    years and would call myself an enthusiast. If you have some
                    good tunes to share you can hit me up.{" "}
                  </p>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </div>
      <Animate variant={2}>
      <div className="me-links-container">
        <div className="me-links">
          <a className="me-links-a" href={resume} target="_blank">
            RESUME
          </a>
          <a className="me-links-a" href={grades} target="_blank">
            GRADES
          </a>
          <a className="me-links-a" href={thesis} target="_blank">
            BCs THESIS
          </a>
        </div>
      </div>
      </Animate>
      <Animate variant={2}>
        <Quote />
      </Animate>
      <SvgWave rotated={true} color="var(--secondColor)" top={false} />
    </div>
  );
}

export default Me;
