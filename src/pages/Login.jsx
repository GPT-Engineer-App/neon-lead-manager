import { useState } from "react";
import { Box, Button, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(username, password);
    if (success) {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Flex minHeight="100vh" align="center" justify="center" bg="black">
      <Box bg="gray.800" p={8} rounded="md" width="sm">
        <Heading mb={6} color="white" textAlign="center">
          Company Logo
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <Box>
              <Text color="white" mb={2}>Username</Text>
              <Input
                placeholder="Enter your username"
                bg="white"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Box>
            <Box>
              <Text color="white" mb={2}>Password</Text>
              <Input
                type="password"
                placeholder="Enter your password"
                bg="white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <Button type="submit" colorScheme="orange" bg="#FF9933" color="white" _hover={{ bg: "#FF7F00" }}>
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default Login;