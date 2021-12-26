import React from "react";
import { makeStyles } from "@material-ui/core";

const useStayles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: "violet",
    "&:hover": {
      backgroundColor: "#466",
    },
  },
});
const CustomCss = () => {
  const classes = useStayles();
  return (
    <div variant="h1" align="center" className={classes.btn}>
      i am a makeStyles
    </div>
  );
};

export default CustomCss;
