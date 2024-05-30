import { useState } from "react";
import { Box, Flex, Text, Table, Thead, Tbody, Tr, Th, Td, Button, Collapse, FormControl, FormLabel, Input, Stat, StatLabel, StatNumber, StatHelpText, StatGroup } from "@chakra-ui/react";

const Dashboard = () => {
  const [leads, setLeads] = useState([
    { name: "John Doe", contact: "john@example.com", source: "Website", status: "New", salesperson: "Alice" },
    { name: "Jane Smith", contact: "jane@example.com", source: "Phone Call", status: "Contacted", salesperson: "Bob" },
    { name: "Mike Johnson", contact: "mike@example.com", source: "Website", status: "Converted", salesperson: "Charlie" },
    // Add more leads as needed
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newLead, setNewLead] = useState({ name: "", contact: "", rvInterests: "" });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add the new lead to the leads array
    setLeads([...leads, { ...newLead, status: "New", salesperson: "Unassigned" }]);
    // Reset the form fields
    setNewLead({ name: "", contact: "", rvInterests: "" });
    // Close the form
    setIsFormOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLead({ ...newLead, [name]: value });
  };

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
        <Button onClick={() => setIsFormOpen(!isFormOpen)} colorScheme="orange" bg="#FF9933" color="white" _hover={{ bg: "#FF7F00" }} mb={4}>
          {isFormOpen ? "Close Form" : "Quick Add Lead Form"}
        </Button>
        <Collapse in={isFormOpen} animateOpacity>
          <Box bg="gray.300" p={4} rounded="md" mb={4}>
            <form onSubmit={handleFormSubmit}>
              <FormControl id="name" mb={4}>
                <FormLabel color="white">Name</FormLabel>
                <Input name="name" value={newLead.name} onChange={handleInputChange} bg="white" />
              </FormControl>
              <FormControl id="contact" mb={4}>
                <FormLabel color="white">Contact Information</FormLabel>
                <Input name="contact" value={newLead.contact} onChange={handleInputChange} bg="white" />
              </FormControl>
              <FormControl id="rvInterests" mb={4}>
                <FormLabel color="white">RV Interests</FormLabel>
                <Input name="rvInterests" value={newLead.rvInterests} onChange={handleInputChange} bg="white" />
              </FormControl>
              <Button type="submit" colorScheme="orange" bg="#FF9933" color="white" _hover={{ bg: "#FF7F00" }}>
                Submit Lead
              </Button>
            </form>
          </Box>
        </Collapse>
      </Box>
      <Box width="20%" bg="gray.300" p={4}>
        <Text>Performance Metrics</Text>
        <StatGroup>
          <Stat>
            <StatLabel>Leads Generated This Week</StatLabel>
            <StatNumber color="#00FF00">45</StatNumber>
            <StatHelpText>Updated 1 hour ago</StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Sales Closed This Month</StatLabel>
            <StatNumber color="#00FF00">12</StatNumber>
            <StatHelpText>Updated 1 hour ago</StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Top Performing Salesperson</StatLabel>
            <StatNumber color="#00FF00">Alice</StatNumber>
            <StatHelpText>Updated 1 hour ago</StatHelpText>
          </Stat>
        </StatGroup>
        <Text>Team Chat</Text>
      </Box>
    </Flex>
  );
};

export default Dashboard;