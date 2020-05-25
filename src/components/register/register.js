import React from "react";
import Logo from "../../img/logo.svg";

import "./scss/login.scss";
import Wizard from "./wizard";
const Register = () => {
  const [index, setIndex] = React.useState(1);

  React.useEffect(() => {
    const wizards = document.querySelectorAll(".inner-wrapper");
    const controls = document.querySelector(".controls");
    index === 1
      ? (controls.style.justifyContent = "flex-end")
      : (controls.style.justifyContent = "space-between");

    if (wizards.length > 1) {
      wizards.forEach((el) => {
        el.classList.add("hidden");
      });
      wizards[index - 1].classList.remove("hidden");
    }
  }, [index]);
  const cambiarIndex = (i) => {
    if (i === 1) {
      index === 5 ? setIndex(5) : setIndex(index + i);
    } else if (i === -1) {
      index === 1 ? setIndex(1) : setIndex(index + i);
    }
  };
  return (
    <div className="container" id="login">
      <div className="wrapper">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="input">
          <Wizard cambiarIndex={cambiarIndex} index={index} />
        </div>
      </div>
    </div>
  );
};

export default Register;
