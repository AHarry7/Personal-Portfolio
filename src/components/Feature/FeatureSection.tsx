import IconLinkButton from "../Button/IconLinkButton";
import { VscGithubInverted } from "react-icons/vsc";
import { Flex, Box, Container } from "@chakra-ui/react";
import TitleCard from "./FeatureCard";
import FeatureContent from "./FeatureContent";
import { ReactNode } from "react";

interface Props {
  cardTitle: string;
  contentHeading: string;
  children: ReactNode;
  imgSrc: string;
}

const FeatureSection = ({
  cardTitle,
  contentHeading,
  children,
  imgSrc,
}: Props) => {
  return (
    <>
      <Container
        id="Projects"
        minHeight="100vh"
        maxW={"container.xl"}
        centerContent
        alignItems="center"
        justifyContent="center"
        px={{ base: 7, md: 4 }}
        pt={{ base: 16, lg: 14 }}
        py={{ base: 5, md: 4 }}
      >
        <Flex
          minW={"100%"}
          display={{ base: "block", sm: "flex", md: "flex", lg: "flex" }}
          flexDirection={{ base: "column", lg: "row" }}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <TitleCard imageSrc={imgSrc}>{cardTitle}</TitleCard>

          <Box
            pt={5}
            textAlign={{ base: "center", lg: "start" }}
            pr={{ lg: 5 }}
          >
            <FeatureContent heading={contentHeading} applyMargin={true}>
              {children}
            </FeatureContent>

            <IconLinkButton
              href="https://github.com/AHarry7/MOB-Detection"
              color={"blue"}
              icon={<VscGithubInverted />}
            >
              Go to GitHub
            </IconLinkButton>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default FeatureSection;
