import React from "react";
import DefaultPic from "../../img/profile.svg";
const PersonalData = ({ data }) => {
  const {
    name,
    setName,
    lastName,
    setLastName,
    gen,
    setGen,
    picture,
    setPicture,
  } = data;

  const loadPic = (e) => {
    if (e.target.files[0]) {
      setPicture(e.target.value);
      var reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById(
          "profilePic"
        ).style.background = `url(${e.target.result}) no-repeat top center`;
        document.getElementById("profilePic").style.backgroundSize = "cover";
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "75px",
            height: "75px",
            borderRadius: "50%",
            background: `url(${DefaultPic}) no-repeat center`,
            backgroundSize: "cover",
          }}
          id="profilePic"
        />
        <div className="label-input" style={{ width: "auto" }}>
          <label htmlFor="picture">
            {picture !== "" ? picture : "Cargar Foto"}
          </label>
          <input
            id="picture"
            type="file"
            placeholder="Foto"
            onChange={loadPic}
            style={{ display: "none" }}
          />
        </div>
      </div>
      <div className="label-input">
        <label htmlFor="name"> Nombres: </label>
        <input
          type="text"
          id="name"
          placeholder="Introduzca sus Nombres"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="off"
        />
      </div>
      <div className="label-input">
        <label htmlFor="lastName"> Apellidos: </label>
        <input
          type="text"
          id="lastName"
          placeholder="Introduzca sus Apellidos"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          autoComplete="off"
        />
      </div>
      <div className="label-input">
        <label htmlFor="gen"> Género: </label>
        <select id="gen" value={gen} onChange={(e) => setGen(e.target.value)}>
          <option value=""> Seleccione su Género</option>
          <option value="Masculino"> Masculino</option>
          <option value="Femenino"> Femenino</option>
        </select>
        {/*gen === "" && <span className="error"> Debe seleccionar su sexo</span>*/}
      </div>
    </React.Fragment>
  );
};

export default PersonalData;
