import React from "react";
import cook1 from "../../../utilities/images/Image/adult-blur-blurred-background-687824.png";
import cook2 from "../../../utilities/images/Image/chef-cook-food-33614.png";
import cook3 from "../../../utilities/images/Image/architecture-building-city-2047397.png";
import { Card } from "react-bootstrap";
import "./Chooseus.css";
import icon1 from "../../../utilities/images/ICON/Group 204.png";
import icon2 from "../../../utilities/images/ICON/Group 1133.png";
import icon3 from "../../../utilities/images/ICON/Group 245.png";

export default function Chooseus() {
  return (
    <div className=" mt-5 container">
      <h1 className="fw-normal text-center">Why you choose us</h1>

      <p className="fw-light text-center">
        We have expert cooks and dedicated employee. Our core service is home
        delivery
      </p>
      <div className="d-flex mt-5 justify-content-center flex-wrap align-items-center">
        <Card className="m-3">
          <Card.Img className="w-100 mx-auto" variant="top" src={cook1} />
          <Card.Body>
            <div className="d-flex align-items-center">
              <img src={icon1} alt="" />
              <p className="mb-0 ms-2">First Delivery</p>
            </div>
            <Card.Text className="fw-light fs-6 ms-5 mt-2">
              orem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
              et!
            </Card.Text>
            <button className="btn d-block w-100">Read more</button>
          </Card.Body>
        </Card>
        <Card className="m-3">
          <Card.Img className="w-100 mx-auto" variant="top" src={cook2} />
          <Card.Body>
            <div className="d-flex align-items-center">
              <img src={icon2} alt="" />
              <p className="mb-0 ms-2">A good auto responder</p>
            </div>
            <Card.Text className="fw-light fs-6 ms-5 mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
              et!
            </Card.Text>
            <button className="btn d-block w-100">Read more</button>
          </Card.Body>
        </Card>
        <Card className="m-3 ">
          <Card.Img className="w-100 mx-auto" variant="top" src={cook3} />
          <Card.Body>
            <div className="d-flex align-items-center">
              <img src={icon3} alt="" />
              <p className="mb-0 ms-2">Home delivery</p>
            </div>
            <Card.Text className="fw-light fs-6 ms-5 mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
              et!
            </Card.Text>
            <button className="btn d-block w-100">Read more</button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
