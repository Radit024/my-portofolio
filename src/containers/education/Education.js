import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo, illustration} from "../../portfolio";
import {Fade} from "../../components/fade/Fade";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import educationPerson from "../../assets/lottie/educationPerson";

export default function Education() {
  if (educationInfo.display) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="education-section" id="education">
          <h1 className="education-heading">Education</h1>
          <div className="education-main-div">
            <div className="education-image-div">
              {illustration.animated ? (
                <DisplayLottie animationData={educationPerson} />
              ) : (
                <img
                  alt="Student learning"
                  src={require("../../assets/images/developerActivity.svg").default || require("../../assets/images/developerActivity.svg")}
                />
              )}
            </div>
            <div className="education-card-container">
              {educationInfo.schools.map((school, index) => (
                <EducationCard key={index} school={school} />
              ))}
            </div>
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
