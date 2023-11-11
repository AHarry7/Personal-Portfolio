import logow from "../../assets/logo-white.svg";
import logob from "../../assets/logo-black.svg";
import SocialLinks from "../SocialButtons/SocialLinks";
import FooterContent from "./FooterContent";
import FooterCredits from "./FooterCredits";
import {
  Box,
  Container,
  Stack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

export default function LargeWithLogoCentered() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"7xl"} py={10}>
        <Flex
          display={{ md: "block", lg: "flex" }}
          justifyContent={"space-between"}
        >
          <FooterContent heading="Adeel Ur Rehman">
            A Frontend developer focused on delivering captivating user
            experiences through intuitive design and cutting-edge technology.
          </FooterContent>
          <SocialLinks />
        </Flex>
      </Container>
      <FooterCredits imgSrcD={logob} imgSrcL={logow}>
        © 2023 All rights reserved.
      </FooterCredits>
    </Box>
  );
}
