import React from "react";
import { Text, Button } from "@chakra-ui/react";

const ViewButton = () => {
  return (
    <Button
      background="#003380"
      color="whiteAlpha.900"
      borderRadius="3xl"
      border="1px"
      p="5"
      mt={5}
      _hover={{
        background: "whiteAlpha.900",
        color: "#003380",
        borderRadius: "3xl",
        p: "5",
        border: "1px",
        variant: "outline",
      }}
    >
      <Text fontSize="md" fontWeight="500">
        View All
      </Text>
    </Button>
  );
};

export default ViewButton;
