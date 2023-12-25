import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const modal = (props) => {
  const [list, setList] = useState({
    title: "",
    desc: "",
  });
  console.log(props);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setList((li) => ({ ...li, [name]: value }));
  };
  const handleSubmit = () => {
    props.handleSubmit(list);
  };
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            onChange={handleChange}
            name="title"
            required
            placeholder="Title"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            onChange={handleChange}
            name="desc"
            required
            placeholder="Description"
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default modal;
