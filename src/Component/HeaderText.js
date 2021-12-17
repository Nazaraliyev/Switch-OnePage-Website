import React,{useState} from "react";

function HeaderText(props) {
  const [Color, setColor] = useState({
    style : {
      color : props.color,
      borderColor : props.color
    }
  })
  return (
      <div className="header-text" style = {Color.style}>
        <h1>
          {props.name}
          <br />
          <hr className = 'header-text-line' style = {Color.style} />
        </h1>
        <h2>
            {props.text}
        </h2>
      </div>
  );
}

export default HeaderText;
