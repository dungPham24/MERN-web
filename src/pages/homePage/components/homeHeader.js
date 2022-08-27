import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Button, CardMedia, IconButton, Typography } from "@mui/material";
import { Menu, HelpOutline } from "@mui/icons-material";
import headerLogo from "theme/images/bookingcare-2020.svg";
import BannerHeader from "./banerHeader";

const HomeHeader = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.homeHeaderContainer}>
        <Box className={classes.homeHeaderContent}>
          <Box className={classes.imageContent}>
            <Box className={classes.containerIcon}>
              <IconButton>
                <Menu />
              </IconButton>
            </Box>
            <CardMedia component="img" image={headerLogo} />
          </Box>
          <Box className={classes.middContent}>
            <Box>
              <Typography className="regular-lg-txt">Chuyên khoa</Typography>
              <Typography className="bold-title-header">Tìm theo bác sĩ</Typography>
            </Box>
            <Box>
              <Typography className="regular-lg-txt">Cơ sở y tế</Typography>
              <Typography className="bold-title-header">Chọn bệnh viện phòng khám</Typography>
            </Box>
            <Box>
              <Typography className="regular-lg-txt">Bác sĩ</Typography>
              <Typography className="bold-title-header">Chọn bác sĩ giỏi</Typography>
            </Box>
            <Box>
              <Typography className="regular-lg-txt">Gói khám</Typography>
              <Typography className="bold-title-header">Khám sức khỏe tổng quát</Typography>
            </Box>
          </Box>
          <Box className={classes.rightContent}>
            <Button color="error" variant="text" startIcon={<HelpOutline />}>
              Hỗ trợ
            </Button>
          </Box>
        </Box>
      </Box>
      <BannerHeader />
    </>
  );
};

export default HomeHeader;

const useStyles = makeStyles({
  homeHeaderContainer: {
    height: 60,
    boder: "1px soild red",
    width: "100%",
    background: "#ccc",
  },
  homeHeaderContent: {
    width: "100%",
    height: "100%",
    display: "flex",
    padding: "0 20px",
  },
  imageContent: {
    width: "25%",
    display: "flex",
  },
  middContent: {
    width: "60%",
    display: "flex",
    justifyContent: "space-around",
    textAlign: "center",
    alignItems: "center",
  },
  rightContent: {
    width: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  containerIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
