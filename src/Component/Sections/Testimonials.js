import React, { useEffect, useState } from "react";
import Carousel from "../Carousel";
import HeaderText from "../HeaderText";
import Man1 from "../../SourceFiles/Testimonials/man 1.jpg";
import Man2 from "../../SourceFiles/Testimonials/man 2.jpg";
import WoMan1 from "../../SourceFiles/Testimonials/woman 1.jpg";

function Testimonials() {
  const [Content, setContent] = useState([
    {
      id: 1,
      name: "Mrs. Lorem",
      status: "CEO Meme",
      img: Man1,
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont ln the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    },
    {
      id: 2,
      name: "Mrs. Dolor",
      status: "CEO Meme",
      img: WoMan1,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      id: 3,
      name: "Mrs. Ipsum",
      status: "CEO Meme",
      img: Man2,
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source",
    },
  ]);

  const [Turn, setTurn] = useState(1);

  const TurnPrev = () => {
    setTurn((prevState) => prevState - 1);
    if (Turn == 1) setTurn(Content.length);
  };
  const TurnNext = () => {
    if(Turn == Content.length) setTurn(1)
    else setTurn(prevState => prevState +1);
    console.log(Turn);
  };
  var Turnindex = 0;
  const TurnAuto = () => {
    setTurn(Turnindex)
  }
  useEffect(() => {
    const autoTurn = setInterval(() => {
      if ( Turnindex === Content.length){
        Turnindex = 1
      }
      else {
        Turnindex++
      }
      
      setTurn(Turnindex);

      console.log(Turnindex);
    }, 3000);
    return () => clearTimeout(autoTurn)
  },[]);

  return (
    <section id="testimonials">
      <div id="tstml-container">
        <HeaderText
          name="Testimonials"
          text="Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor
            aliquet"
            color = '#6c757d'
        />
        <div id="tstml-content" className="container">
          {Content.map((data) => {
            if (data.id === Turn) {
              return (
                <Carousel
                  key={data.id}
                  name={data.name}
                  status={data.status}
                  text={data.text}
                  img={data.img}
                  prev={TurnPrev}
                  next={TurnNext}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
