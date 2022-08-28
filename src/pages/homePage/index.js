import React from "react";
import HomeHeader from "./components/homeHeader";
import SpeciatilySlider from "./components/sliderSpeciatily";

const Home = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <HomeHeader />
      <SpeciatilySlider />
    </div>
  );
};

export default Home;
