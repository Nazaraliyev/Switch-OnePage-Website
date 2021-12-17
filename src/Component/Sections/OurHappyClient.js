import React, { useState } from "react";
import HeaderText from "../HeaderText";
import Apple from "../../SourceFiles/Clients/apple.png";
import Asus from "../../SourceFiles/Clients/Asus.png";
import Ms from "../../SourceFiles/Clients/Ms.png";
import Intel from "../../SourceFiles/Clients/intel.png";
import Qualcom from "../../SourceFiles/Clients/qualcom.png";
import Yahoo from "../../SourceFiles/Clients/Yahoo.png";
import Cisco from "../../SourceFiles/Clients/cisco.png";
import Google from "../../SourceFiles/Clients/google.png";
import FlexBox from "../FlexBox";
import Button from "../Button";

function OurHappyClient() {
  const [Clients, setClients] = useState([
    {
      id: 1,
      link : 'https://www.google.com/',
      img: Google,
    },
    {
      id: 2,
      link : 'https://www.yahoo.com/?guccounter=1',
      img: Yahoo,
    },
    {
      id: 3,
      link : 'https://www.cisco.com/',
      img: Cisco,
    },
    {
      id: 4,
      link : 'https://www.asus.com/',
      img: Asus,
    },
    {
      id: 5,
      link : 'https://www.microsoft.com/en-us/',
      img: Ms,
    },
    {
      id: 6,
      link : 'https://www.apple.com/',
      img: Apple,
    },
    {
      id: 7,
      link : 'https://www.intel.com/content/www/us/en/homepage.html',
      img: Intel,
    },
    {
      id: 8,
      link : 'https://www.qualcomm.com/',
      img: Qualcom,
    },
  ]);
  return (
    <section id="our-happy-client">
      <div id="ohc-container" className="container">
        <HeaderText
          name="Our Happy Clients"
          text="Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor
            aliquet"
            color = '#6c757d'
        />
        <div id="ohc-item-container" className="flex">
          {Clients.map((item) => {
            return (
              <div className = 'ohc-item flex'>
                <FlexBox key={item.id} img={item.img} link = {item.link} />
              </div>
            )
          })}
        </div>
        <Button name = 'See All Client'/>
      </div>
    </section>
  );
}

export default OurHappyClient;
