import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import conversationDispacth from "redux/login.redux";
import { makeStyles } from "@material-ui/styles";
import { Box, Button, IconButton, ListItemButton, ListItemText, Popover, Typography } from "@mui/material";
import { Menu, HelpOutline } from "@mui/icons-material";
import i18n from "languages";
import BannerHeader from "./banerHeader";

const HomeHeader = ({details }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [openAnchorEl, setOpenAnchorEl] = useState(null);

  const open = Boolean(openAnchorEl);

  const onClickLanguages = lng => {
    i18n.changeLanguage(lng);
    localStorage.setItem("languages", lng);
    dispatch(
      conversationDispacth.conversationSet({
        changeLanguages: lng,
      }),
    );
    setOpenAnchorEl(null);
  };

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
          </Box>
          <Box className={classes.middContent}>
            <Box>
              <Typography className="regular-lg-txt">{t("speciality")}</Typography>
              <Typography className="bold-title-header">{t("searchDoctor")}</Typography>
            </Box>
            <Box>
              <Typography className="regular-lg-txt">{t("healthFacilities")}</Typography>
              <Typography className="bold-title-header">{t("hospital")}</Typography>
            </Box>
            <Box>
              <Typography className="regular-lg-txt">{t("doctor")}</Typography>
              <Typography className="bold-title-header">{t("chooseDoctor")}</Typography>
            </Box>
            <Box>
              <Typography className="regular-lg-txt">{t("checkupPackage")}</Typography>
              <Typography className="bold-title-header">{t("generalHealthCheck")}</Typography>
            </Box>
          </Box>
          <Box onClick={event => setOpenAnchorEl(event.currentTarget)} className={classes.rightContent}>
            <Button color="error" variant="text" startIcon={<HelpOutline />}>
              {t("support")}
            </Button>
          </Box>
        </Box>
      </Box>
      <Popover
        open={open}
        anchorEl={openAnchorEl}
        onClose={() => setOpenAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <ListItemButton>
          <ListItemText primary="Tới chat box" />
        </ListItemButton>
        <ListItemButton onClick={() => onClickLanguages("vi")}>
          <ListItemText primary={t("languagesVi")} />
        </ListItemButton>
        <ListItemButton onClick={() => onClickLanguages("en")}>
          <ListItemText primary={t("languagesEn")} />
        </ListItemButton>
      </Popover>
      {details ? <></> : <BannerHeader />}
    </>
  );
};

export default HomeHeader;

const useStyles = makeStyles({
  homeHeaderContainer: {
    height: 60,
    width: "100%",
    background: "#FAFAFA",
    position: "fixed",
    zIndex: 10000,
    top: 0,
  },
  homeHeaderContent: {
    width: "100%",
    height: "100%",
    display: "flex",
    padding: "0 20px",
  },
  imageContent: {
    width: "10%",
    display: "flex",
  },
  middContent: {
    width: "70%",
    display: "flex",
    justifyContent: "space-around",
    textAlign: "center",
    alignItems: "center",
  },
  rightContent: {
    width: "20%",
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
