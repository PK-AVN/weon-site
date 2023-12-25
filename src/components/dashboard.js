import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "./modal";
import { useSelector, useDispatch } from "react-redux";
import { addToDo } from "./redux/actionsReducer";
import Utilities from "./utilities";
import "./App.css";
import Button from "react-bootstrap/Button";

const Dashboard = () => {
  const out = useSelector((state) => state.todos);
  console.log("fromStore", out);
  const util = Utilities();
  const [show, setShow] = useState(false);
  const [todoList, setTodoList] = useState(util.getUsers(out.loggedUser));
  const [todo, setTodo] = useState([]);
  const [inprogress, setInprogress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [tested, setTested] = useState([]);
  const [listId, setListId] = useState({});
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleAdd = (e) => {
    setListId({ id: e.target.id });
    setShow(true);
  };

  const handleSubmit = (item) => {
    let data = Object.assign(item, listId);
    setTodoList([...todoList, data]);
    dispatch(addToDo(data));
    setShow(false);
  };

  const handleDelete = (e) => {
    setTodoList(todoList.filter((idx) => idx.title !== e));
  };

  useEffect(() => {
    localStorage.setItem(out.loggedUser, JSON.stringify(todoList));
    setTodo(todoList && todoList.filter((idx) => idx.id == "todo"));
    setInprogress(todoList && todoList.filter((idx) => idx.id == "inProgress"));
    setCompleted(todoList && todoList.filter((idx) => idx.id == "completed"));
    setTested(todoList && todoList.filter((idx) => idx.id == "tested"));
  }, [todoList]);

  return (
    <Container fluid>
      <Row>
        <Col md={3} className="mt-3">
          <Card>
            <Card.Title className="card-title">TO DO</Card.Title>
            <Card.Body>
              {todo &&
                todo.map((idx, key) => (
                  <div className="d-flex justify-content-between list-bg mt-2">
                    <div key={key}>
                      <div className="list-head">{idx.title}</div>
                      <div className="list-desc">{idx.desc}</div>
                    </div>
                    <div onClick={() => handleDelete(idx.title)}>x</div>
                  </div>
                ))}
              <Button
                className="add"
                variant="primary"
                id="todo"
                onClick={handleAdd}
              >
                Add
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mt-3">
          <Card>
            <Card.Title className="card-title">IN Progress</Card.Title>
            <Card.Body>
              {inprogress &&
                inprogress.map((idx, key) => (
                  <div className="d-flex justify-content-between list-bg mt-2">
                    <div key={key}>
                      <div className="list-head">{idx.title}</div>
                      <div className="list-desc">{idx.desc}</div>
                    </div>
                    <div onClick={() => handleDelete(idx.title)}>x</div>
                  </div>
                ))}
              <Button
                className="add"
                variant="primary"
                id="inProgress"
                onClick={handleAdd}
              >
                Add
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mt-3">
          <Card>
            <Card.Title className="card-title">Completed</Card.Title>
            <Card.Body>
              {completed &&
                completed.map((idx, key) => (
                  <div className="d-flex justify-content-between list-bg mt-2">
                    <div key={key}>
                      <div className="list-head">{idx.title}</div>
                      <div className="list-desc">{idx.desc}</div>
                    </div>
                    <div onClick={() => handleDelete(idx.title)}>x</div>
                  </div>
                ))}
              <Button
                className="add"
                variant="primary"
                id="completed"
                onClick={handleAdd}
              >
                Add
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mt-3">
          <Card>
            <Card.Title className="card-title">Tested</Card.Title>
            <Card.Body>
              {tested &&
                tested.map((idx, key) => (
                  <div className="d-flex justify-content-between list-bg mt-2">
                    <div key={key}>
                      <div className="list-head">{idx.title}</div>
                      <div className="list-desc">{idx.desc}</div>
                    </div>
                    <div onClick={() => handleDelete(idx.title)}>x</div>
                  </div>
                ))}
              <Button
                className="add"
                variant="primary"
                id="tested"
                onClick={handleAdd}
              >
                Add
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal
        show={show}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
};

export default Dashboard;
