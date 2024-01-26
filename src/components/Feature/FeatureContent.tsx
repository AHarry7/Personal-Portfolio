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
        fontWeight={"bold"}
      >
        {heading}
      </Heading>

      <Text
        mt={applyMargin ? 7 : 0}
        color={"gray.500"}
        paddingInline={{ lg: 20, xl: 0 }}
        textAlign={{ base: "justify" }}
        fontSize={{ base: "sm", md: "md", lg: "lg" }}
        maxW={{ base: "max", lg: "53rem", xl: "30rem" }}
      >
        {children}
      </Text>
    </>
  );
};

export default Content;
