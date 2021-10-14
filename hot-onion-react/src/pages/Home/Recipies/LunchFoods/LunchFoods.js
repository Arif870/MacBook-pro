import React from "react";
import { Card } from "react-bootstrap";

export default function LunchFoods(props) {
  const { name, photo, price, details } = props.lunchFoods;
  return (
    <Card className="m-3">
      <Card.Img className="w-75 mx-auto" variant="top" src={photo} />
      <Card.Body>
        <Card.Title className="fw-normal">{name}</Card.Title>
        <Card.Text className="fw-light fs-6">{details.slice(0, 30)}</Card.Text>
        <h2 className="fw-light">${price}</h2>
      </Card.Body>
    </Card>
  );
}
