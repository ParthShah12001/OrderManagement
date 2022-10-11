import React from "react";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const Login = () => {
    navigate("/login");
  };
  return (
    <div
      style={{
        paddingTop: "5%"
      }}
    >
      <Card
        style={{
          display: "block",
          width: 700,
          paddingTop: 50,
          margin: "auto",
          backgroundColor: "rgb(194 194 194)"
        }}
      >
        <h1 align="center">Welcome to Order Management</h1>
        <br></br>
        <img
          src={require("../Images/img.jpg")}
          style={{
            height: "20%",
            width: "40%",
            display: "block",
            margin: " auto",
            /* left: auto; */
            marginLeft: "auto"
          }}
        />

        <div
          class="col-md-12 text-center"
          className="d-flex flex-row mt-2"
          style={{ paddingTop: "4%" }}
        >
          <Button onClick={Login} variant="dark" style={{ marginLeft: "50%" }}>
            Login
          </Button>
          <br />
        </div>
        <br />
      </Card>
    </div>
  );
}

export default Home;
