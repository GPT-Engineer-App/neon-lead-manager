import { Box, Flex, Text, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { useState } from "react";

const Dashboard = () => {
  const [leads, setLeads] = useState([
    { name: "John Doe", contact: "john@example.com", source: "Website", status: "New", salesperson: "Alice" },
    { name: "Jane Smith", contact: "jane@example.com", source: "Phone Call", status: "Contacted", salesperson: "Bob" },
    { name: "Mike Johnson", contact: "mike@example.com", source: "Website", status: "Converted", salesperson: "Charlie" },
    // Add more leads as needed
  ]);

  const renderLeads = () => {
    return leads.map((lead, index) => (
      <Tr key={index} color={lead.status === "New" ? "neonGreen" : "inherit"}>
        <Td>{lead.name}</Td>
        <Td>{lead.contact}</Td>
        <Td>{lead.source}</Td>
        <Td>{lead.status}</Td>
        <Td>{lead.salesperson}</Td>
      </Tr>
    ));
  };

  return (
    <Flex minHeight="100vh" bg="gray.200">
      <Box width="20%" bg="gray.700" p={4} color="white">
        <Text>Calendar</Text>
        <Text>Filters</Text>
      </Box>
      <Box width="60%" bg="gray.200" p={4}>
        <Text fontSize="2xl" mb={4}>Lead Management Table</Text>
        <Table variant="simple" bg="white">
          <Thead bg="black">
            <Tr>
              <Th color="white" borderColor="black">Name</Th>
              <Th color="white" borderColor="black">Contact Information</Th>
              <Th color="white" borderColor="black">Lead Source</Th>
              <Th color="white" borderColor="black">Status</Th>
              <Th color="white" borderColor="black">Assigned Salesperson</Th>
            </Tr>
          </Thead>
          <Tbody>
            {renderLeads()}
          </Tbody>
        </Table>
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