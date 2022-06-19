import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { addEmployee } from './redux/employeesSlice.js'

function AddEmployee() {
  const [id, setID] = useState();
  const [name, setName] = useState();
  const [birthYear, setBirthYear] = useState();
  const [gender, setGender] = useState();


  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addEmployee({
        id: id,
        name: name,
        birthYear: birthYear,
        gender: gender,
      })
    );
  }


  return (
    <Form style={{ padding: "5px 2%" }}>
      <Row>
        <Col>
          <Form.Label>ID</Form.Label>
          <Form.Control onChange={(event) => setID(event.target.value)} type="text" placeholder="20127447" />
        </Col>
        <Col>
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={(event) => setName(event.target.value)} type="text" placeholder="Ngô Đức Bảo" />
        </Col>
        <Col>
          <Form.Label>BirthYear</Form.Label>
          <Form.Control onChange={(event) => setBirthYear(event.target.value)} type="text" placeholder="2002" />
        </Col>
        <Col>
          <Form.Label>Gender</Form.Label>
          <Form.Control onChange={(event) => setGender(event.target.value)} type="text" placeholder="male" />
        </Col>
        <Button 
          style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}
          as={Col} 
          onClick={handleSubmit}
          variant="primary"
          >
            Add
        </Button>
      </Row>
    </Form>
  );
}

export default AddEmployee