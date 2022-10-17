import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from 'primereact/toast';

import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";

import "./login.css";
import { Card, CardGroup, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";

export const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const toast: any = useRef(null);

  const showError = () => {
    toast.current.show({ severity: 'error', summary: 'Login Failed', detail: 'Username & Password required!', life: 5000 });
  }

  const handleLogin = () => {
    if (username !== '' && password !== '') {
      navigate("/");
    } else {
      showError();
    }

  }

  return (
    <>
      <div className="login-container">
        <Card className="login-card">
          <Card.Header className="d-flex flex-row justify-content-center">
            <h1 className="login-title">Login Here</h1>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder="Enter Email Address" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder="Enter Password" />
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer className="d-flex flex-row justify-content-center">
            <Button className="login-button">Login</Button>
          </Card.Footer>
        </Card>
      </div>
    </>
  );
};
