import React from "react";
import Bonus, { ClickBonus } from "./Bonus";

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

const SpecialBonusList = () => {
  return (
    <div>
      <ClickBonus
        price={150}
        name="Sushi Coach"
        tip="Coach chef Sushi qui vous fais travailler plus dur"
        time={2}
      />
    </div>
  );
};

export { SpecialBonusList };

export default BonusList;
