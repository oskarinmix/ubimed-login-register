import React from "react";

const ExtraData = ({ data }) => {
  const {
    typeDoc,
    setTypeDoc,
    numId,
    setNumId,
    dob,
    setDob,
    pob,
    setPob,
    civilState,
    setCivilState,
  } = data;
  return (
    <React.Fragment>
      <div className="label-input">
        <label htmlFor="typeDoc"> Documento: </label>
        <select
          id="typeDoc"
          value={typeDoc}
          onChange={(e) => setTypeDoc(e.target.value)}
        >
          <option value=""> Tipo de Documento</option>
          <option value="CC"> Cédula de Ciudadanía</option>
          <option value="TI"> Tarjeta de Identidad</option>
          <option value="CE"> Cédula de Extranjería</option>
          <option value="PP"> Pasaporte</option>
        </select>
        <input
          id="numId"
          type="text"
          value={numId}
          placeholder="Número de Identificación"
          style={{ marginTop: "10px" }}
          onChange={(e) => setNumId(e.target.value)}
        />
        {/*sex === "" && <span className="error"> Debe seleccionar su sexo</span>*/}
      </div>
      <div className="label-input">
        <label htmlFor="dob"> Fecha y Lugar de Nacimiento: </label>
        <input
          type="date"
          id="dob"
          placeholder="dd/mm/yyyy"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <input
          type="text"
          id="pob"
          placeholder="Lugar de Nacimiento"
          value={pob}
          onChange={(e) => setPob(e.target.value)}
        />
      </div>
      <div className="label-input">
        <label htmlFor="civilState"> Estado Civil: </label>
        <select
          id="typecivilStateDoc"
          value={civilState}
          onChange={(e) => setCivilState(e.target.value)}
        >
          <option value=""> Seleccione Estado Civil</option>
          <option value="Soltero"> Soltero</option>
          <option value="Casado">Casado</option>
          <option value="Unión Libre"> Unión Libre</option>
          <option value="Divorciado"> Divorciado</option>
          <option value="Viudo"> Viudo</option>
        </select>
      </div>
    </React.Fragment>
  );
};

export default ExtraData;
