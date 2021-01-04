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
  src,
}) => {
  return (
    <>
      <div
        style={{
          fontWeight: "bold",
          padding: "5px",
          margin: "5px",
          cursor: "pointer",
          width: "100px",
          opacity: disabled ? "0.2" : "1",
        }}
        onClick={onClick}
        data-tip
        data-for={`bonusTip${name}`}
        disabled={disabled}
      >
        <img width="100px" src={src} />
        {name}
      </div>
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

const Bonus = ({
  name = "Bonus",
  tip = "Bonus",
  cps = 0.2,
  price = 5,
  src,
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
    <BonusButton
      name={`${name} - Prix : ${currentPrice} sushis`}
      tip={`${tip} (+${cps} sushi par seconde)`}
      disabled={currentPrice > user.sushi}
      onClick={handleClick}
      src={src}
    />
  );
};

const ClickBonus = ({
  name = "Sushi Coach",
  tip = "Coach sushi",
  time = 1,
  price = 1,
  src,
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
      src={src}
    />
  );
};

export { ClickBonus };

export default Bonus;
