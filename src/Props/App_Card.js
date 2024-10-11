/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card_Compect from "./card.js";

function App_Card() {
  const first_function = (meassage) => {
    console.log("this is for file app " + meassage);
  };
  const data = [
    { title: "title_1", des: "dis_1" },
    { title: "title_2", des: "dis_2" },
    { title: "title_3", des: "dis_3" },
    
  ];
  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => (
          <div className="col-lg-4 col-12 p-2">
            <Card_Compect
              for_click={first_function}
              key={index}
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
