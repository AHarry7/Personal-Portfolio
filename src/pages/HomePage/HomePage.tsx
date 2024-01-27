import React from "react";
import { Box, Image, Container } from "@chakra-ui/react";
import LandingIntro from "../../components/LandingSection/LandingIntro";
import { cardVariants, motion } from "../../components/animation/CardVariants";
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
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        transition={{ type: "spring" }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={cardVariants}>
          <LandingIntro
            heading={
              <React.Fragment>
                Hi. I am Adeel. <br /> A Frontend Developer.
              </React.Fragment>
            }
          >
            I'm passionate about crafting experiences that are engaging,
            accessible, and user-centric.
          </LandingIntro>
        </motion.div>
      </motion.div>

      <Box mr={{ lg: 26 }} display={{ base: "none", lg: "block" }}>
        <motion.div
          className="card-container"
          initial="offscreenp"
          whileInView="onscreen"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring" }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div variants={cardVariants}>
            <Image src="https://c.tadst.com/gfx/company/illustrations/frontend-developer.svg" />
          </motion.div>
        </motion.div>
      </Box>
    </Container>
  );
};

export default HomePage;
