import { Box, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import HomeNav from "../../components/HomeNav";
import ImageSlider from "../../components/ImageSlider";
import ImageSliderMob from "../../components/ImageSliderMob";
import GrocerySlider from "./GrocerySlider";
import MobileHomeSlider from "./MobileHomeSlider";

const Home = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1080px)");

  return (
    <Box>
      {isLargerThan1280 ? (
        <Box pt={10}>
          <HomeNav />
          <ImageSlider  />
          <Box mt={10} mb={10}>
            <GrocerySlider />
          </Box>
        </Box>
      ) : (
        // Mobile
        <Box pt={10} bgColor={"gray.100"}>
          <HomeNav />
          <ImageSliderMob mt={1} />
          <Box mt={10} mb={10}>
            <MobileHomeSlider />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Home;
