import { ReactNode } from "react";
import { Card, CardBody, Stack, Heading, Image } from "@chakra-ui/react";

interface Props {
  imageSrc: string;
  children: ReactNode;
}

const TitleCard = ({ children, imageSrc }: Props) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      px={0}
      align="center"
      variant="elevated"
      borderRadius={"2xl"}
      maxW={{ base: "lg", lg: "420px", xl: "max" }}
      maxHeight={{ lg: "md", xl: "sm", "2xl": "max" }}
    >
      <CardBody textAlign={"center"}>
        <Stack align={"center"} mb={2} maxW={"29rem"}>
          <Heading fontFamily="Gabarito" fontWeight={"bold"} size={"lg"}>
            {children}
          </Heading>
        </Stack>

        <Image
          objectFit="revert"
          borderRadius={"2xl"}
          maxW={{ xl: "sm", xxl: "xl" }}
          src={imageSrc}
          width={{ xl: "478px" }}
          alt={imageSrc}
        />
      </CardBody>
    </Card>
  );
};

export default TitleCard;
