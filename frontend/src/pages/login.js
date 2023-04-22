import axios from "axios";
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { FormGroup } from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Login = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('isAuthenticated') === 'true') navigate("/itemlist");
  }, [navigate]);

  const submitLogin = (event) => {
    event.preventDefault();
    var object = {};
    const formdata = new FormData(event.target);
    formdata.forEach((value, key) => object[key] = value);
    var json = JSON.stringify(object);


    axios.post('http://localhost:5000/shoppinglist/auth/login', json, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })
      .then(res => {
        localStorage.setItem('isAuthenticated', true);
        navigate("/itemlist");
      })
  }



  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Form onSubmit={submitLogin}>
              <FormGroup>
                <Form.Label> Username</Form.Label>
                <Form.Control type="text" name="username" />
              </FormGroup>
              <FormGroup>
                <Form.Label> Password</Form.Label>
                <Form.Control type="password" name="password" />
              </FormGroup>
              <Button variant="dark" type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;