import { Box, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  to: string;
}

const NavLink = ({ children, to }: Props) => {
  const handleClick = () => {
    const element = document.getElementById(to);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Link to={to}>
      <Box
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "yellow",
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
        onClick={handleClick}
      >
        {children}
      </Box>
    </Link>
  );
};

export default NavLink;
