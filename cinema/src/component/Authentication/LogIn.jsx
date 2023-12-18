import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { Form, Button, Card, Alert } from "react-bootstrap"
import "./styleAuth.css"
import {Link} from "react-router-dom"

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
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
                    <h1 className="text-center mb-4">Log In</h1>
                    <Form onSubmit={signIn}>
                    
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
                            <Form.Label>Password</Form.Label>
                            <Form.Control className="inputs"
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="underline"></div>
                        </Form.Group>
                        <div className="submit-container">
                            <div className="sub-button"><Link to={"/"}><button type="submit">Log in</button></Link></div>
                        </div>
                    </Form>
                        <div className="sub-infor"><h6>Don't have an account yet?</h6></div>
                        <div className="sign-container">
                            <div className="sign-button"><Link to={"/signup"}><button type="submit">Sign Up</button></Link></div>
                        </div>
                </Card.Body>
            </Card>
        </body>
    </div>
  );
};

export default SignIn;