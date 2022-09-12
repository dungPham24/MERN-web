import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, CardMedia, Typography } from "@mui/material";
import { imageLogin } from "theme/images";

const Login = () => {
  const classes = useStyles();
  return (
    <Box className={classes.formLogin}>
      <Box className={classes.containerTextLogin}>
        <Box>
          <Typography>well come to login</Typography>
        </Box>
      </Box>
      <Box className={classes.containerImageLogin}>
        <CardMedia className={classes.subImageLogin} component="img" image={imageLogin} />
      </Box>
    </Box>
  );
};

export default Login;

const useStyles = makeStyles({
  formLogin: {
    display: "flex",
  },
  containerTextLogin: {
    width: "30%",
  },
  containerImageLogin: {
    flex: "70%",
    backgroundColor: "#FAFAFA",
  },
});
