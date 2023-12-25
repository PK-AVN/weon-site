import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Utilities from "./utilities";
import { useNavigate } from "react-router-dom";
import BgImage from "../../asset/login_bg.jpg";
import Titleimage from "../../asset/logo.jpg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImageWrap from "./imageWrap";

const getUsers = () => {
  const user = localStorage.getItem("users");
  if (user) {
    return JSON.parse(user);
  } else {
    return [];
  }
};

function signUp() {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [item, setItem] = useState(getUsers());
  const [error, setError] = useState("");
  const [userCreated, setUserCreated] = useState(false);
  const util = Utilities();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let usersDet = userDetails;
    let emailValid = util.EmailValid(usersDet.email);
    let PasswordValid = util.PasswordValid(userDetails.password);
    let uniqueDatas = item.some(
      (it) => it.userName == usersDet.userName || it.email == usersDet.email
    );
    if (!uniqueDatas && emailValid && PasswordValid) {
      setItem([...item, usersDet]);
      setUserDetails({ userName: "", email: "", password: "" });
      setError("");
      setUserCreated(true);
    } else {
      setError("Username/Email was already taken not valid / Password must be 8 characters with a Special Character");
    }
  };

  const handleLogin = () => {
    navigate("/");
  };

  useEffect(() => {
    console.log("cameee");
    localStorage.setItem("users", JSON.stringify(item));
  }, [item]);

  //   useEffect(() => {
  //     localStorage.clear();
  //   }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md={6} style={{ padding: "8%" }}>
            <div className="text-center"> Welcome to</div>
            <div className="titleImage">
              <ImageWrap back={Titleimage} isTitle={true} />
            </div>
            <div className="text-center">
              Log in to get in the moment updates on the things that interests
              in you
            </div>
            {userCreated ? (
              <p className="text-center mt-5">
                user created <span onClick={handleLogin} className="text-info">Login</span>{" "}
              </p>
            ) : (
              <Form onSubmit={handleSubmit} className="mt-4">
                <Form.Group className="mb-3" controlId="formBasicName">
                  {/* <Form.Label>User Name</Form.Label> */}
                  <Form.Control
                    type="text"
                    name="userName"
                    className="form-field"
                    onChange={handleChange}
                    value={userDetails.userName}
                    placeholder="Enter Username"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control
                    type="email"
                    name="email"
                    className="form-field"
                    onChange={handleChange}
                    value={userDetails.email}
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  {/* <Form.Label>Password</Form.Label> */}
                  <Form.Control
                    type="password"
                    name="password"
                    className="form-field"
                    onChange={handleChange}
                    value={userDetails.password}
                    placeholder="Password"
                    required
                  />
                </Form.Group>
                <Button variant="primary"  className="buttonSubmit" type="submit">
                  SIGN UP
                </Button>
                {error && <p className="text-danger mt-2">{error}</p>}
              </Form>
            )}
          </Col>
          <Col md={6}>
            <ImageWrap back={BgImage} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default signUp;
