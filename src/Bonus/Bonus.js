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
  total = 0,
  src,
}) => {
  return (
    <div
      className="bonus-item"
      style={{
        opacity: disabled ? "0.2" : "1",
      }}
    >
      <div
        className="container"
        onClick={onClick}
        data-tip
        data-for={`bonusTip${name}`}
        disabled={disabled}
      >
        {total ? <div className="top-right">{total}</div> : null}
        <img height="100%" src={src} />
      </div>
      <ReactTooltip
        id={`bonusTip${name}`}
        place="top"
        effect="solid"
        globalEventOff="click"
      >
        {tip}
      </ReactTooltip>
      <p>{name}</p>
    </div>
  );
};

const storeLocal = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const Bonus = ({
  name = "Bonus",
  tip = "Bonus",
  cps = 0.2,
  price = 5,
  src,
}) => {
  const { user, setUser } = React.useContext(UserContext);

  const [currentPrice, setCurrentPrice] = React.useState(
    JSON.parse(localStorage.getItem(name + "price")) || price
  );
  const [currentTotal, setCurrentTotal] = React.useState(
    JSON.parse(localStorage.getItem(name + "total")) || 0
  );

  React.useEffect(() => {
    storeLocal(user);
    localStorage.setItem(name + "price", JSON.stringify(currentPrice));
    localStorage.setItem(name + "total", JSON.stringify(currentTotal));
  }, [user.cps]);

  const handleClick = () => {
    if (currentPrice <= user.sushi) {
      setUser({
        ...user,
        cps: user.cps + cps,
        sushi: user.sushi - currentPrice,
      });
      setCurrentPrice(Math.trunc(currentPrice * 1.3));
      setCurrentTotal(currentTotal + 1);
    }
  };

  return (
    <BonusButton
      name={`${name} - Prix : ${currentPrice} sushis`}
      tip={`${tip} (+${cps} sushi par seconde)`}
      disabled={currentPrice > user.sushi}
      onClick={handleClick}
      src={src}
      total={currentTotal}
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

  const [currentPrice, setCurrentPrice] = React.useState(
    JSON.parse(localStorage.getItem(name + "price")) || price
  );
  const [currentTotal, setCurrentTotal] = React.useState(
    JSON.parse(localStorage.getItem(name + "total")) || 0
  );

  React.useEffect(() => {
    storeLocal(user);
    localStorage.setItem(name + "price", JSON.stringify(currentPrice));
    localStorage.setItem(name + "total", JSON.stringify(currentTotal));
  }, [user.click]);

  const handleClick = () => {
    if (currentPrice <= user.sushi) {
      setUser({
        ...user,
        click: user.click * time,
        sushi: user.sushi - currentPrice,
      });
      setCurrentPrice(Math.trunc(currentPrice * 4));
      setCurrentTotal(currentTotal + 1);
    }
  };
  return (
    <BonusButton
      name={`${name} - Prix : ${currentPrice} sushis`}
      tip={`${tip} (Sushi par clique X ${time})`}
      disabled={currentPrice > user.sushi}
      onClick={handleClick}
      src={src}
      total={currentTotal}
    />
  );
};

const CpsBonus = ({
  name = "Sushi Coach",
  tip = "Coach sushi",
  time = 1,
  price = 1,
  src,
}) => {
  const { user, setUser } = React.useContext(UserContext);

  const [currentPrice, setCurrentPrice] = React.useState(
    JSON.parse(localStorage.getItem(name + "price")) || price
  );
  const [currentTotal, setCurrentTotal] = React.useState(
    JSON.parse(localStorage.getItem(name + "total")) || 0
  );

  React.useEffect(() => {
    storeLocal(user);
    localStorage.setItem(name + "price", JSON.stringify(currentPrice));
    localStorage.setItem(name + "total", JSON.stringify(currentTotal));
  }, [user.cps]);

  const handleClick = () => {
    if (currentPrice <= user.sushi) {
      setUser({
        ...user,
        cps: user.cps * time,
        sushi: user.sushi - currentPrice,
      });
      setCurrentPrice(Math.trunc(currentPrice * 10));
      setCurrentTotal(currentTotal + 1);
    }
  };
  return (
    <BonusButton
      name={`${name} - Prix : ${currentPrice} sushis`}
      tip={`${tip} (auto-cliques par secondes X ${time})`}
      disabled={currentPrice > user.sushi}
      onClick={handleClick}
      src={src}
      total={currentTotal}
    />
  );
};

export { CpsBonus, ClickBonus };

export default Bonus;
