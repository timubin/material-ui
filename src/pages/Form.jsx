import {
  Button,
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import { TextField } from "@material-ui/core";
import React, { useState } from "react";
const useStyle = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
    padding: 5,
  },
  box: {
    width: 500,
    backgroundColor: "#fff",
    margin: "auto",
    padding: 20,
  },
  radioBtn: {
    display: "inline-block",
    margin: "auto",
  },
});
const Form = () => {
  const classes = useStyle();
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [radioBtn, setRadioBtn] = useState("");

  return (
    <div className={classes.box}>
      <Typography variant="h3" color="primary" align="center">
        Contact Form
      </Typography>

      <form noValidate autoComplete="off">
        <TextField
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="secondary"
          required
          fullWidth
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <TextField
          className={classes.field}
          label="Email"
          variant="outlined"
          color="secondary"
          type="email"
          required
          fullWidth
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <TextField
          className={classes.field}
          label="Password"
          variant="outlined"
          color="secondary"
          type="password"
          required
          fullWidth
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <TextField
          className={classes.field}
          label="Message"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <RadioGroup
          onChange={(e) => {
            setRadioBtn(e.target.value);
          }}
          align="center"
          className={classes.radioBtn}
        >
          <FormControlLabel value="Male" control={<Radio />} label="Male" />
          <FormControlLabel value="Female" control={<Radio />} label="Female" />
        </RadioGroup>
      </form>
      <Button variant="outlined" color="primary">
        Submit
      </Button>

      <div>
        <p>{title}</p>
        <p>{email}</p>
        <p>{password}</p>
        <p>{message}</p>
        <p>{radioBtn}</p>
      </div>
    </div>
  );
};

export default Form;
