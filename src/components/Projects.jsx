import React from "react";
import twitterPic from "../assets/twitter.png";
import ReactPic from "../assets/image-4.png";

const Projects = () => {
  return (
    <section className="border-bottom" id="projects">
      <div className="projects-page">
        <h1 style={{ paddingTop: "100px" }}>Projects I’ve Worked On</h1>
        <div>
          <div
            style={{
              display: "flex",
              paddingTop: "100px",
              justifyContent: "space-between",
            }}
          >
            <img src={twitterPic} width="650" height="400" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "100px",
              }}
            >
              <h2 style={{ fontSize: "40px", margin: 0 }}>Twitter-clone app</h2>
              <p style={{ maxWidth: "500px" }}>
                I decided to start from Twitter clone, as this was something new for me. 
                I have never used twitter account. Probably, will start now, lol.
              </p>
              <p
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "200",
                }}
              >
                This Twiiter Clone App represents the initial page created by me as a 
                beginning. I believe that the more I practice, the more I sharpen my skills.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              paddingTop: "100px",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingRight: "100px",
              }}
            >
              <h2 style={{ fontSize: "40px", margin: 0 }}>Back-End start</h2>
              <p
                style={{
                  maxWidth: "500px",
                }}
              >
                After learning Front End development, I want to focus on 
                learning Back-End, for full image of FullStack. 
              </p>
              <p
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "200",
                }}
              >
                For better performance I will attach my Back-End projects on Node.js 
                on my portfolio soon, once I finish my cources.
              </p>
            </div>
            <img src={ReactPic} width="650" height="400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
