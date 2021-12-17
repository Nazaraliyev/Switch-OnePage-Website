import React, { useState } from "react";
import HeaderText from "../HeaderText";
import P1 from "../../SourceFiles/Work/Photography/p1.jpg";
import P2 from "../../SourceFiles/Work/Photography/p2.jpg";
import P3 from "../../SourceFiles/Work/Photography/p3.jpg";
import P4 from "../../SourceFiles/Work/Photography/p4.jpg";
import P5 from "../../SourceFiles/Work/Photography/p5.jpg";
import P6 from "../../SourceFiles/Work/Photography/p6.jpg";
import P7 from "../../SourceFiles/Work/Photography/p7.jpg";
import P8 from "../../SourceFiles/Work/Photography/p8.jpg";
import P9 from "../../SourceFiles/Work/Photography/p9.jpg";
import P10 from "../../SourceFiles/Work/Photography/p10.jpg";
import FlexBox from "../FlexBox";
import Button from "../Button";

function OurLastestWork() {
  const [operation, setoperation] = useState({
    name: "Design",
  });

  const OperationPhoto = () => {
    setoperation({
      name: "Photography",
    });
  };

  const OperationDesign = () => {
    setoperation({
      name: "Design",
    });
  };

  const OperationPrint = () => {
    setoperation({
      name: "Print",
    });
  }
  const [Data, setData] = useState([
    {
      name: "Photography",
      funk : OperationPhoto,
      data: [
        {
          id: 1,
          img: P1,
          name: "T",
        },
        {
          id: 2,
          img: P2,
          name: "H",
        },
        {
          id: 3,
          img: P3,
          name: "A",
        },
        {
          id: 2,
          img: P4,
          name: "N",
        },
        {
          id: 2,
          img: P5,
          name: "K",
        },
        {
          id: 2,
          img: P6,
          name: " ",
        },
        {
          id: 2,
          img: P7,
          name: "Y",
        },
        {
          id: 2,
          img: P8,
          name: "O",
        },
        {
          id: 2,
          img: P9,
          name: "U",
        },
        {
          id: 2,
          img: P10,
          name: " ",
        },
      ],
    },
    {
      name: "Design",
      funk : OperationDesign,
      data: [
        {
          id: 1,
          img: P2,
          name: "T",
        },
        {
          id: 2,
          img: P1,
          name: "H",
        },
        {
          id: 3,
          img: P9,
          name: "A",
        },
        {
          id: 2,
          img: P5,
          name: "N",
        },
        {
          id: 2,
          img: P4,
          name: "K",
        },
        {
          id: 2,
          img: P7,
          name: " ",
        },
        {
          id: 2,
          img: P8,
          name: "Y",
        },
        {
          id: 2,
          img: P6,
          name: "O",
        },
        {
          id: 2,
          img: P10,
          name: "U",
        },
        {
          id: 2,
          img: P3,
          name: " ",
        },
      ],
    },
    {
      name: "Print",
      funk : OperationPrint,
      data: [
        {
          id: 1,
          img: P10,
          name: "T",
        },
        {
          id: 2,
          img: P8,
          name: "H",
        },
        {
          id: 3,
          img: P7,
          name: "A",
        },
        {
          id: 2,
          img: P9,
          name: "N",
        },
        {
          id: 2,
          img: P1,
          name: "K",
        },
        {
          id: 2,
          img: P3,
          name: " ",
        },
        {
          id: 2,
          img: P2,
          name: "Y",
        },
        {
          id: 2,
          img: P4,
          name: "O",
        },
        {
          id: 2,
          img: P5,
          name: "U",
        },
        {
          id: 2,
          img: P6,
          name: " ",
        },
      ],
    },
  ]);
  return (
    <section id="our-lastest-works">
      <div id="olw-container" className="container">
        <HeaderText
          name="Our Lastest Works"
          text="Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor
            aliquet"
            color = '#006400'
        />
        <div id="olw-category" className="flex">
          <div id="olw-category-button-group">
            {Data.map((category) => {
              if (operation.name == category.name) {
                return (
                  <button
                    className="olw-category-button olw-selected"
                    onClick={category.funk}
                  >
                    {category.name}
                  </button>
                );
              }else{
                return (
                  <button
                    className="olw-category-button"
                    onClick={category.funk}
                  >
                    {category.name}
                  </button>
                );
              }
            })}
          </div>
        </div>
        <div id="old-itm-container">
          {Data.map((item) => {
            if (operation.name === item.name) {
              return (
                <div id="olw-item" className="flex">
                  {item.data.map((it) => {
                    return <FlexBox key={it.id} img={it.img} name={it.name} />;
                  })}
                </div>
              );
            }
          })}
        </div>
        <Button name="View more work" />
      </div>
    </section>
  );
}

export default OurLastestWork;
