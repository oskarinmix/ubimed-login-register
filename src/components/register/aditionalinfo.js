import React from "react";

const AditionalInfo = ({ data }) => {
  const {
    blood,
    setBlood,
    tutor,
    setTutor,
    tutorName,
    setTutorName,
    relationship,
    setRelationship,
    tutorId,
    setTutorId,
  } = data;
  return (
    <React.Fragment>
      <div className="label-input">
        <label htmlFor="blood"> Grupo Sangíneo: </label>
        <select
          type="text"
          id="blood"
          value={blood}
          onChange={(e) => setBlood(e.target.value)}
        >
          <option value=""> Seleccione su Grupo Sangíneo</option>
          <option value="A+"> A+</option>
          <option value="A-"> A-</option>
          <option value="B+"> B+</option>
          <option value="B-"> B-</option>
          <option value="AB+"> AB+</option>
          <option value="AB-"> AB-</option>
          <option value="O+"> O+</option>
          <option value="O-"> O-</option>
        </select>
      </div>
      <div className="label-input" id="acceptTerms">
        <div
          style={{
            paddingTop: "10px",
            display: "flex",
            width: "100%",
            alignItems: "center",
          }}
        >
          <label htmlFor="tutor"> Necesita un Tutor Legal </label>
          <input
            type="checkbox"
            id="tutor"
            checked={tutor}
            onChange={(e) => setTutor(!tutor)}
            style={{ marginTop: "6px" }}
          />
        </div>
      </div>
      {tutor && (
        <React.Fragment>
          <div className="label-input">
            <label htmlFor="tutorName">Nombre: </label>
            <input
              type="text"
              id="tutorName"
              placeholder="Ingrese Nombre del Tutor"
              value={tutorName}
              onChange={(e) => setTutorName(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="label-input">
            <label htmlFor="relationship"> Parentésco: </label>
            <input
              type="text"
              id="relationship"
              placeholder="Ingrese el Parentesco"
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="label-input">
            <label htmlFor="tutorId"> Nro de Documento de Identidad: </label>
            <input
              type="text"
              id="tutorId"
              placeholder="Ingrese Nro de Documento"
              value={tutorId}
              onChange={(e) => setTutorId(e.target.value)}
              autoComplete="off"
            />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default AditionalInfo;
