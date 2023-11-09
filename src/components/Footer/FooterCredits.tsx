import {
  Box,
  Text,
  Flex,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  imgSrcD: string;
  imgSrcL: string;
  children: ReactNode;
}

const FooterCredits = ({ imgSrcD, imgSrcL, children }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <Box py={10}>
      <Flex
        align={"center"}
        _before={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: useColorModeValue("gray.200", "gray.700"),
          flexGrow: 1,
          mr: 8,
        }}
        _after={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: useColorModeValue("gray.200", "gray.700"),
          flexGrow: 1,
          ml: 8,
        }}
      >
        <Box>
          <Image
            src={colorMode === "light" ? imgSrcD : imgSrcL}
            alt="logo"
            boxSize="130px"
            objectFit="initial"
          />
        </Box>
      </Flex>

      <Text pt={6} fontSize={"sm"} textAlign={"center"}>
        {children}
      </Text>
    </Box>
  );
};

export default FooterCredits;
