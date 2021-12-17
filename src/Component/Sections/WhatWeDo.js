import React from "react";
import Button from "../Button";
import HeaderText from "../HeaderText";
import Key from "../../SourceFiles/WhatWeDo/Key.png";
import Speed from "../../SourceFiles/WhatWeDo/Speed.png";
import Stopwatch from "../../SourceFiles/WhatWeDo/Stopwatch.png";
import WwdGroupItem from "./WwdGroupItem";

function WhatWeDo() {
  return (
    <section id="what-we-do">
      <div id="wwd-container" className="container">
        <HeaderText
          name="What We Do?"
          text="         Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor
            aliquet"
            color = '#6c757d'
        />
        <div id="wwd-group-flex" className="flex">
        <WwdGroupItem img = {Key} name = 'Safe' text  = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literlege in Virginia'/>
        <WwdGroupItem img = {Speed} name = 'Speed' text  = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literlege in Virginia'/>
        <WwdGroupItem img = {Stopwatch} name = 'Time' text  = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literlege in Virginia'/>

        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
