import React from "react";

const BasicInfo = ({ data }) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    password2,
    setPassword2,
    accept,
    setAccept,
  } = data;
  const checkPass = () => {
    if (password2.length >= 6) return password !== password2;
  };
  const emailMatch = () => {
    const regex = new RegExp(
      /^[a-z\d.-_]+@[a-z\d\-_]+\.[a-z]{2,6}(\.[a-z]{2,6})?$/
    );
    return regex.test(email);
  };
  return (
    <React.Fragment>
      <div className="label-input">
        <label htmlFor="email"> Correo Electrónico: </label>
        <input
          type="text"
          id="email"
          placeholder="Introduzca su correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
        />
        {email.length >= 6 && !emailMatch() && (
          <span className="error">El correo electronico debe ser válido</span>
        )}
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
      <div className="label-input">
        <label htmlFor="password2"> Repetir Contraseña: </label>
        <input
          type="password"
          id="password2"
          placeholder="Confirme su contraseña"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        {checkPass() && (
          <span className="error">Las Contraseñas deben coincidir</span>
        )}
      </div>
      <div className="label-input" id="acceptTerms">
        <label htmlFor="accept"> Acepto términos y condiciones </label>
        <input
          type="checkbox"
          id="accept"
          checked={accept}
          onChange={(e) => setAccept(!accept)}
          style={{ marginTop: "6px" }}
        />
      </div>
      {!accept && (
        <span className="error-terms">
          Debe Aceptar los términos y Condiciones
        </span>
      )}
    </React.Fragment>
  );
};

export default BasicInfo;
