import React,{useState} from "react";
import HeaderText from '../HeaderText'
import FlexBox from '../FlexBox';
import Cnn from "../../SourceFiles/Footer/As Soon On/Cnn.png";
import Cnbc from "../../SourceFiles/Footer/As Soon On/Cnbc.png";
import Bbc from "../../SourceFiles/Footer/As Soon On/Bbc.png";
import  Cbc from "../../SourceFiles/Footer/As Soon On/Cbc.png";


function AsSoonOn() {
    const [AsoLogo, setRePost] = useState([
        {
            id : 1,
            name : 'CNN',
            img : Cnn
        },
        {
            id : 1,
            name : 'BBC',
            img : Bbc
        },
        {
            id : 1,
            name : 'CNBC',
            img : Cnbc
        },
        {
            id : 1,
            name : 'CBC',
            img : Cbc
        }
    ])
  return (
    <div id = 'as-soon-on-container'>
      <div id="as-soon-on">
        <div id="aso-wrapper"></div>
        <div className="container">
          <HeaderText name="As Seen On" />
          <div id="aso-content" className="flex">
            {AsoLogo.map((item) => {
              return <FlexBox img={item.img} />;
            })}
          </div>
        </div>
      </div>
      <div id= 'author-div'>
      <a
        id="author"
        href="https://www.linkedin.com/in/nazar-nazaraliyev-911123211"
        target="_blank"
      >
        Made by Nazaraliyev
      </a>
      </div>

    </div>
  );
}

export default AsSoonOn;
