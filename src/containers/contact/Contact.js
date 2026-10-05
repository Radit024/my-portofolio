import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {financeContactInfo} from "../../financePortfolio";
import {Fade} from "../../components/fade/Fade";
import contactPerson from "../../assets/lottie/contactPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import {usePortfolioMode} from "../../contexts/PortfolioModeContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  const {mode} = usePortfolioMode();
  const isFinance = mode === "finance";
  const activeContact = isFinance ? financeContactInfo : contactInfo;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={contactPerson} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              ></img>
            )}
          </div>
          <div className="contact-header">
            <h1 className="heading contact-title">{activeContact.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {activeContact.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {activeContact.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + activeContact.number}
                  >
                    {activeContact.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + activeContact.email_address}
              >
                {activeContact.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
