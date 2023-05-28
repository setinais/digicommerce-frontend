import { IShopping } from "@/api/dtos/shopping";
import useLocalStorage from "@/hooks/useLocalStorage";
import {
  Button,
  Card,
  CardBody,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import ShopButton from "../buttons/shop-button";

const DrawerShopping = (props: { title?: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { value } = useLocalStorage<IShopping[]>("carrinho", []);

  const products = () => {
    return value.length !== 0 ? (
      value.map((products: IShopping) => (
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "100px" }}
            src={products.src}
            alt={products.name}
          />

          <Stack>
            <CardBody>
              <Heading size="md">{products.name}</Heading>
              <Text py="2">Quantidade: {products.qntd}</Text>
            </CardBody>
          </Stack>
        </Card>
      ))
    ) : (
      <Text align={"center"}>Carrinho vazio...</Text>
    );
  };
  return (
    <>
      <ShopButton {...props} onClick={onOpen} />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"md"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Carrinho</DrawerHeader>
          <DrawerBody>{products()}</DrawerBody>

          <DrawerFooter position={"relative"}>
            <Button colorScheme="blue">Finalizar Pedido</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerShopping;
