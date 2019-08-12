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
      <div className="second-container">
        <div style={{ width: "30%" }}>
          <h2>
            A friendly to receive <br />
            payments
          </h2>
          <hr
            style={{
              height: 6,
              width: "50%",
              backgroundColor: "#d3a5b0",
              borderWidth: 0,
              marginLeft: 0
            }}
          />
          <div style={{ color: "#95a5a6" }}>
            Tihree to four lines of randam text explaining payment system and
            advantages, and some other details so that write now i didn't think
            of it yet fill this up later.
          </div>
        </div>
        <img
          src={placeHolder}
          alt="dasborad image"
          width="33%"
          style={{ marginRight: "11%" }}
        />
      </div>
    </div>
  );
};
export default withRouter(Body);
