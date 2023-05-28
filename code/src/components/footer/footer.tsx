import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import SocialButton from "../buttons/social-button";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        {/* <Text>DIGI-COMMERCE</Text> */}
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center" }}
          align={{ base: "center" }}
        >
          <Stack direction={"row"} spacing={6}>
            <Text>Developed by Vinnicyus Carvalho</Text>
            <SocialButton
              label={"Linkedin"}
              href={
                "https://www.linkedin.com/in/vinnicyus-carvalho-gon%C3%A7alves-052a601a6/"
              }
            >
              <FaLinkedin />
            </SocialButton>
          </Stack>
        </Container>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center" }}
          align={{ base: "center" }}
        >
          <Text>© 2023 DIGI-COMMERCE. All rights reserved</Text>
        </Container>
      </Box>
    </Box>
  );
}
