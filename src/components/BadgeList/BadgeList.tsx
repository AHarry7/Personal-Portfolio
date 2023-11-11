import { Heading, Wrap, Stack, Badge, useColorMode } from "@chakra-ui/react";

interface Props {
  heading: string;
  list: string[];
}

const BadgeList = ({ heading, list }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <Stack spacing={7}>
      <Heading fontSize={{ base: "3xl", lg: "4xl", "2xl": "5xl" }}>
        {heading}
      </Heading>

      <Wrap direction="row" spacing={4}>
        {list.map((item) => (
          <Badge
            key={item}
            paddingX={4}
            paddingY={2}
            colorScheme={colorMode === "light" ? "facebook" : "gray"}
            fontSize={{ base: "xs", sm: "sm" }}
            fontFamily={"sans-serif"}
            fontWeight={{ base: "medium", md: "thin" }}
          >
            {item}
          </Badge>
        ))}
      </Wrap>
    </Stack>
  );
};

export default BadgeList;
