import { Box } from "@chakra-ui/react";
import ProjectSection from "../../components/Feature/FeatureSection";
import mob from "../../assets/mob.jpeg";

const Projects = () => {
  return (
    <Box>
      <ProjectSection
        cardTitle="Man Overboard Detection System"
        contentHeading="Final Year Project"
        imgSrc={mob}
      >
        The Man Overboard Detection System provides an automated and reliable
        solution for detecting a person overboard in water bodies. The project
        leverages machine learning techniques to analyze aerial imagery to
        detect the presence of a person in the water and alerts the relevant
        authorities for a quick rescue response. This project is designed to
        minimize response time and improve the chances of saving lives in
        emergency situations.
      </ProjectSection>
    </Box>
  );
};

export default Projects;
