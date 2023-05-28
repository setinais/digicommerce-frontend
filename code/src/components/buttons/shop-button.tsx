import useLocalStorage from "@/hooks/useLocalStorage";
import { Box, Button, Icon, IconButton, Tag } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const ShopButton = (props: { onClick: any; title?: string }) => {
  const { value } = useLocalStorage<number>("qntd-shop", 0);

  return (
    <Box position={"relative"}>
      <Button
        variant="ghost"
        aria-label="Carrinho"
        onClick={props.onClick}
        rightIcon={<Icon as={FaShoppingCart} />}
      >
        {props.title && props.title}
      </Button>

      {value !== 0 && (
        <Tag
          size={"sm"}
          variant="solid"
          colorScheme={"red"}
          position={"absolute"}
          right="-5px"
          top="50%"
          borderRadius={"full"}
        >
          {value}
        </Tag>
      )}
    </Box>
  );
};

export default ShopButton;
