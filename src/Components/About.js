import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      
      <div className="about-section-text-container">
      
        <h1 className="primary-heading">
        Template Selection
        </h1>
        <p className="primary-text">
        Choose from a variety of templates tailored to different industries. Each template is crafted to showcase your skills and experience.
        </p>
        <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      </div>
    </div>
  );
};

export default About;
