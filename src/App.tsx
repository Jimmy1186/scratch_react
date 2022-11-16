import React from "react";
import { Counter } from "./Counter";
import IMAGE from "./gun.png";

const App = () => {
  const asd = 0;
  return (
    <div>
      App
      <img src={IMAGE} alt="gun" width={100} />
      <h1>{process.env.NODE_ENV}</h1>
      <h1>{process.env.name}</h1>
      <Counter />
    </div>
  );
};

export default App;
