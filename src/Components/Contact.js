import React, { useState } from "react";

const Contact = ({ data }) => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  if (data) {
    var iconContact = "images/iconos/" + data.iconContact;
  }

  const submitForm = () => {};

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
                      cols="50"
                      rows="15"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      id="contactMessage"
                      name="contactMessage"
                    ></textarea>
                  </div>

                  <div className="content-btn-contact">
                    <button
                      onClick={submitForm}
                      type="submit"
                      className="submit"
                    >
                      Enviar Mensaje
                    </button>
                  </div>
                </fieldset>
              </form>

              <div id="message-warning"> Error boy</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Su mensaje se envio con exito,
                muchas gracias!
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
