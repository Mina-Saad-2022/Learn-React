import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Hook_usestate = () => {
  const [count, setcount] = useState(0);
  const Supply = () => {
    setcount(count + 1);
  };
  const Decrease = () => {
    setcount(count - 1);
  };

  const [text, settext] = useState("");
  const [test, setTest] = useState("مرحبا");
  const [isVisible, setIsVisible] = useState(false);

  const type = (event) => {
    settext(event.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>examples for use 'useState' ...</h2>
        </div>

        <div className="col-12 col-lg-5 border p-2 m-1">
          <div className="col-12">
            <h5>Add or decrease the number </h5>
          </div>
          <div className="row">
            <div className="col-3 text-center">
              <Button className="w-50" onClick={Supply} variant="success">
                <h3>+</h3>
              </Button>
            </div>
            <div className="col-4 text-center">
              <p> count is : {count}</p>
            </div>
            <div className="col-3 text-center">
              <Button className="w-50" onClick={Decrease} variant="danger">
                <h3>-</h3>
              </Button>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-5 border p-2 m-1">
          <div className="col-12">
            <h5>change text Based on what is written in input</h5>
          </div>
          <div className="row">
            <div className="col-6">
              <Form.Control type="text" onChange={type} />
            </div>
            <div className="col-6">{text}</div>
          </div>
        </div>

        <div className="col-12 col-lg-5 border p-2 m-1">
          <div className="col-12">
            <h5>Text switching </h5>
          </div>
          <Button
            className="w-50"
            variant="warning"
            onClick={() => setTest(test === "مرحبا" ? "وداعا" : "مرحبا")}
          >
            تبديل النص
          </Button>
          <p>{test}</p>
        </div>

        <div className="col-12 col-lg-5 border p-2 m-1">
          <div className="col-12">
            <h5>Show and hide text </h5>
          </div>
          <Button
            variant="info"
            className="w-50"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? "إخفاء النص" : "إظهار النص"}
          </Button>
          {isVisible && <p>هذا النص يمكن إظهاره وإخفاؤه</p>}
        </div>
      </div>
    </div>
  );
};

export default Hook_usestate;
