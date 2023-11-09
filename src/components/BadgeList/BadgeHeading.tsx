import { Text, useColorModeValue } from "@chakra-ui/react";

interface Props {
  heading: string;
}
const BadgeHeading = ({ heading }: Props) => {
  return (
    <Text
      textTransform={"uppercase"}
      color={"blue.400"}
      fontWeight={600}
      fontSize={"sm"}
      bg={useColorModeValue("blue.50", "blue.900")}
      p={2}
      alignSelf={"flex-start"}
      rounded={"md"}
    >
      {heading}
    </Text>
  );
};

export default BadgeHeading;
