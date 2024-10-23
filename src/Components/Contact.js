import React, { useState } from "react";

const Contact = ({ data }) => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const phoneNumber = "51923450859";

  if (data) {
    var iconContact = "images/iconos/" + data.iconContact;
  }

  const submitForm = (event) => {
    event.preventDefault();

    const whatsappMessage = `Datos del formulario enviados: \n\n Nombre: ${name}\n\n Apellidos: ${lastname}\n\n Teléfono: ${phone}\n\n Correo: ${email}\n\n Mensaje: ${message}`;

    console.log("Datos del formulario enviados:");
    console.log("Nombre:", name);
    console.log("Apellidos:", lastname);
    console.log("Teléfono:", phone);
    console.log("Correo:", email);
    console.log("Mensaje:", message);

    // Construir la URL de WhatsApp
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`;

    // Abrir WhatsApp con la URL construida
    window.open(whatsappURL);

    //Resetear el formulario y mostrar el mensaje de exito
    setName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setMessage("");

    setSuccessMessage(true);
    setErrorMessage(false);

    // Ocultar el mensaje de exito despues de 3 segundos
    setTimeout(() => setSuccessMessage(false), 3000);
  };

  return (
    <section id="contact">
      <div className="row">
        <div className="contact-container">
          <div className="contact-content-title">
            <img
              className="icons-general"
              src={iconContact}
              alt="icono contacto"
            />
            <h1>Contáctame</h1>
          </div>

          <div className="row box-contact">
            <div className="twelve columns">
              <form onSubmit={submitForm}>
                <fieldset>
                  <div className="grid-content">
                    <div>
                      <label htmlFor="contactName">Nombres</label>
                      <input
                        required
                        type="text"
                        defaultValue=""
                        value={name}
                        size="35"
                        id="contactName"
                        name="contactName"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="contactLastName">Apellidos</label>
                      <input
                        required
                        type="text"
                        defaultValue=""
                        value={lastname}
                        size="35"
                        id="contactLastName"
                        name="contactLastName"
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="contactPhone">Celular</label>
                      <input
                        required
                        type="phone"
                        defaultValue=""
                        value={phone}
                        size="35"
                        id="contactPhone"
                        name="contactPhone"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="contactEmail">Correo Electronico</label>
                      <input
                        required
                        type="text"
                        defaultValue=""
                        value={email}
                        size="35"
                        id="contactEmail"
                        name="contactEmail"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contactMessage">Mensaje</label>
                    <textarea
                      required
                      cols="30"
                      rows="10"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      id="contactMessage"
                      name="contactMessage"
                    ></textarea>
                  </div>

                  <div className="content-btn-contact">
                    <button type="submit" className="submit">
                      Enviar Mensaje
                    </button>
                  </div>
                </fieldset>
              </form>

              {errorMessage && (
                <div id="message-warning">Error en enviar mensaje</div>
              )}
              {successMessage && (
                <p id="message-success">
                  <i className="fa fa-check"></i> Su mensaje se envió con éxito
                  <br />
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
