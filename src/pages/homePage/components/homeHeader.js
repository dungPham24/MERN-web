import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Button, IconButton, ListItemButton, ListItemText, Popover, Typography } from "@mui/material";
import { Menu, HelpOutline } from "@mui/icons-material";
import BannerHeader from "./banerHeader";
import i18n from "languages";

const HomeHeader = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [openAnchorEl, setOpenAnchorEl] = useState(null);

  const open = Boolean(openAnchorEl);

  const onClickEng = () => {
    i18n.changeLanguage("vi");
    setOpenAnchorEl(null);
  };
  const onClickVi = () => {
    i18n.changeLanguage("en");
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
              <Typography className="bold-title-header">{t("GeneralHealthCheck")}</Typography>
            </Box>
          </Box>
          <Box className={classes.rightContent}>
            <Button
              onClick={event => setOpenAnchorEl(event.currentTarget)}
              color="error"
              variant="text"
              startIcon={<HelpOutline />}
            >
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
          horizontal: "left",
        }}
      >
        <ListItemButton>
          <ListItemText primary="Tới chat box" />
        </ListItemButton>
        <ListItemButton onClick={onClickEng}>
          <ListItemText primary={t("languagesVi")} />
        </ListItemButton>
        <ListItemButton onClick={onClickVi}>
          <ListItemText primary={t("languagesEn")} />
        </ListItemButton>
      </Popover>
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
