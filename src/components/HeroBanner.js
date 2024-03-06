import { Box, Button, Typography } from "@mui/material";
import React from "react";
import HeroBannerImg from "../assets/images/banner.png";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";


const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "100px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> and repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <ScrollLink
  to="searchExercises"
  smooth={true}
  spy={true}
  duration={500} // Set duration if you want to control scrolling speed
>
  <Button
    variant="contained"
    color="error"
    sx={{
      backgroundColor: "#ff2625",
      padding: "10px",
    }}
  >
    Go to exercises
  </Button>
</ScrollLink>

      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={HeroBannerImg} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
