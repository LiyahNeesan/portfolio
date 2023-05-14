import React from "react";
import CV from "../assets/Aliya_Nyssan_CV.docx";

const Description = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Aliya_Nyssan_CV.docx";
    link.click();
  };

  return (
    <section className="description">
      <div className="container">
        <h1>
          Hi, I’m Liya,
          <br />
          I am learning JS and React.
        </h1>
        <p style={{ marginTop: "20px" }}>
          I’m a Software Developer and this is my portfolio.
        </p>
        <button
          style={{ marginTop: "20px" }}
          className="button"
          onClick={handleDownload}
        >
          CV for review
        </button>
      </div>
    </section>
  );
};

export default Description;
