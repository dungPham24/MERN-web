import { Box } from "@mui/material";
import MediaTalkAbout from "pages/mediaTalkAbout";
import React from "react";
import HomeHeader from "./components/homeHeader";
import Handbook from "./components/sliderSpeciatily/handbook";
import MedicalFacility from "./components/sliderSpeciatily/medicalFacility";
import OutstandingDoctor from "./components/sliderSpeciatily/outstandingDoctor";
import SpeciatilySlider from "./components/sliderSpeciatily/speciatilySlider";

const Home = () => {
  return (
    <Box style={{ overflow: "hidden" }}>
      <HomeHeader />
      <SpeciatilySlider />
      <MedicalFacility />
      <OutstandingDoctor />
      <Handbook />
      <MediaTalkAbout />
    </Box>
  );
};

export default Home;
