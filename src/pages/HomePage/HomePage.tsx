import React from "react";
import { Box, Image, Container } from "@chakra-ui/react";
import LandingIntro from "../../components/LandingSection/LandingIntro";
const HomePage = () => {
  return (
    <Container
      id="Home"
      display={"flex"}
      flexDirection={{ base: "column", lg: "row" }}
      minHeight="100vh"
      maxW={"container.xl"}
      centerContent
      justifyContent={{ base: "center", lg: "space-between" }}
      alignContent={"center"}
      textAlign={{ base: "center", lg: "start" }}
    >
      <LandingIntro
        heading={
          <React.Fragment>
            Hi. I am Adeel. <br /> A Frontend Developer.
          </React.Fragment>
        }
      >
        I'm passionate about crafting experiences that are engaging, accessible,
        and user-centric.
      </LandingIntro>

      <Box mr={{ lg: 26 }} display={{ base: "none", lg: "block" }}>
        <Image src="https://c.tadst.com/gfx/company/illustrations/frontend-developer.svg" />
      </Box>
    </Container>
  );
};

export default HomePage;
