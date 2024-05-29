import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Flex minHeight="100vh" align="center" justify="center" bg="gray.200">
      <Box textAlign="center">
        <Heading mb={6}>Welcome to the RV Dealership Sales Lead Management Tool</Heading>
        <Text mb={6}>Manage your leads efficiently and effectively.</Text>
        <Button as={RouterLink} to="/login" colorScheme="orange" bg="#FF9933" color="white" _hover={{ bg: "#FF7F00" }}>
          Get Started
        </Button>
      </Box>
    </Flex>
  );
};

export default Index;