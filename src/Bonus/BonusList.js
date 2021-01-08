import React from "react";
import Bonus, { ClickBonus, CpsBonus } from "./Bonus";
import "./styles.css";

const BonusList = () => {
  return (
    <div className="bonus-list">
      <Bonus
        price={25}
        name="Naruto"
        tip="Pote japonais doué pour faire les sushi"
        src="../images/ninja.svg"
      />
      <Bonus
        price={225}
        cps={2}
        name="Saumon fou"
        tip="Saumon suicidaire qui se tranforme en sushi"
        src="../images/salmon.svg"
      />
      <Bonus
        price={1000}
        cps={10}
        name="Restaurant"
        tip="Ouvrez un restaurant de sushi"
        src="../images/shop.svg"
      />
      <Bonus
        price={3500}
        cps={50}
        name="Usine"
        tip="Ouvrez une usine de sushi"
        src="../images/factory.svg"
      />
      <Bonus
        price={12500}
        cps={200}
        name="Planète"
        tip="Planète à sushi"
        src="../images/planet.svg"
      />
    </div>
  );
};

const SpecialBonusList = () => {
  return (
    <div className="bonus-list">
      <ClickBonus
        price={500}
        name="Sushi Coach"
        tip="Coach chef Sushi qui vous fais travailler plus dur"
        time={2}
        src="../images/male-chef.svg"
      />
      <CpsBonus
        price={5000}
        name="Boost"
        tip="Un Boost qui va augmenter vos sushis automatiques"
        time={2}
        src="../images/boost.svg"
      />
    </div>
  );
};

export { SpecialBonusList };

export default BonusList;
