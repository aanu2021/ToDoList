import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Clock from 'react-digital-clock';

const App2 = () => {
  const [value, updateValue] = useState(0);

  const onIncrement = () => {
    updateValue(value + 1);
  };
  const onDecrement = () => {
    //  console.log(value);
    if (value <= 0) {
      alert("Invalid Move 👿");
    } else {
      updateValue(value - 1);
    }
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          
          <Clock/>
          
          <br />
          <h1>{value}</h1>
          <br />

          <div className="btn_div">
            <Tooltip title="Increment">
              <Button onClick={onIncrement}>
                <AddIcon />
              </Button>
            </Tooltip>

            <Tooltip title="Decrement">
              <Button onClick={onDecrement}>
                <RemoveIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default App2;
