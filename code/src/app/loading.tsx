"use client";
import { Box, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Box height="100rem" width="100%">
      <Spinner
        position={"absolute"}
        left="50%"
        top="25%"
        thickness="6px"
        speed="0.55s"
        emptyColor="gray.200"
        color="blue.400"
        size="xl"
      />
    </Box>
  );
};

export default Loading;
