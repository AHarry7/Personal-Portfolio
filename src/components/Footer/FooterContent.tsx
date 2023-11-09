import { Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  heading: string;
  children: ReactNode;
}
const FooterContent = ({ heading, children }: Props) => {
  return (
    <Stack maxW={"container.sm"} px={{ base: "5", md: "10" }}>
      <Text fontSize={"2xl"} fontWeight={"bold"} fontFamily={"sans-serif"}>
        {heading}
      </Text>

      <Text
        noOfLines={{ base: 3, md: 2 }}
        fontSize={{ base: "small", sm: "md" }}
      >
        {children}
      </Text>
    </Stack>
  );
};

export default FooterContent;
