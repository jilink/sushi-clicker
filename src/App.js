import React from "react";
import { BonusList } from "./Bonus";
import Sushi from "./Sushi";
import { UserContext } from "./UserContext";

const App = () => {
  const [user, setUser] = React.useState({ sushi: 0, cps: 0 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Sushi />
      <BonusList />
    </UserContext.Provider>
  );
};

export default App;
