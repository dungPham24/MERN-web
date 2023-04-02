import React, { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Buffer } from "buffer";
import StringFormat from "string-format";
import reduxAction from "redux/login.redux";
import { makeStyles } from "@material-ui/styles";
import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import Slider from "react-slick";
import { FormatConstant } from "const";
import { SampleNextArrow, SamplePrevArrow } from "./customArrslider";

const OutstandingDoctor = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const getTopDoctor = useSelector(state => state.loginRedux.getDataTopDoctor);
  const changeLanguages = useSelector(state => state.loginRedux.changeLanguages);
  let navigate = useNavigate();
  
  const [chane, setChane] = useState();

  const onClickDetails = (item) => {
    if (item.id) {
      navigate(`/user/${item.id}`);
    }
  }
 
  useEffect(() => {
    const changeLogin = localStorage.getItem("languages");
    setChane(changeLogin);
  }, [changeLanguages]);

  useEffect(() => {
    dispatch(
      reduxAction.getTopDoctor({
        limit: 100,
      }),
    );
  }, []);

  return (
    <Card className={classes.containerSlider}>
      <Box style={{maxWidth:1200,margin:"auto"}}>
         <Box className={classes.containerTittle}>
        <Typography>{t("doctorTop")}</Typography>
        <Button>{t("search")}</Button>
      </Box>
      <Slider {...settings}>
        {getTopDoctor &&
          getTopDoctor.map((item, index) => {
            let file = "";
            if (item.image) {
              file = new Buffer(item.image.data, "base64").toString("binary");
            }

            const nameVn = StringFormat(
              FormatConstant.NameVi,
              item.positionData.value_VI,
              item.firstName,
              item.lastName,
            );
            const nameEn = StringFormat(
              FormatConstant.NameVi,
              item.positionData.value_EN,
              item.firstName,
              item.lastName,
            );

            return (
              <Card onClick={() =>onClickDetails(item)}
                key={index} className={classes.container}>
                <CardMedia className={classes.containerImage} component="img" image={file} />
                <Typography className={classes.containerText}>{chane === "vi" ? nameVn : nameEn}</Typography>
              </Card>
            );
          })}
      </Slider>
     </Box>
    </Card>
  );
};

export default memo(OutstandingDoctor);

const useStyles = makeStyles({
  containerSlider: {
    backgroundColor: "#f5f5f5",
    padding: "20px 50px",
  },
  containerTittle: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 0",
   textAlign: "center",
  },
  container: {
    padding: "0 10px",
    textAlign: "center",
    width: "90%" + "!important",
    backgroundColor: "#fff",
    height: 220,
    margin: "0 auto",

  },
  containerImage: {
    width: "120px" + "!important",
    height: 120,
    borderRadius: "50%",
    margin: " 20px auto",

  },
  containerText: {
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  },
});

const settings = {
  infinite: true,
  focusOnSelect: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  draggable: false,
  dots: false,
  autoplay:true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
