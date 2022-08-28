import { useTranslation } from "react-i18next";
import { Box } from "@mui/system";
import { makeStyles } from "@material-ui/styles";
import { Avatar, CardActionArea, Fab, InputAdornment, TextField, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import { header, bannerAvatar, phoneImage, phoneImage1, phoneMage, phoneFf, phoneFfg } from "theme/images";

const BannerHeader = () => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  return (
    <CardActionArea>
      <Box className={classes.backgroundContainer}>
        <Box className={classes.cardText}>
          <Box className={classes.subCardText}>{t("medicalBackground")}</Box>
          <Box className={classes.subCardTextP}>{t("comprehensiveHealthCare")}</Box>
          <TextField
            size="small"
            variant="outlined"
            placeholder={t("findMedicalSpecialty")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
              style: { borderRadius: 30, backgroundColor: "#f7d800", margin: "20px 0", width: 300 },
            }}
          />
        </Box>
        <Box className={classes.iconContent}>
          <Box className={classes.subIconContent}>
            <Fab sx={{ backgroundColor: "#fff" }}>
              <Avatar src={bannerAvatar} />
            </Fab>
            <Typography className={classes.textContent}>{t("specializedExamination")}</Typography>
          </Box>
          <Box className={classes.subIconContent}>
            <Fab sx={{ backgroundColor: "#fff" }}>
              <Avatar src={phoneImage} />
            </Fab>
            <Typography className={classes.textContent}>{t("remoteExamination")}</Typography>
          </Box>
          <Box className={classes.subIconContent}>
            <Fab sx={{ backgroundColor: "#fff" }}>
              <Avatar src={phoneImage1} />
            </Fab>
            <Typography className={classes.textContent}>{t("generalExamination")}</Typography>
          </Box>
          <Box className={classes.subIconContent}>
            <Fab sx={{ backgroundColor: "#fff" }}>
              <Avatar src={phoneMage} />
            </Fab>

            <Typography className={classes.textContent}>{t("medicalTest")}</Typography>
          </Box>
          <Box className={classes.subIconContent}>
            <Fab sx={{ backgroundColor: "#fff" }}>
              <Avatar src={phoneFf} />
            </Fab>
            <Typography className={classes.textContent}>{t("mentalHealth")}</Typography>
          </Box>
          <Box className={classes.subIconContent}>
            <Fab sx={{ backgroundColor: "#fff" }}>
              <Avatar src={phoneFfg} />
            </Fab>
            <Typography className={classes.textContent}>{t("dentalExamination")}</Typography>
          </Box>
        </Box>
      </Box>
    </CardActionArea>
  );
};
export default BannerHeader;

const useStyles = makeStyles(theme => ({
  cardText: {
    textAlign: "center",
    paddingTop: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "65%",
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1),rgba(255, 255, 255, 0))",
    padding: "45px 0",
  },
  subCardText: {
    color: "#FFF",
    textShadow: "1px 1px 1px #333",
    marginBottom: 15,
    fontSize: 25,
  },
  backgroundContainer: {
    background: `url(${header})`,
    height: 500,
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  subCardTextP: {
    fontSize: 30,
    textShadow: "1px 1px 1px #333",
    color: "#FFF",
  },
  iconContent: {
    height: "35%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    backgroundImage: "linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 1))",
  },
  subIconContent: {
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 20px 50px 20px",
    justifyContent: "flex-end",
  },
  textContent: {
    paddingTop: 10,
  },
}));
