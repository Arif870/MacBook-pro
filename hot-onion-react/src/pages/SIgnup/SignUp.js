import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Signup.css";
import logosignup from "../../utilities/images/logo2.png";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="signup ">
      <img className="mx-auto d-block" src={logosignup} alt="" />
      <Form className=" mx-auto">
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Control placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Control type="password" placeholder="Repeat password" />
        </Form.Group>

        <Button className="btn " type="submit">
          SignUp
        </Button>
      </Form>
      <Link to="login">
        <small className="text-center d-block mt-4">
          Already have an account?
        </small>
      </Link>
    </div>
  );
}
