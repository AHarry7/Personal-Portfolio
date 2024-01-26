import { Container, SimpleGrid, Stack } from "@chakra-ui/react";
import BadgeList from "../../components/BadgeList/BadgeList";
import FeatureContent from "../../components/Feature/FeatureContent";
import BadgeHeading from "../../components/BadgeList/BadgeHeading";

const list = [
  "Html",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Git",
  "GitHub",
  "Forms",
  "Sql",
  "Selenium",
  "RESTful-APIs",
  "MongoDB",
  "Data Validation",
  "Problem-Solving",
  "Data Fetching",
];

export default function SplitWithImage() {
  return (
    <Container
      id="About"
      centerContent
      maxW={"container.xl"}
      minHeight="100vh"
      alignItems="center"
      display={"flex"}
      justifyContent="center"
      alignContent={"center"}
      pt={{ base: 16, lg: 14 }}
      px={{ base: 7, md: 4 }}
    >
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        spacing={{ base: 7, md: 10, xl: 60 }}
        textAlign={{ lg: "center", xl: "start" }}
      >
        <Stack spacing={4}>
          <BadgeHeading heading="About Me" />

          <FeatureContent
            heading="Passionate React Frontend Developer"
            applyMargin={false}
          >
            I'm a skilled React developer with a passion for building elegant
            and responsive user interfaces. With a solid understanding of
            JavaScript and React, I specialize in creating efficient and
            intuitive front-end solutions. My focus lies in developing clean,
            reusable code and implementing modern design principles to deliver
            seamless and engaging user experiences. I enjoy collaborating with
            teams to bring innovative ideas to life.
          </FeatureContent>
        </Stack>

        <BadgeList heading="Skills" list={list} />
      </SimpleGrid>
    </Container>
  );
}
