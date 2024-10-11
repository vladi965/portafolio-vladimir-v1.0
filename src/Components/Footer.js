import React from "react";

const Footer = ({ data }) => {
  if (data) {
    var iconMail = "images/iconos/" + data.iconEmail;
    var imagePerfil = "images/" + data.image;
    var networks = data.network.map(function (network) {
      var imgRSociales = "images/iconos/" + network.image;
      return (
        <li key={network.name}>
          <a href={network.url}>
            <img
              className="img-networks-icon"
              src={imgRSociales}
              alt={network.title}
            />
          </a>
        </li>
      );
    });
  }

  return (
    <footer>
      <div className="row">
        <div className="content-footer">
          <div className="content-title">
            <p>Puedes escribirme al correo:</p>
            <div className="content-email">
              <img
                className="img-email-icon"
                src={iconMail}
                alt="icono de correo electronico"
              />
              <span>vladisanchez96@gmail.com</span>
            </div>
          </div>
          <div className="content-img-networks">
            <div>
              <img
                className="img-perfil"
                src={imagePerfil}
                alt="imagen de perfil"
              />
            </div>
            <div className="content-social">
              <p>Sígueme</p>
              <ul className="social-links">{networks}</ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
