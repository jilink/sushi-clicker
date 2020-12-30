import React from "react";
import Sushi from "./images/sushi.svg";

const App = () => {
  const [sushi, setSushi] = React.useState(0);
  const [width, setWidth] = React.useState("80px");

  const handleClick = () => {
    setSushi(sushi + 1);
  };
  return (
    <div>
      <h1>Welcome to webpack sushi cliker!!</h1>
      <Sushi
        style={{ cursor: "pointer" }}
        onClick={handleClick}
        width={width}
      />
      <p>You have {sushi} Sushis!</p>
    </div>
  );
};

export default App;
