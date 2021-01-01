import React from "react";
import { UserContext } from "../UserContext";

const Bonus = ({ type = 0, name = "Bonus", cps = 0.2, price = 5 }) => {
  const { user, setUser } = React.useContext(UserContext);
  const handleClick = () => {
    if (price <= user.sushi) {
      setUser({ ...user, cps: user.cps + cps, sushi: user.sushi - price });
    }
  };

  return (
    <button
      style={{ fontWeight: "bold", padding: "5px", margin: "5px" }}
      disabled={price >= user.sushi}
      onClick={handleClick}
    >
      {name} (+{cps} sushi par seconde) - Prix : {price} sushis
    </button>
  );
};

export default Bonus;
