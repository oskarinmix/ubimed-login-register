import React from "react";
import LogoLight from "../../img/logo-light.svg";
import BasicInfo from "./basicInfo";
import PersonalData from "./personaldata";
import ExtraData from "./extradata";
import AddressData from "./addressdata";
import AditionalInfo from "./aditionalinfo";
import LoadingBar from "./loadingbar";

const Wizard = ({ cambiarIndex, index }) => {
  React.useEffect(() => {
    const boton = document.querySelector("#submit");
    if (index === 5) {
      boton.type = "submit";
    } else {
      boton.type = "button";
    }
  }, [index]);
  const handleSubmit = (e) => {
    console.log("Se envio el formulario");
  };
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [accept, setAccept] = React.useState(false);

  const data = {
    email,
    setEmail,
    password,
    setPassword,
    password2,
    setPassword2,
    accept,
    setAccept,
  };
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [gen, setGen] = React.useState("");
  const [picture, setPicture] = React.useState("");

  const data2 = {
    name,
    setName,
    lastName,
    setLastName,
    gen,
    setGen,
    picture,
    setPicture,
  };
  const [typeDoc, setTypeDoc] = React.useState("");
  const [numId, setNumId] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [pob, setPob] = React.useState("");
  const [civilState, setCivilState] = React.useState("");
  const [blood, setBlood] = React.useState("");
  const data3 = {
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
  };
  const [city, setCity] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const data4 = {
    city,
    setCity,
    country,
    setCountry,
    address,
    setAddress,
    phone,
    setPhone,
  };
  const [tutor, setTutor] = React.useState(false);
  const [tutorName, setTutorName] = React.useState("");
  const [relationship, setRelationship] = React.useState("");
  const [tutorId, setTutorId] = React.useState("");
  const data5 = {
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
  };
  const passwordMatch = () => {
    return password === password2 && password.length >= 6;
  };
  const emailMatch = () => {
    const regex = new RegExp(
      /^[a-z\d.-_]+@[a-z\d\-_]+\.[a-z]{2,6}(\.[a-z]{2,6})?$/
    );
    return regex.test(email);
  };
  const validateForm = () => {
    return passwordMatch() && emailMatch() && accept;
  };
  const validateStep2 = () => {
    return name.length > 0 && lastName.length > 0 && gen !== "";
  };
  const validateStep3 = () => {
    return (
      typeDoc !== "" &&
      numId.length > 0 &&
      dob !== "" &&
      pob.length > 0 &&
      civilState !== ""
    );
  };
  const validateStep4 = () => {
    return (
      country.length > 0 &&
      city.length > 0 &&
      address.length > 0 &&
      phone.length > 0
    );
  };
  const validateStep5 = () => {
    return blood !== "";
  };
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex ",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <h1>Registro</h1>
        <LoadingBar index={index} />
      </div>
      {/*<img src={LogoLight} alt="logo" />*/}{" "}
      <form>
        <div className="inner-wrapper">
          <BasicInfo data={data} />
        </div>
        <div className="inner-wrapper hidden">
          <PersonalData data={data2} />
        </div>

        <div className="inner-wrapper hidden">
          <ExtraData data={data3} />
        </div>
        <div className="inner-wrapper hidden">
          <AddressData data={data4} />
        </div>
        <div className="inner-wrapper hidden">
          <AditionalInfo data={data5} />
        </div>
      </form>
      <div className="controls">
        {index !== 1 ? (
          <button type="button" onClick={() => cambiarIndex(-1)}>
            Anterior
          </button>
        ) : null}
        <button
          type="submit"
          onClick={() => (index !== 5 ? cambiarIndex(1) : handleSubmit())}
          id="submit"
          disabled={
            index === 1
              ? !validateForm()
              : index === 2
              ? !validateStep2()
              : index === 3
              ? !validateStep3()
              : index === 4
              ? !validateStep4()
              : !validateStep5()
          }
        >
          {index === 5 ? "Registrar" : "Siguiente"}
        </button>
      </div>
    </React.Fragment>
  );
};

export default Wizard;
