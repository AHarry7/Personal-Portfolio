import React from "react";
import { Box, Stack, Heading } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import SocialButtons from "./SocialButtons";

const socialLinks = {
  labels: ["LinkedIn", "GitHub", "Twitter", "Instagram"],
  links: [
    "https://www.linkedin.com/in/adeelharry",
    "https://github.com/AHarry7",
    "https://twitter.com/AdeelHarry",
    "https://www.instagram.com/adeelharry/",
  ],
  icons: [FaInstagram, FaTwitter, FaLinkedinIn, FaGithub],
};

const SocialLinks = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={{ lg: "end" }}
      mt={{ base: 5, lg: 0 }}
      px={{ base: "5", md: "10" }}
    >
      <Box>
        <Heading fontSize={"2xl"}>Social</Heading>
        <Stack direction={"row"} spacing={6} py={5}>
          {socialLinks.labels.map((label, index) => (
            <SocialButtons
              key={label}
              label={label}
              href={socialLinks.links[index]}
            >
              {React.createElement(socialLinks.icons[index])}
            </SocialButtons>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default SocialLinks;
