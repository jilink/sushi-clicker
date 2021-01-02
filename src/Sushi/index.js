import React from "react";
import SushiSVG from "../images/sushi.svg";
import { UserContext } from "../UserContext";

const Sushi = () => {
  const [width, setWidth] = React.useState("90px");

  const { user, setUser } = React.useContext(UserContext);

  const handleClick = () => {
    setUser({ ...user, sushi: user.sushi + 1 });
    setWidth("80px");
    setTimeout(() => setWidth("90px"), 50);
  };
  return (
    <div
      style={{
        textAlign: "center",
        MozUserSelect: "none",
        WebkitUserSelect: "none",
        msUserSelect: "none",
      }}
    >
      <h1>Welcome to webpack sushi cliker!!</h1>
      <div style={{ minHeight: "100px" }}>
        <SushiSVG
          style={{ cursor: "pointer" }}
          onClick={handleClick}
          width={width}
        />
      </div>
      <p>
        You have <h2>{Math.trunc(user.sushi)}</h2> Sushis!
      </p>
      <hr />
      <p>
        Automatic Click per secondes : <h3>{user.cps.toFixed(1)}</h3>
      </p>
      <hr />
    </div>
  );
};

export default Sushi;
