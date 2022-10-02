import { makeStyles } from "@material-ui/styles";
import { Box } from "@mui/material";
import React, { memo } from "react";
import HeaderSystem from "../headerSystem";
import CreateUserSystem from "./createUserSystem";

const Admin = () => {
  const classes = useStyles();

  return (
    <Box className={classes.containerAdmin}>
      <HeaderSystem />
      <CreateUserSystem />
    </Box>
  );
};

export default memo(Admin);

const useStyles = makeStyles({
  containerAdmin: {
    width: "100%",
  },
});
