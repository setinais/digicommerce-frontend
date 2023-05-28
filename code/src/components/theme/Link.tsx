import { StyleConfig } from "@chakra-ui/react";

const Link = (): StyleConfig => {
  return { baseStyle: { "&:hover": { textDecoration: "none" } } };
};
export default Link;
