import React from "react";

const Controls = ({ index }) => {
  return (
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
  );
};

export default Controls;
