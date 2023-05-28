"use client";
import { Button, Icon, extendTheme, useColorMode } from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Link from "./Link";

export const customTheme = extendTheme({
  components: {
    Link,
  },
  styles: {
    global: {
      body: {
        transitionProperty: "all",
        transitionDuration: "normal",
      },
    },
  },
  config: {
    disableTransitionOnChange: false,
  },
});

export default function ToogleTheme(props: { title?: string }) {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Button
      variant="ghost"
      colorScheme={colorMode === "dark" ? "white" : "black"}
      aria-label={`Theme ${colorMode}`}
      onClick={toggleColorMode}
      rightIcon={<Icon as={colorMode === "dark" ? MdLightMode : MdDarkMode} />}
    >
      {props.title && props.title}
    </Button>
  );
}
