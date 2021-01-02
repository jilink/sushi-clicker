import React from "react";
import { UserContext } from "../UserContext";

import ReactTooltip from "react-tooltip";

const BonusButton = ({
  name,
  tip,
  onClick = () => {
    console.log("no onclick");
  },
  disabled = false,
}) => {
  return (
    <>
      <button
        style={{
          fontWeight: "bold",
          padding: "5px",
          margin: "5px",
          cursor: "pointer",
        }}
        onClick={onClick}
        data-tip
        data-for={`bonusTip${name}`}
        disabled={disabled}
      >
        {name}
      </button>
      <ReactTooltip
        id={`bonusTip${name}`}
        place="top"
        effect="solid"
        globalEventOff="click"
      >
        {tip}
      </ReactTooltip>
    </>
  );
};

const Bonus = ({ name = "Bonus", tip = "Bonus", cps = 0.2, price = 5 }) => {
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
    <BonusButton
      name={`${name} - Prix : ${currentPrice} sushis`}
      tip={`${tip} (+${cps} sushi par seconde)`}
      disabled={currentPrice > user.sushi}
      onClick={handleClick}
    />
  );
};

const ClickBonus = ({
  name = "Sushi Coach",
  tip = "Coach sushi",
  time = 1,
  price = 1,
}) => {
  const { user, setUser } = React.useContext(UserContext);

  const [currentPrice, setCurrentPrice] = React.useState(price);

  const handleClick = () => {
    if (currentPrice <= user.sushi) {
      setUser({
        ...user,
        click: user.click * time,
        sushi: user.sushi - currentPrice,
      });
      setCurrentPrice(Math.trunc(currentPrice * 4));
    }
  };
  return (
    <BonusButton
      name={`${name} - Prix : ${currentPrice} sushis`}
      tip={`${tip} (Sushi par clique X ${time})`}
      disabled={currentPrice > user.sushi}
      onClick={handleClick}
    />
  );
};

export { ClickBonus };

export default Bonus;
