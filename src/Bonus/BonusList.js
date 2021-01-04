import React from "react";
import Bonus, { ClickBonus } from "./Bonus";
import "./styles.css";

const BonusList = () => {
  return (
    <div className="bonus-list">
      <Bonus
        price={5}
        name="Naruto"
        tip="Pote japonais doué pour faire les sushi"
        src="../images/ninja.svg"
      />
      <Bonus
        price={45}
        cps={2}
        name="Saumon fou"
        tip="Saumon suicidaire qui se tranforme en sushi"
        src="../images/salmon.svg"
      />
    </div>
  );
};

const SpecialBonusList = () => {
  return (
    <div className="bonus-list">
      <ClickBonus
        price={150}
        name="Sushi Coach"
        tip="Coach chef Sushi qui vous fais travailler plus dur"
        time={2}
        src="../images/male-chef.svg"
      />
    </div>
  );
};

export { SpecialBonusList };

export default BonusList;
