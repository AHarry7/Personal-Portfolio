import IconLinkButton from "../Button/IconLinkButton";
import { VscGithubInverted } from "react-icons/vsc";
import { Flex, Box, Container, HStack } from "@chakra-ui/react";
import { FaAngleUp } from "react-icons/fa";
import TitleCard from "./FeatureCard";
import FeatureContent from "./FeatureContent";
import { ReactNode } from "react";

interface Props {
  cardTitle: string;
  contentHeading: string;
  children: ReactNode;
  imgSrc: string;
  githubLink: string;
  demoLink?: string | undefined;
}

const FeatureSection = ({
  cardTitle,
  contentHeading,
  children,
  imgSrc,
  githubLink,
  demoLink,
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
          display={{ base: "block", sm: "flex" }}
          flexDirection={{ base: "column", xl: "row" }}
          alignItems={"center"}
          pt={{ base: 5, xl: 0 }}
          justifyContent={"space-between"}
        >
          <TitleCard imageSrc={imgSrc}>{cardTitle}</TitleCard>

          <Box pt={{ base: 5, lg: 10, xl: 5 }} textAlign={{ base: "center" }}>
            <FeatureContent heading={contentHeading} applyMargin={true}>
              {children}
            </FeatureContent>

            <HStack spacing={5} justify={"center"}>
              <IconLinkButton
                href={`https://github.com/AHarry7/${githubLink}`}
                color={"blue"}
                icon={<VscGithubInverted />}
              >
                Go to GitHub
              </IconLinkButton>

              {demoLink && (
                <IconLinkButton
                  href={demoLink}
                  color={"green"}
                  icon={<FaAngleUp />}
                >
                  Live Demo
                </IconLinkButton>
              )}
            </HStack>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default FeatureSection;
