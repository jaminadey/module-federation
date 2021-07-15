import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Hero from "./Hero";

const Header = () => (
  <div style={{ height: 80 }}>
    <Link to="/">       
      <span style={{ display: "inline-block", marginTop: 26, marginLeft: 12 }}>Insure Co</span>
    </Link>
    <div style={{ float: "right", marginTop: 22 }}>
      <Button variant="outline-secondary">Your Account</Button>
      <Button variant="outline-secondary" style={{ marginLeft: 10 }}>Logout</Button>
    </div>
  </div>
);

export default Header;