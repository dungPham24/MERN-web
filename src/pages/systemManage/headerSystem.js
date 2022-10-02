import React, { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { HelpOutline } from "@mui/icons-material";
import { LogoutOutlined } from "@mui/icons-material";
import { PopoverClinic, PopoverHandbook, PopoverLanguages, PopoverSpecialist, PopoverUser } from "./popoverSystem";

const HeaderSystem = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const userLogin = JSON.parse(localStorage.getItem("user"));

  const [openAnchorEl, setOpenAnchorEl] = useState(null);
  const [openAnchorElUser, setOpenAnchorElUser] = useState(null);
  const [openAnchorElClinic, setOpenAnchorElClinic] = useState(null);
  const [openAnchorElSpecialist, setopenAnchorElSpecialist] = useState(null);
  const [openAnchorElHandbook, setopenAnchorElHandbook] = useState(null);

  return (
    <>
      <Box className={classes.containerSystem}>
        <Box className={classes.containerSubRight}>
          <Button
            onClick={event => setOpenAnchorElUser(event.currentTarget)}
            variant="overline"
            className={classes.containerSubText}
          >
            {t("user")}
          </Button>

          <Button
            onClick={event => setOpenAnchorElClinic(event.currentTarget)}
            className={classes.containerSubText}
            variant="overline"
          >
            {t("clinic")}
          </Button>
          <Button
            onClick={event => setopenAnchorElSpecialist(event.currentTarget)}
            className={classes.containerSubText}
            variant="overline"
          >
            {t("speciality")}
          </Button>
          <Button
            onClick={event => setopenAnchorElHandbook(event.currentTarget)}
            className={classes.containerSubText}
            variant="overline"
          >
            {t("handbook")}
          </Button>
        </Box>
        <Box className={classes.containerSubLeft}>
          <Typography>
            {t("wellcome")}, {userLogin.lastName} !!!
          </Typography>
          <Box className={classes.rightContent} onClick={event => setOpenAnchorEl(event.currentTarget)}>
            <Button color="error" variant="text" startIcon={<HelpOutline />}>
              {t("languages")}
            </Button>
          </Box>
          <IconButton>
            <LogoutOutlined color="action" />
          </IconButton>
        </Box>
      </Box>
      <PopoverUser openAnchorElUser={openAnchorElUser} setOpenAnchorElUser={setOpenAnchorElUser} />
      <PopoverLanguages openAnchorEl={openAnchorEl} setOpenAnchorEl={setOpenAnchorEl} />
      <PopoverClinic openAnchorElClinic={openAnchorElClinic} setOpenAnchorElClinic={setOpenAnchorElClinic} />
      <PopoverSpecialist
        setopenAnchorElSpecialist={setopenAnchorElSpecialist}
        openAnchorElSpecialist={openAnchorElSpecialist}
      />
      <PopoverHandbook setopenAnchorElHandbook={setopenAnchorElHandbook} openAnchorElHandbook={openAnchorElHandbook} />
    </>
  );
};

export default memo(HeaderSystem);

const useStyles = makeStyles({
  containerSystem: {
    height: 60,
    width: "100%",
    backgroundColor: "green",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 30px",
  },

  containerSubLeft: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },

  containerSubRight: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },

  containerSubText: {
    color: "#FFFF",
    height: "100%",
  },
});
