import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./card.css";
const Cards = () => {
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
    if (count === 10) {
      alert("not Incerment");
      setCount(10);
    }
  };
  const diccrement = () => {
    setCount(count - 1);

    if (count === 0) {
      alert("not diccrement");
      setCount(0);
    }
  };
  return (
    <>
      <Button variant="contained" onClick={() => increment()}>
        +
      </Button>

      <h1>{count}</h1>
      <p>{count}@</p>
      <Button variant="contained" onClick={() => diccrement()}>
        -
      </Button>
    </>
  );
};

export default Cards;
