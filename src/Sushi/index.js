import React from "react";
import SushiSVG from "../images/sushi.svg";
import { UserContext } from "../UserContext";

import "./styles.css";

const Sushi = () => {
  const [width, setWidth] = React.useState("90px");
  const [clicked, setClicked] = React.useState(false);
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });

  const { user, setUser } = React.useContext(UserContext);

  const updateMousePosition = (ev) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  React.useEffect(() => {
    addEventListener("mousemove", updateMousePosition);
  }, []);

  const handleClick = () => {
    setUser({ ...user, sushi: user.sushi + user.click });
    setWidth("80px");
    setClicked(true);
    setTimeout(() => {
      setWidth("90px");
    }, 50);
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
      <div
        className="main-sushi"
        style={{ minHeight: "100px" }}
        onClick={handleClick}
      >
        <p
          style={{
            top: `${mousePosition.y - 20}px`,
            left: `${mousePosition.x}px`,
          }}
          hidden={false}
          className="mouseClick"
        >
          +{user.click}
        </p>
        <SushiSVG style={{ cursor: "pointer" }} width={width} />
      </div>
      <p> Nombre de sushi</p>
      <h2>{Math.trunc(user.sushi)}</h2>
      <p> Cliques automatiques par seconde</p>
      <h3>{user.cps.toFixed(1)}</h3>
    </div>
  );
};

export default Sushi;
