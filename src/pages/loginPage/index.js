import { makeStyles } from "@material-ui/styles";
import { Box } from "@mui/material";
import React from "react";

const Login = () => {
  const classes = useStyles();
  return (
    <Box className={classes.formLogin}>
      <Box></Box>
    </Box>
  );
};

export default Login;

const useStyles = makeStyles({
  formLogin: {
    with: "100vw",
    height: "100vh",
    backgroundColor: "#ccc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
