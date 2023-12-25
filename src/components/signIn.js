import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { loggedUser } from "./redux/actionsReducer";
import { useSelector, useDispatch } from "react-redux";
import BgImage from "../../asset/login_bg.jpg";
import Titleimage from "../../asset/logo.jpg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImageWrap from "./imageWrap";

function signIn() {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    password: "",
  });

  const [userDatas, setUserDatas] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((user) => ({ ...user, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let LoggedUser = userDatas.some(
      (usr) =>
        (usr.userName == userDetails.userName &&
          usr.password == userDetails.password) ||
        (usr.email == userDetails.userName &&
          usr.password == userDetails.password)
    );
    if (LoggedUser) {
      navigate("/dash");
      let LoggedPerson = userDatas.filter(
        (itx) =>
          itx.userName == userDetails.userName ||
          itx.email == userDetails.userName
      );
      console.log(LoggedPerson);
      dispatch(loggedUser(LoggedPerson[0].userName));
    }else{
      setError("Username/password not valid")
    }
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("users"));
    setUserDatas(user);
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col md={6} style={{ padding: "8%" }}>
          <div className="text-center"> Welcome to</div>
          <div className="titleImage">
            <ImageWrap back={Titleimage} isTitle={true} />
          </div>
          <div className="text-center">
            Log in to get in the moment updates on the things that interests in
            you
          </div>
          <Form onSubmit={handleSubmit} className="mt-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                type="text"
                name="userName"
                className="form-field"
                onChange={handleChange}
                value={userDetails.userName}
                placeholder="UserName/Email"
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
            <Button className="buttonSubmit" type="submit">
              SIGN IN
            </Button>
          </Form>
          {error && <p className="text-danger mt-2">{error}</p>}
          <div className="text-center mt-3 ">
            Don't have Account?
            <span className="signUpLink" onClick={handleSignUp}>
              Sign up Now
            </span>
          </div>
        </Col>
        <Col md={6}>
          <ImageWrap back={BgImage} />
        </Col>
      </Row>
    </Container>
  );
}

export default signIn;
