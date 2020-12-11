import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);
type InputTypes = {
  setText: (text: string) => void;
};

const InputText: React.FC<InputTypes> = ({ setText }) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        onChange={(e) => setText(e.target.value)}
        id="standard-basic"
        label="Search..."
      />
    </form>
  );
};

export default InputText;
