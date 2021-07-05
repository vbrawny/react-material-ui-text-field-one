import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { InputBase } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  },
  textfield: {
    border: "1px solid blue"
  },
  InputBase: {
    border: "1px solid blue",
    borderRadius: theme.shape.borderRadius,
    height: "6vh",
    padding: theme.spacing(2)
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        className={classes.textfield}
        label="Standard"
      />
      <InputBase
        placeholder="standard-basic"
        className={classes.InputBase}
        label="Standard"
      />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  );
}
