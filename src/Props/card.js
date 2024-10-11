import React from "react";
import { Button, Card } from "react-bootstrap";

function Card_Compect({title,des,for_click}) {
  const my_function = () => {
    for_click(title);
  };
  return (
    <div className="">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://img.uefa.com/imgml/TP/teams/logos/240x240/50051.png"
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{des}</Card.Text>
          <Button onClick={my_function} variant="primary">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Card_Compect;
