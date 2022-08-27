import { Box } from "@mui/system";
import { makeStyles } from "@material-ui/styles";
import { Avatar, CardActionArea, InputAdornment, TextField, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import { header, bannerAvatar, phoneImage, phoneImage1, phoneMage, phoneFf, phoneFfg } from "theme/images";

const BannerHeader = () => {
  const classes = useStyles();

  return (
    <CardActionArea>
      <Box className={classes.backgroundContainer}>
        <Box className={classes.cardText}>
          <Box className={classes.subCardText}>NỀN TẢNG Y TẾ</Box>
          <Box className={classes.subCardTextP}>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</Box>
          <TextField
            className={classes.ffds}
            size="small"
            variant="outlined"
            placeholder="Tìm chuyên khoa khám bệnh"
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
            <Avatar src={bannerAvatar} />
            <Typography>Khám chuyên khoa</Typography>
          </Box>
          <Box className={classes.subIconContent}>
            <Avatar src={phoneImage} />
            <Typography>Khám từ xa</Typography>
          </Box>
          <Box className={classes.subIconContent}>
            <Avatar src={phoneImage1} />
            <Typography>Khám tổng quát</Typography>
          </Box>
          <Box className={classes.subIconContent}>
            <Avatar src={phoneMage} />
            <Typography>Xét nghiệm y học</Typography>
          </Box>
          <Box className={classes.subIconContent}>
            <Avatar src={phoneFf} />
            <Typography>Sức khỏe tinh thần</Typography>
          </Box>
          <Box className={classes.subIconContent}>
            <Avatar src={phoneFfg} />
            <Typography>Khám nha khoa</Typography>
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
    height: "50%",
  },
  subCardText: {
    color: "#FFF",
    textShadow: "1px 1px 1px #333",
    marginBottom: 15,
    fontSize: 25,
  },
  backgroundContainer: {
    background: `url(${header})`,
    height: 485,
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
    height: "50%",
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
}));
