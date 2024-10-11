import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card_Compect from "./card.js";

function App_Card() {
  const first_function = (message) => {
    console.log("This is for file app " + message);
  };

  const data = [
    { title: "Title 1", des: "Description 1" },
    { title: "Title 2", des: "Description 2" },
    { title: "Title 3", des: "Description 3" },
  ];

  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 p-2" key={index}>
            <Card_Compect
              for_click={first_function}
              title={item.title}
              des={item.des}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App_Card;
