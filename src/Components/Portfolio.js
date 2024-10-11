import React from "react";
import imgArrowRight from "../images/icon-right.svg";

const Portfolio = ({ data }) => {
  if (data) {
    var titlePrincipal = data.skilltitle;
    var iconProject = "images/iconos/" + data.image;
    var content = data.content.map(function (content) {
      var projectImage = "images/portfolio/" + content.image;
      var codeImage = "images/iconos/" + content.codeImage;
      var codeImageHover = "images/iconos/" + content.codeImageHover;
      var previewImage = "images/iconos/" + content.previewImage;
      var previewImageHover = "images/iconos/" + content.previewImageHover;
      // Iconos
      var iconOneSkill = "images/stacks/" + content.iconOneSkill;
      var iconTwoSkill = "images/stacks/" + content.iconTwoSkill;
      var iconThreeSkill = "images/stacks/" + content.iconThreeSkill;

      return (
        <div key={content.titleProject} className="columns portfolio-item">
          <div className="item-wrap">
            <img
              className="item-wrap-img"
              alt={content.title}
              src={projectImage}
            />
            <h2>{content.titleProject}</h2>
            <div className="item-lista-skill">
              <ul id="list-skill">
                <li>
                  <img
                    className="icons-general"
                    src={iconOneSkill}
                    alt="icono projects"
                  />
                  <span>{content.nameOneSkill}</span>
                </li>
                <li>
                  <img
                    className="icons-general"
                    src={iconTwoSkill}
                    alt="icono projects"
                  />
                  <span>{content.nameTwoSkill}</span>
                </li>
                <li>
                  <img
                    className="icons-general"
                    src={iconThreeSkill}
                    alt="icono projects"
                  />
                  <span>{content.nameThreeSkill}</span>
                </li>
              </ul>
            </div>
            <div className="item-description">
              <p>{content.description}</p>
            </div>
            <div className="item-img">
              <div className="content-icons">
                <ul id="nav-code">
                  <li>
                    <a
                      target="_blank"
                      href={content.codeUrl}
                      title={content.codeTitle}
                    >
                      <img
                        className="icons-general disable"
                        src={codeImage}
                        alt="icono projects"
                      />
                      <img
                        className="icons-general active"
                        src={codeImageHover}
                        alt="icono projects"
                      />
                      {content.codeTitle}
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href={content.previewUrl}
                      title={content.previewTitle}
                    >
                      <img
                        className="icons-general disable"
                        src={previewImage}
                        alt="icono projects"
                      />
                      <img
                        className="icons-general active"
                        src={previewImageHover}
                        alt="icono projects"
                      />
                      {content.previewTitle}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <div className="portfolio-content-title">
            <img
              className="icons-general"
              src={iconProject}
              alt="icono projects"
            />
            <h1>
              Mis <span>{titlePrincipal}</span>
            </h1>
          </div>

          <div className="portfolio-section-category">
            <ul id="nav-category">
              <li className="current">
                <a href="#home">Páginas Web</a>
              </li>
              <li>
                <a href="#home">Landing Page</a>
              </li>
              <li>
                <a href="#home">Aplicación Web</a>
              </li>
              <li>
                <a href="#home">Diseño UI</a>
              </li>
              <li>
                <a href="#home">Aplicacion Móvil</a>
              </li>
            </ul>
          </div>

          <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-fours cf">
            {content}
          </div>
          <div className="content-url">
            <a href="#">
              <span>Más Proyectos</span>
              <img
                className="icons-general"
                src={imgArrowRight}
                alt="icono mas proyectos"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
