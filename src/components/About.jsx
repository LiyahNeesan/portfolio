import React from "react";
import Liya from "../assets/Liya.jpg";

const About = () => {
  return (
    <section className="border-bottom" id="about">
      <div className="about-me">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1>About me</h1>
          <p style={{ width: "629px" }}>
            Hi, I'm Liya, a junior frontend developer with React. I would like to 
            learn a lot more about React and gain experience working on many 
            different projects. I am willing to learn back-end as well and we'll see what 
            life will bring in further!
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                maxWidth: "500px",
                fontFamily: "Inter",
                fontWeight: 300,
                fontSize: "16px",
              }}
            >
              Front-End
            </p>
            <p
              style={{
                maxWidth: "500px",
                fontFamily: "Inter",
                fontWeight: 300,
                fontSize: "16px",
              }}
            >
              Back-End
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img src={Liya} />
        </div>
      </div>
    </section>
  );
};

export default About;
