import React from "react";
import Logo from "../../img/logo.svg";
import LogoLight from "../../img/logo-light.svg";

import "./scss/login.scss";
const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    console.log(validateForm());
  };
  const validateForm = () => {
    validateMail();
    return email.length > 0 && password.length > 0;
  };
  const validateMail = () => {
    const regex = new RegExp(
      /^[a-z\d.-_]+@[a-z\d\-_]+\.[a-z]{2,6}(\.[a-z]{2,6})?$/
    );
    console.log("el correo es: ", regex.test(email));
  };
  return (
    <div className="container" id="login">
      <div className="wrapper">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="input">
          <h1>Bienvenidos !</h1>
          <img src={LogoLight} alt="Logo" />
          <form onSubmit={handleSubmit}>
            <div className="label-input">
              <label htmlFor="email"> Correo Electrónico: </label>
              <input
                type="text"
                id="email"
                placeholder="Introduzca su correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="label-input">
              <label htmlFor="password"> Contraseña: </label>
              <input
                type="password"
                id="password"
                placeholder="Introduzca su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" disabled={!validateForm()}>
              Iniciar Sesión
            </button>
            <div className="post-input">
              <a href="/">¿Olvidaste la contraseña?</a>
            </div>
          </form>
          <div className="post-button">
            <p>¿No tienes cuenta?</p>
            <a href="/"> Regístrate</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
