import React from "react";

const Header = ({ data }) => {
  if (data) {
    var perfilImg = "images/" + data.image;
    var imageLogo = "images/" + data.imageLogo;
    var iconHand = "images/" + data.icon;
    var iconSun = "images/iconos/" + data.iconSun;
    var imgJavaScript = "images/iconos/" + data.imgJavaScript;
    var imgNextjs = "images/iconos/" + data.imgNextjs;
    var imgHtml = "images/iconos/" + data.imgHtml;
    var imgCss = "images/iconos/" + data.imgCss;
    var imgReact = "images/iconos/" + data.imgReact;

    var titleHelp = data.titleHelp;
    var title = data.title;
    var secondTitle = data.secondTitle;
    var description = data.description;
    var networks = data.social.map(function (network) {
      var imgRedes = "images/iconos/" + network.image;
      return (
        <li key={network.name}>
          <a href={network.url}>
            <img
              className="img-redes-icon"
              src={imgRedes}
              alt={network.title}
            />
            <p>{network.title}</p>
          </a>
        </li>
      );
    });
  }

  return (
    <header id="home">
      <nav id="nav-wrap">
        <div className="content-image">
          <img src={imageLogo} alt="Logo Vladimir" />
        </div>
        {/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a> */}

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              Sobre Mí
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Experiencia
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              Proyectos
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contacto
            </a>
          </li>
        </ul>
        <div className="d-flex">
          <img className="icon-sun" src={iconSun} alt="icono de sol" />
          <p>Dark</p>
        </div>
      </nav>
      <div className="row banner">
        <div className="banner-text">
          <div className="banner-content-previus">
            <img
              className="profile-previus"
              src={perfilImg}
              alt="Vladimir Profile"
            />
            <div className="banner-border-box">
              <p>{titleHelp}</p>
              <img
                className="profile-pic"
                src={iconHand}
                alt="icono de una mano saludando"
              />
            </div>
          </div>
          <h1 className="responsive-headline">
            Hola, soy <span>{title}</span>{" "}
          </h1>
          <h1 className="responsive-headline"> {secondTitle} </h1>
          <h3>{description}</h3>
          <ul className="social">{networks}</ul>
        </div>
        {/* Habilidades */}
        <div className="skillContainer">
          <h2>Mis Habilidades</h2>
          <div className="skill-technology">
            <ul id="nav-skill">
              <li>
                <img src={imgJavaScript} alt="imagen de JavaScript" />
              </li>
              <li>
                <img src={imgNextjs} alt="imagen de Nextjs" />
              </li>
              <li>
                <img src={imgHtml} alt="imagen de Html" />
              </li>
              <li>
                <img src={imgCss} alt="imagen de Css" />
              </li>
              <li>
                <img src={imgReact} alt="imagen de React" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
