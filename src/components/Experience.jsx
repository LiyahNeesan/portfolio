import React from "react";

const experience = [
  {
    year: "Mar 2023 - present days",
    job: "Intern",
    location: "DataArt (Almaty, Kazakhstan)",
    description:
      "Initial Twitter app",
  },
  {
    year: "Oct 2022 - Feb 2023",
    job: "Student at programming school",
    location: "online platform",
    description:
      "SQL, Java cources",
  },
];

const Experience = () => {
  return (
    <section className="border-bottom" id="experience">
      <div className="experience">
        <h1 style={{ paddingTop: "100px", paddingBottom: "100px" }}>
          Experience
        </h1>
        <div>
          {experience.map((el) => {
            return (
              <div style={{ display: "flex" }}>
                <p style={{ width: "200px" }}>{el.year}</p>
                <div style={{ paddingLeft: "100px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      width="20"
                      height="20"
                      src={require("../assets/Pointer.png")}
                    />
                    <p style={{ paddingLeft: "10px" }}>{el.job}</p>
                  </div>
                  <div>{el.location}</div>
                  <p style={{ fontWeight: 300 }}>{el.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
