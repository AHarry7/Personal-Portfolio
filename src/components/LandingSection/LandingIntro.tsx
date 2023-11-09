import { Box, Heading, Text } from "@chakra-ui/react";
import { ReactElement, ReactNode } from "react";

interface Props {
  heading: ReactElement;
  children: ReactNode;
}

const LandingIntro = ({ heading, children }: Props) => {
  return (
    <Box
      my={0}
      display={{ base: "flex", lg: "block" }}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Heading
        color="#4cc599"
        fontFamily="Gabarito"
        fontSize={{
          base: "5xl",
          sm: "6xl",
          md: "7xl",
        }}
        maxW={{
          base: "25rem",
          sm: "30rem",
          md: "35rem",
          lg: "32rem",
          xl: "40rem",
        }}
      >
        {heading}
      </Heading>
      <Text
        fontFamily="Gabarito-regular"
        fontWeight={"thin"}
        fontSize={{ base: "sm", sm: "lg", md: "larger", lg: "xl" }}
        maxW={{ base: "19rem", sm: "38rem", lg: "30rem" }}
      >
        {children}
      </Text>
    </Box>
  );
};

export default LandingIntro;
