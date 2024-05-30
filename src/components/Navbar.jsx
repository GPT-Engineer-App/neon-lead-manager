import { Box, Flex, Link, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext.jsx";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <Box bg="black" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box color="white" fontWeight="bold">Company Logo</Box>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "#FF9933" }} color="white">
            Dashboard
          </Link>
          {user && user.role === "Administrator" && (
            <>
              <Link as={RouterLink} to="/leads" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "#FF9933" }} color="white">
                Leads
              </Link>
              <Link as={RouterLink} to="/reports" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "#FF9933" }} color="white">
                Reports
              </Link>
              <Link as={RouterLink} to="/settings" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "#FF9933" }} color="white">
                Settings
              </Link>
            </>
          )}
          {user && user.role === "Sales Manager" && (
            <>
              <Link as={RouterLink} to="/leads" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "#FF9933" }} color="white">
                Leads
              </Link>
              <Link as={RouterLink} to="/reports" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "#FF9933" }} color="white">
                Reports
              </Link>
            </>
          )}
          {user && user.role === "Salesperson" && (
            <Link as={RouterLink} to="/leads" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "#FF9933" }} color="white">
              Leads
            </Link>
          )}
          <Menu>
            <MenuButton as={Link} px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "#FF9933" }} color="white">
              {user ? user.username : "User"}
            </MenuButton>
            <MenuList>
              <MenuItem as={RouterLink} to="/profile">Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;