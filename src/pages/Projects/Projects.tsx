import { Box } from "@chakra-ui/react";
import ProjectSection from "../../components/Feature/FeatureSection";
import mob from "../../assets/mob.jpeg";
import gameHub from "../../assets/game-hub.png";

const Projects = () => {
  return (
    <Box pt={16}>
      <ProjectSection
        cardTitle="Man Overboard Detection System"
        contentHeading="Final Year Project"
        imgSrc={mob}
        githubLink="MOB-Detection"
        demoLink="https://adeelharry.online"
      >
        The Man Overboard Detection System provides an automated and reliable
        solution for detecting a person overboard in water bodies. The project
        leverages machine learning techniques to analyze aerial imagery to
        detect the presence of a person in the water and alerts the relevant
        authorities for a quick rescue response. This project is designed to
        minimize response time and improve the chances of saving lives in
        emergency situations.
      </ProjectSection>

      <ProjectSection
        cardTitle="Game Hub"
        contentHeading="Hobby Project"
        imgSrc={gameHub}
        githubLink="Game-Hub"
        demoLink="https://game-hub-two-peach.vercel.app"
      >
        Game Hub is a captivating hobby project that mirrors the essence of
        rawg.io, presenting a lighter version. This platform revolves around
        diverse gaming experiences, allowing users to explore an array of games
        across genres. The left sidebar offers a quick filter mechanism,
        enabling users to navigate through various categories effortlessly.
        Additionally, users can refine their searches based on preferred
        platforms like PC, Android, and PlayStation. It is dark mode compatible
        with a robust search feature making it user-friendly and immersive
        gateway to the world of gaming.
      </ProjectSection>
    </Box>
  );
};

export default Projects;
