import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Dashboard from "./dashboard";
import Products from "./products";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from 'react-bootstrap/Tabs';
import Nav from 'react-bootstrap/Nav';
import { loggedUser } from "./redux/actionsReducer";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function header() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    // localStorage.removeItem("LoggedUser");
    dispatch(loggedUser(""));
    navigate("/")
  };

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <Row>
      <Col sm={12}>
        <Nav className="flex-row header">
          <Nav.Item>
            <Nav.Link eventKey="first" href="#">
              Dashboard
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second" href="#">
             Products
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="logout" onClick={handleLogout}>
            Logout
          </Nav.Item>
        </Nav>
      </Col>
      <Col sm={12}>
        <Tab.Content>
          <Tab.Pane eventKey="first">
            <Dashboard />
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <Products />
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
    
    
  );
}

export default header;
