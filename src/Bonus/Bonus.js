import React from "react";
import { UserContext } from "../UserContext";

const Bonus = ({ type = 0, name = "Bonus", cps = 0.2, price = 5 }) => {
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
    <button
      style={{ fontWeight: "bold", padding: "5px", margin: "5px" }}
      disabled={currentPrice > user.sushi}
      onClick={handleClick}
    >
      {name} (+{cps} sushi par seconde) - Prix : {currentPrice} sushis
    </button>
  );
};

export default Bonus;
