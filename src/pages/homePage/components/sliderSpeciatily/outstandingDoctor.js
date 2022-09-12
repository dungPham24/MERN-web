import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StringFormat from "string-format";
import reduxAction from "redux/login.redux";
import { makeStyles } from "@material-ui/styles";
import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import Slider from "react-slick";
import { sliderTest } from "theme/images";
import "theme/material/styles/cusstomArrslider.scss";
import { SampleNextArrow, SamplePrevArrow } from "./customArrslider";
import { AppConstant, FormatConstant } from "const";

const OutstandingDoctor = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const getTopDoctor = useSelector(state => state.loginRedux.getDataTopDoctor);
  const languages = localStorage.getItem(AppConstant.LOCAL_STORAGE);

  useEffect(() => {
    dispatch(
      reduxAction.getTopDoctor({
        limit: 100,
      }),
    );
  }, []);

  return (
    <Box className={classes.containerSlider}>
      <Box className={classes.containerTittle}>
        <Typography>Bác sĩ nổi bật tuần qua</Typography>
        <Button>Tìm kiếm</Button>
      </Box>
      <Slider {...settings}>
        {getTopDoctor &&
          getTopDoctor.map((item, index) => {
            // const files = getbase64(item.image);
            let file = "";
            // if (item.image) {
            //   file = new Buffer(item.image.data, "base64").toString("binary");
            //   console.log(file);
            // }

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
              <Card key={index} className={classes.container}>
                <CardMedia className={classes.containerImage} component="img" image={sliderTest} />
                <Typography className={classes.containerText}>{languages === "vi" ? nameVn : nameEn}</Typography>
              </Card>
            );
          })}
      </Slider>
    </Box>
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
  },
  container: {
    padding: "0 10px",
    textAlign: "center",
    width: "280px" + "!important",
    backgroundColor: "#fff",
    height: 220,
    overflow: "hidden",
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
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
