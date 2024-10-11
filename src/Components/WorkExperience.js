import React from "react";

const WorkExperience = ({ data }) => {
  if (data) {
    var titleWork = data.title;
    var iconWork = "images/iconos/" + data.image;
    var experience = data.experience.map(function (experience, index) {
      return (
        <div className="container-work" key={experience.title}>
          <div
            className={`timeline-marker ${index === 0 ? "active" : ""}`}
          ></div>
          <div className="experience-content">
            <div className="experience-box-info">
              <h3>{experience.title}</h3>
              <p>{experience.company}</p>
              <span>{experience.years}</span>
            </div>
            <div className="experience-box-description">
              <p>{experience.description}</p>
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <section id="work" className="row">
      <div className="work-item">
        <div className="work-content-title">
          <img className="icons-general" src={iconWork} alt="icono work" />
          <h1>{titleWork}</h1>
        </div>
        <div className="work-experience-info">{experience}</div>
      </div>
    </section>
  );
};

export default WorkExperience;
