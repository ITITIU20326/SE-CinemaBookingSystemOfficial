import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap"
import { auth } from "../../firebase";
import {Link} from "react-router-dom"
import "./styleAuth.css"

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="main-body">
      <body>
      <Card className="card">
        <Card.Body>
        <h1 className="text-center mb-4">Sign Up</h1>
        <Form onSubmit={signUp}>
        
        <Form.Group className="input-header">
          <Form.Label>Phone number</Form.Label>
            <Form.Control className="inputs"
              type="phone"
              placeholder="Enter mobile phone number"
            />
            <div className="underline"></div>
        </Form.Group>

        <Form.Group className="input-header">
          <Form.Label>First name</Form.Label>
            <Form.Control className="inputs"
              type="firstname"
              placeholder="Enter first name"
            />
            <div className="underline"></div>
        </Form.Group>

        <Form.Group className="input-header">
          <Form.Label>Last name</Form.Label>
            <Form.Control className="inputs"
              type="last"
              placeholder="Enter last name"
            />
            <div className="underline"></div>
        </Form.Group>

        <Form.Group className="input-header">
          <Form.Label>Email</Form.Label>
            <Form.Control className="inputs"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="underline"></div>
        </Form.Group>

        <Form.Group className="input-header">
          <Form.Label> Password</Form.Label>
            <Form.Control className="inputs"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="underline"></div>
        </Form.Group>

        <Form.Group className="input-header">
          <Form.Label> Confirm password</Form.Label>
            <Form.Control className="inputs"
              type="password"
              placeholder="Enter password again"
            />
            <div className="underline"></div>
        </Form.Group>
        
          <div className="submit-container">
          <div className="sub-button"><Link to={"/"}><button type="submit">Sign Up</button></Link></div>
          </div>
        </Form>
        <div className="sub-infor"><h6>*Each phone number can only be registered once</h6></div>
      </Card.Body>
      </Card>
      </body>
    </div>
  );
};

export default SignUp;