import React from "react";

const SecondContainer = props => {
  return (
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
          advantages, and some other details so that write now i didn't think of
          it yet fill this up later.
        </div>
      </div>
      <img
        src={placeHolder}
        alt="dasborad image"
        width="33%"
        style={{ marginRight: "11%" }}
      />
    </div>
  );
};

export default SecondContainer;
