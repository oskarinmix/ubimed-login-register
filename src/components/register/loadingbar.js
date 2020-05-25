import React from "react";

const LoadingBar = ({ index }) => {
  const progress = (parseInt(index) / 5) * 100;
  React.useEffect(() => {
    const steps = document.querySelectorAll(".steps p");

    for (let i = 0; i < index; i++) {
      steps[i].style.border = "2px solid #41e296";
    }
  }, [index]);
  return (
    <React.Fragment>
      <div className="cover-steps">
        <div className="steps">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
        </div>
      </div>
      <div className="bar">
        <div
          className="fill-bar"
          style={{
            width: `${progress}%`,
            borderRadius: `${index === 5 ? "20px " : "20px 0px 0px 20px"}`,
          }}
        >
          {progress}%
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoadingBar;
