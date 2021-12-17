import React from "react";
import Button from "../Button";
import HeaderText from "../HeaderText";

function WwdGroupItem(props) {
  return (
      <div className="wwd-group-item">
        <div className="wwd-group-item-img flex">
          <img src={props.img} />
        </div>
        <HeaderText
          name={props.name}
          text={props.text}
        />
        <Button name="Learn More" />
      </div>
  );
}

export default WwdGroupItem;
