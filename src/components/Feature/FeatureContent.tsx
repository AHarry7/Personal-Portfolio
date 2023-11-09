import { Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  heading: string;
  applyMargin: boolean;
  children: ReactNode;
}

const Content = ({ heading, children, applyMargin }: Props) => {
  return (
    <>
      <Heading
        fontSize={{ base: "3xl", lg: "4xl", "2xl": "5xl" }}
        fontFamily="Gabarito-regular"
        maxW={{ lg: "70rem" }}
        fontWeight={"bold"}
      >
        {heading}
      </Heading>

      <Text
        mt={applyMargin ? 7 : 0}
        color={"gray.500"}
        textAlign={"justify"}
        fontSize={{ base: "sm", md: "md", lg: "xl" }}
        maxW={{ base: "max", lg: "30rem" }}
      >
        {children}
      </Text>
    </>
  );
};

export default Content;
