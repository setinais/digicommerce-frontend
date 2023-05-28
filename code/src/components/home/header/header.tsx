import DrawerShopping from "@/components/drawer/shopping";
import ToogleTheme from "@/components/theme/theme";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Show,
  Stack,
  TagLabel,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrLogin } from "react-icons/gr";

const Header = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };
  const handleKeyDown = (e: any) => {
    if (e.key == "Enter") onSubmit();
  };

  const onSubmit = () => {
    console.log(search);
  };

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box p={2}>
          <Link as={NextLink} href="/" color="blue.400">
            <Heading size="sm">DIGICOMMERCE</Heading>
          </Link>
        </Box>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <InputGroup>
              <Input
                value={search}
                type="tel"
                placeholder="Search"
                onChange={handleSearch}
                onKeyDown={handleKeyDown}
              />
              <InputRightElement>
                <IconButton
                  variant="ghost"
                  colorScheme="black"
                  aria-label="Search"
                  onClick={onSubmit}
                  icon={<Icon as={BiSearchAlt2} />}
                />
              </InputRightElement>
            </InputGroup>
            <Show above="sm">
              <ToogleTheme />
              <DrawerShopping />
              <Link as={NextLink} href="/auth/signin">
                <Button p="5" color="blue.400">
                  Login
                </Button>
              </Link>
            </Show>
            <Show below="sm">
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<Icon as={GiHamburgerMenu} />}
                  aria-label="Options"
                  variant="outline"
                />
                <MenuList>
                  <MenuItem>
                    <DrawerShopping title="Carrinho" />
                  </MenuItem>
                  <MenuItem>
                    <ToogleTheme title="ThemeMode" />
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem icon={<Icon as={GrLogin} />}>Login</MenuItem>
                </MenuList>
              </Menu>
            </Show>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
