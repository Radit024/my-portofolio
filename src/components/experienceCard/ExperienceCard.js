import React, {useState, createRef} from "react";
import "./ExperienceCard.scss";

function getDominantColor(img) {
  try {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 1;
    canvas.height = 1;
    ctx.drawImage(img, 0, 0, 1, 1);
    const data = ctx.getImageData(0, 0, 1, 1).data;
    if (data && data[3] > 0) {
      return [data[0], data[1], data[2]];
    }
  } catch (e) {
    // Fallback if canvas security restricts sampling
  }
  return null;
}

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState(null);
  const imgRef = createRef();

  function getColorArrays() {
    if (imgRef.current) {
      const color = getDominantColor(imgRef.current);
      if (color) setColorArrays(color);
    }
  }

  function rgb(values) {
    return !values || values.length === 0
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div
        style={{background: rgb(colorArrays)}}
        className="experience-banner"
      >
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        {cardInfo.companylogo && (
          <img
            crossOrigin={"anonymous"}
            ref={imgRef}
            className="experience-roundedimg"
            src={cardInfo.companylogo}
            alt={cardInfo.company}
            onLoad={() => getColorArrays()}
          />
        )}
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}
