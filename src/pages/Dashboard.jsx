import { Box, Flex, Text } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Flex minHeight="100vh" bg="gray.200">
      <Box width="20%" bg="gray.700" p={4} color="white">
        <Text>Calendar</Text>
        <Text>Filters</Text>
      </Box>
      <Box width="60%" bg="gray.200" p={4}>
        <Text>Lead Management Table</Text>
        <Text>Quick Add Lead Form</Text>
      </Box>
      <Box width="20%" bg="gray.300" p={4}>
        <Text>Performance Metrics</Text>
        <Text>Team Chat</Text>
      </Box>
    </Flex>
  );
};

export default Dashboard;