import { ReactElement, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

interface Props {
  href: string;
  color: string;
  children: ReactNode;
  icon: ReactElement;
}

const IconLinkButton = ({ href, color, icon, children }: Props) => {
  return (
    <Button
      leftIcon={icon}
      mt={7}
      as={"a"}
      href={href}
      target="_blank"
      colorScheme={color}
    >
      {children}
    </Button>
  );
};

export default IconLinkButton;
