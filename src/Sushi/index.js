import React from "react";
import SushiSVG from "../images/sushi.svg";

const Sushi = ({ start = 0 }) => {
  const [sushi, setSushi] = React.useState(start);
  const [width, setWidth] = React.useState("80px");

  const handleClick = () => {
    setSushi(sushi + 1);
  };
  return (
    <div>
      <h1>Welcome to webpack sushi cliker!!</h1>
      <SushiSVG
        style={{ cursor: "pointer" }}
        onClick={handleClick}
        width={width}
      />
      <p>You have {sushi} Sushis!</p>
    </div>
  );
};

export default Sushi;
