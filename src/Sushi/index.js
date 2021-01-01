import React from "react";
import SushiSVG from "../images/sushi.svg";
import { UserContext } from "../UserContext";

const Sushi = () => {
  const [width, setWidth] = React.useState("80px");

  const { user, setUser } = React.useContext(UserContext);

  const handleClick = () => {
    setUser({ ...user, sushi: user.sushi + 1 });
  };
  return (
    <div>
      <h1>Welcome to webpack sushi cliker!!</h1>
      <SushiSVG
        style={{ cursor: "pointer" }}
        onClick={handleClick}
        width={width}
      />
      <p>You have {user.sushi} Sushis!</p>
      <p>Automatic Click per secondes : {user.cps}</p>
    </div>
  );
};

export default Sushi;
