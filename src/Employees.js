import { Form, Row, Col, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee, modifyEmployee } from "./redux/employeesSlice";

function Employees() {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  const [id, setID] = useState();
  const [name, setName] = useState();
  const [birthYear, setBirthYear] = useState();
  const [gender, setGender] = useState();
  const [show, setShow] = useState(false);
  const [prevID, setPrevID] = useState();
  const handleClose = () => setShow(false);

  const handleDeleteClick = (employee) => {
    dispatch(deleteEmployee({ id: employee.id }));
  };

  const handleModifyClick = (employee) => {
    setPrevID(employee.id);
    setID(employee.id);
    setName(employee.name);
    setBirthYear(employee.birthYear);
    setGender(employee.gender);
    setShow(true);
  };

  const handleSaveModify = () => {
    dispatch(modifyEmployee(
      { prevID: prevID,
        id: id, 
        name: name,
        gender: gender,
        birthYear: birthYear}
    ));
    setShow(false);
  }

  return (
    <Form style={{ padding: "5px 2%" }}>
      <Row>
        <Form.Label as={Col}>ID</Form.Label>
        <Form.Label as={Col}>Name</Form.Label>
        <Form.Label as={Col}>BirthYear</Form.Label>
        <Form.Label as={Col}>Gender</Form.Label>
        <Col></Col>
      </Row>
      {employees.map((employee) => (
        <Row key={employee.id}>
          <Form.Label as={Col}>{employee.id}</Form.Label>
          <Form.Label as={Col}>{employee.name}</Form.Label>
          <Form.Label as={Col}>{employee.birthYear}</Form.Label>
          <Form.Label as={Col}>{employee.gender}</Form.Label>
          <Col
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Button
              onClick={() => {
                handleModifyClick(employee);
              }}
              size="sm"
              variant="primary"
            >
              Modify
            </Button>
            <Button
              onClick={() => {
                handleDeleteClick(employee);
              }}
              size="sm"
              variant="danger"
            >
              Delete
            </Button>
          </Col>
        </Row>
      ))}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modify</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col>
            <Form.Label>ID</Form.Label>
            <Form.Control
              onChange={(event) => setID(event.target.value)}
              type="text"
              defaultValue={`${id}`}
            />
          </Col>
          <Col>
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(event) => setName(event.target.value)}
              type="text"
              defaultValue={`${name}`}
            />
          </Col>
          <Col>
            <Form.Label>BirthYear</Form.Label>
            <Form.Control
              onChange={(event) => setBirthYear(event.target.value)}
              type="text"
              defaultValue={`${birthYear}`}
            />
          </Col>
          <Col>
            <Form.Label>Gender</Form.Label>
            <Form.Control
              onChange={(event) => setGender(event.target.value)}
              type="text"
              defaultValue={`${gender}`}
            />
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveModify}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
}

export default Employees;
