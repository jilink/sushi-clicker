import React from "react";
import { BonusList } from "./Bonus";
import Sushi from "./Sushi";
import { UserContext } from "./UserContext";

const App = () => {
  const [user, setUser] = React.useState({ sushi: 0, cps: 0 });

  React.useEffect(() => {
    let timer;

    if (true) {
      timer = setInterval(() => {
        setUser((user) => {
          return { ...user, sushi: user.sushi + user.cps };
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Sushi />
      <BonusList />
    </UserContext.Provider>
  );
};

export default App;
