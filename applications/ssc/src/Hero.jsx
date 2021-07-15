import React from "react";

const Hero = ({ heading, message }) => (
  <div style={{ backgroundColor: "#212529", height: 150, color: "white", padding: 20, paddingTop: 40 }}>
    <p style={{ textTransform: "uppercase", fontSize: "smaller", marginBottom: 0 }}>{heading}</p>
    <p style={{ fontSize: "xx-large" }}>{message}</p>
  </div>
);

export default Hero;