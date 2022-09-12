import { makeStyles } from "@material-ui/styles";
import { Box } from "@mui/material";
import React, { memo } from "react";
import CreateUserSystem from "./createUserSystem";

const Admin = () => {
  const classes = useStyles();

  return (
    <Box className={classes.containerAdmin}>
      <CreateUserSystem />
    </Box>
  );
};

export default memo(Admin);

const useStyles = makeStyles({
  containerAdmin: {
    width: "100%",
    padding: "30px 30px",
  },
});
