import React from "react";
import creatorArt from "../Assest/PinClipart.com_microphone-images-clip-art_201802.png";
import "./Body.css";
import placeHolder from "../Assest/joanna-kosinska-1_CMoFsPfso-unsplash.jpg";
import { withRouter } from "react-router-dom";

const Body = props => {
  return (
    <div className="whole-body">
      <div className="first-container">
        <img src={creatorArt} width="40%" />
        <div className="first-container-text">
          <h1 className="mUD-4">
            Get The Love Support your <br />
            Work Deserve.
          </h1>
          <div className="muD-4" style={{ color: "#95a5a6" }}>
            A fast and effective way for creator to get the support for their
            work
          </div>
          <button
            className="body-create-button"
            onClick={() => props.history.push({ pathname: "signup" })}
          >
            Start my Page
          </button>
          <div
            style={{
              fontSize: "75%",
              marginBottom: "4%",
              marginLeft: "1.5%",
              color: "#abb7b7"
            }}
          >
            Takes less than a minute
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Body);
