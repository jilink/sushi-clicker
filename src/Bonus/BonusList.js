import React from "react";
import Bonus from "./Bonus";

const BonusList = () => {
  return (
    <div>
      <Bonus
        price={5}
        name="Naruto"
        tip="Pote japonais doué pour faire les sushi"
      />
      <Bonus
        price={45}
        cps={2}
        name="Saumon fou"
        tip="Saumon suicidaire qui se tranforme en sushi"
      />
    </div>
  );
};

export default BonusList;
