import React from "react";
import {images} from "../../constants"
import "./AboutUs.css";

const AboutUs = () => (
  <div className="app__aboutus app__bg section__padding" id="about">
    <div className="app__aboutus-g">
      <img src={images.G} alt="aboutus__g" className="img__g"/>
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about-spoon"/>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife">
        <img src={images.knife} alt="about-knife"/>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about-spoon"/>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
