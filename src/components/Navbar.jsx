import { Box, Flex, Link, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="black" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box color="white" fontWeight="bold">Company Logo</Box>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "#FF9933" }} color="white">
            Dashboard
          </Link>
          <Link as={RouterLink} to="/leads" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "#FF9933" }} color="white">
            Leads
          </Link>
          <Link as={RouterLink} to="/reports" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "#FF9933" }} color="white">
            Reports
          </Link>
          <Link as={RouterLink} to="/settings" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "#FF9933" }} color="white">
            Settings
          </Link>
          <Menu>
            <MenuButton as={Link} px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "#FF9933" }} color="white">
              User Name
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;