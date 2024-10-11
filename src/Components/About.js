import React from "react";

const About = ({ data }) => {
  if (data) {
    var title = data.title;
    var imgIcon = "images/iconos/" + data.image;
    var bioOne = data.bioOne;
    var bioTwo = data.bioTwo;
    var bioThree = data.bioThree;
    var imgPerfil = "images/" + data.imagePerfil;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="about-item">
          <div className="about-content-title">
            <img className="profile-pic" src={imgIcon} alt="icono de usuario" />
            <h1>
              Sobre <span>{title}</span>
            </h1>
          </div>
          <div className="about-content-bio">
            <div className="about-title">
              <p>{bioOne}</p>
              <p>
                Me considero una persona apasionada por las tecnologías y la
                programación, <span>{bioTwo}</span>
              </p>
              <p>{bioThree}</p>
            </div>
            <div>
              <img
                className="about-perfil"
                src={imgPerfil}
                alt="imagen de perfil"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
