import React from "react";
import { UserContext } from "../UserContext";

import ReactTooltip from "react-tooltip";

const Bonus = ({
  type = 0,
  name = "Bonus",
  tip = "Bonus",
  cps = 0.2,
  price = 5,
}) => {
  const { user, setUser } = React.useContext(UserContext);

  const [currentPrice, setCurrentPrice] = React.useState(price);

  const handleClick = () => {
    if (currentPrice <= user.sushi) {
      setUser({
        ...user,
        cps: user.cps + cps,
        sushi: user.sushi - currentPrice,
      });
      setCurrentPrice(Math.trunc(currentPrice * 1.3));
    }
  };

  return (
    <>
      <button
        style={{ fontWeight: "bold", padding: "5px", margin: "5px" }}
        disabled={currentPrice > user.sushi}
        onClick={handleClick}
        data-tip
        data-for="bonusTip"
      >
        {name} - Prix : {currentPrice} sushis
      </button>
      <ReactTooltip
        id="bonusTip"
        place="top"
        effect="solid"
        globalEventOff="click"
      >
        {tip} (+{cps} sushi par seconde)
      </ReactTooltip>
    </>
  );
};

export default Bonus;
