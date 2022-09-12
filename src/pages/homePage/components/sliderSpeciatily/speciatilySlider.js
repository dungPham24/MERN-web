import React, { memo } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import Slider from "react-slick";
import { sliderTest } from "theme/images";
import "theme/material/styles/cusstomArrslider.scss";
import { SampleNextArrow, SamplePrevArrow } from "./customArrslider";

const SpeciatilySlider = () => {
  const classes = useStyles();
  const settings = {
    infinite: true,
    focusOnSelect: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Box className={classes.containerSlider}>
      <Box className={classes.containerTittle}>
        <Typography>Chuyên khoa khám bệnh</Typography>
        <Button>Xem thêm</Button>
      </Box>
      <Slider {...settings}>
        <Box className={classes.container}>
          <CardMedia className={classes.containerImage} component="img" image={sliderTest} />
          <Typography className={classes.containerText}>Cơ xương khớp0</Typography>
        </Box>
        <Box className={classes.container}>
          <CardMedia className={classes.containerImage} component="img" image={sliderTest} />
          <Typography className={classes.containerText}>Cơ xương khớp1</Typography>
        </Box>
        <Box className={classes.container}>
          <CardMedia className={classes.containerImage} component="img" image={sliderTest} />
          <Typography className={classes.containerText}>Cơ xương khớp2</Typography>
        </Box>
        <Box className={classes.container}>
          <CardMedia className={classes.containerImage} component="img" image={sliderTest} />
          <Typography className={classes.containerText}>Cơ xương khớp3</Typography>
        </Box>
        <Box className={classes.container}>
          <CardMedia className={classes.containerImage} component="img" image={sliderTest} />
          <Typography className={classes.containerText}>Cơ xương khớp4</Typography>
        </Box>
        <Box className={classes.container}>
          <CardMedia className={classes.containerImage} component="img" image={sliderTest} />
          <Typography className={classes.containerText}>Cơ xương khớp5</Typography>
        </Box>
      </Slider>
    </Box>
  );
};

export default memo(SpeciatilySlider);

const useStyles = makeStyles({
  containerSlider: {
    backgroundColor: "#f5f5f5",
    padding: "0 50px",
  },
  containerTittle: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 0",
  },
  container: {
    padding: "0 10px",
  },
  containerImage: {
    borderRadius: 15,
  },
  containerText: {
    padding: "20px 0",
  },
});
