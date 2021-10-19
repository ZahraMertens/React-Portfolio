import React from "react";
import {
  FaSmileWink,
  FaBalanceScale,
  FaMobileAlt,
  FaLightbulb,
} from "react-icons/fa";
import Portrait from "../../assets/images/portfolio.jpg"
import "../../styles/About.css";

export default function About() {
  return (
    <div className="aboutPage">
      <div className="about-wrapper">
        <div className="row justify-content-center">
          <div className="about-header-container">
            <div className="row justify-content-center">
              <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-5 col-xs-6 col-8">
                <h1 className="about-header">About</h1>
              </div>
            </div>
          </div>
          <div className="allIcons-container glass-container">
            <div className="row">
              <div className="col">
                <div className="skill-container">
                  <div className="icon-div">
                    <FaSmileWink size={42} />
                  </div>
                </div>
                <div className="icon-text-div">
                  <h1 className="icon-header">User friendly</h1>
                  <p className="icon-text">
                    Passionate about creating user friendly UX/UI designs.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="skill-container">
                  <div className="icon-div">
                    <FaBalanceScale size={42} />
                  </div>
                </div>
                <div className="icon-text-div">
                  <h1 className="icon-header">Performance</h1>
                  <p className="icon-text">
                    Performance is everything! Synergy between frontend and
                    backend leads to an awesome website.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="skill-container">
                  <div className="icon-div">
                    <FaMobileAlt size={42} />
                  </div>
                </div>
                <div className="icon-text-div">
                  <h1 className="icon-header">Responsive</h1>
                  <p className="icon-text">
                    My applications will be responsive and work large and small
                    devices.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="skill-container">
                  <div className="icon-div">
                    <FaLightbulb size={42} />
                  </div>
                </div>
                <div className="icon-text-div">
                  <h1 className="icon-header">Unique</h1>
                  <p className="icon-text">
                    I love designing unique interfaces which stand out.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-container glass-container">
            <div className="row justify-content-center">
              <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 container-portrait">
                <img src={Portrait} alt="Avatar portrait" className="portait"/>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                <p className="about-text">2
                  Ever since the first{" "}
                  <span className="about-span">“Hello World”</span> in the
                  console, it was clear that{" "}
                  <span className="about-span">
                    Web Development is greater than just a hobby
                  </span>
                  . Now passionate Junior Full-Stack Web Developer with an urge
                  to <span className="about-span">solve problems</span> and
                  create <span className="about-span">efficient solutions</span>{" "}
                  in the least amount of time. Developed a dating app for
                  elderly, a weather app and an e-commerce backend application,
                  graduated with the best possible mark from the Coding Bootcamp
                  and now{" "}
                  <span className="about-span">
                    seeking to add on to the strong technical skills
                  </span>{" "}
                  gained during the bootcamp. Strong team player, with{" "}
                  <span className="about-span">great communication skills</span>
                  , ready to provide{" "}
                  <span className="about-span">innovative ideas</span>, and a{" "}
                  <span className="about-span">great work ethic</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}