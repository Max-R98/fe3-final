import React, { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
  });
  const { nombre, email } = user;

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const regexNombre = /^[a-zA-Z]{3,}(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre.length > 5 && regexNombre.test(nombre) && regexEmail.test(email)) {
      setShow(true);
      setError(false);
      console.log("Form submitted:", user);
    } else {
      setError(true);
      setShow(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(event) => setUser({ ...user, nombre: event.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        />
        <button>Registro</button>
      </form>
      {show && <h3>Gracias {nombre}, te contactaremos cuando antes vía mail</h3>}
      {error && <h5 style={{ color: "red" }}>Por favor verifique su información nuevamente</h5>}
    </div>
  );
};

export default Form;