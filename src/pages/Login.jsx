import { Box, Button, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";

const Login = () => {
  return (
    <Flex minHeight="100vh" align="center" justify="center" bg="black">
      <Box bg="gray.800" p={8} rounded="md" width="sm">
        <Heading mb={6} color="white" textAlign="center">
          Company Logo
        </Heading>
        <Stack spacing={4}>
          <Box>
            <Text color="white" mb={2}>Username</Text>
            <Input placeholder="Enter your username" bg="white" />
          </Box>
          <Box>
            <Text color="white" mb={2}>Password</Text>
            <Input type="password" placeholder="Enter your password" bg="white" />
          </Box>
          <Button colorScheme="orange" bg="#FF9933" color="white" _hover={{ bg: "#FF7F00" }}>
            Login
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Login;