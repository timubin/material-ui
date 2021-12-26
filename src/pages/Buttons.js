import { Button, ButtonGroup } from "@material-ui/core";
import React from "react";

const Buttons = () => {
  return (
    <div>
      <Button>Maratial ui without variant </Button>
      <Button variant="contained">Maratial ui Button variant</Button>
      <Button variant="contained" color="primary">
        Maratial ui contained
      </Button>
      <Button variant="outlined" color="primary">
        Maratial ui outlined
      </Button>
      <Button variant="contained" color="primary" disabled>
        Maratial ui disabled
      </Button>
      <br />
      <br />
      <ButtonGroup color="primary" variant="contained">
        <Button>in Button Group</Button>
        <Button>in Button Group</Button>
        <Button>in Button Group</Button>
      </ButtonGroup>
    </div>
  );
};

export default Buttons;
