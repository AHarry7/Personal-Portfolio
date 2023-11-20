import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";

import NavLink from "./NavLink";
import logow from "../../assets/logo-white.svg";
import logob from "../../assets/logo-black.svg";

const NavLinks = {
  links: ["Home", "About", "Projects"],
  path: ["/", "/about", "/projects"],
};

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={3}
        zIndex={99}
        position={"fixed"}
        width={"100%"}
      >
        <Flex
          px={{ base: 2, md: 10 }}
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack alignItems={"center"}>
            <Box>
              <Image
                src={colorMode === "light" ? logob : logow}
                alt="logo"
                boxSize="130px"
                objectFit="initial"
              />
            </Box>
          </HStack>

          <HStack
            as={"nav"}
            spacing={20}
            fontFamily="Gabarito"
            fontSize={"large"}
            display={{ base: "none", md: "flex" }}
          >
            {NavLinks.links.map((link, index) => (
              <NavLink key={index} to={NavLinks.path[index]} target={link}>
                {link}
              </NavLink>
            ))}
          </HStack>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {NavLinks.links.map((link, index) => (
                <NavLink key={index} to={NavLinks.path[index]} target={link}>
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
