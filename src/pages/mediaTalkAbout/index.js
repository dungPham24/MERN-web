import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import Footer from "./footer";

const MediaTalkAbout = () => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.containerWrap}>
        <Box style={{maxWidth:1200,margin:"auto"}}>
           <Typography className={clsx(classes.subContainerText, "regular-xl-txt")}>
          Truyền thông nói về BookingCare
        </Typography>
        <Box className={classes.containerAbout}>
          <Box className={classes.containerYoutobe}>
            <Card>
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/fOoSbUoayQE?list=RD93uBj2Ppko4"
                title="Charlie Puth - Cheating on You [Official Video]"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Card>
          </Box>
          <Typography className={classes.containerText}>
            Cards are surfaces that display content and actions on a single topic. They should be easy to scan for
            relevant and actionable information. Elements, like text and images, should be placed on them in a way that
            clearly indicates hierarchy.
          </Typography>
        </Box>
       </Box>
      </Card>
      <Footer />
    </>
  );
};

export default MediaTalkAbout;

const useStyles = makeStyles({
  containerAbout: {
    display: "flex",
    width: "100%",
    height: 400,
  },
  containerYoutobe: {
    width: "50%",
  },
  containerText: {
    width: "50%",
    padding: "20px 50px",
  },
  subContainerText: {
    marginBottom: 20,
  },
  containerWrap: {
    padding: "20px 50px",
    
  },
});
