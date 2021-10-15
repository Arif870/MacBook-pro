import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logologin from "../../utilities/images/logo2.png";
import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <img className="mx-auto d-block" src={logologin} alt="" />
      <Form className=" mx-auto">
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button className="btn " type="submit">
          Login
        </Button>
      </Form>
      <Link to="signup">
        <small className="text-center d-block mt-4">New in red onion?</small>
      </Link>
    </div>
  );
}
