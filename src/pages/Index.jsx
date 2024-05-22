import { Box, Container, Flex, Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="gray.800" color="white" py={4}>
        <Container maxW="container.xl">
          <HStack spacing={8} justify="space-between">
            <Heading as="h1" size="lg">
              Financial Times
            </Heading>
            <HStack spacing={4}>
              <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
              <Link as={RouterLink} to="/news" _hover={{ textDecoration: "none", color: "gray.400" }}>News</Link>
              <Link as={RouterLink} to="/markets" _hover={{ textDecoration: "none", color: "gray.400" }}>Markets</Link>
              <Link as={RouterLink} to="/opinion" _hover={{ textDecoration: "none", color: "gray.400" }}>Opinion</Link>
              <Link as={RouterLink} to="/more" _hover={{ textDecoration: "none", color: "gray.400" }}>More</Link>
            </HStack>
          </HStack>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Flex direction={{ base: "column", md: "row" }} mt={8}>
        <Box flex="3" p={4}>
          <Heading as="h2" size="xl" mb={4}>Latest News</Heading>
          <VStack spacing={8} align="stretch">
            <Box>
              <Image src="https://via.placeholder.com/800x400" alt="News Image" mb={4} />
              <Heading as="h3" size="md">Headline 1</Heading>
              <Text mt={2}>Brief description of the news article goes here. This is a summary of the content.</Text>
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/800x400" alt="News Image" mb={4} />
              <Heading as="h3" size="md">Headline 2</Heading>
              <Text mt={2}>Brief description of the news article goes here. This is a summary of the content.</Text>
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/800x400" alt="News Image" mb={4} />
              <Heading as="h3" size="md">Headline 3</Heading>
              <Text mt={2}>Brief description of the news article goes here. This is a summary of the content.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" bg="gray.100" p={4}>
          <Heading as="h2" size="lg" mb={4}>Trending Topics</Heading>
          <VStack spacing={4} align="stretch">
            <Text>Topic 1</Text>
            <Text>Topic 2</Text>
            <Text>Topic 3</Text>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={4} mt={8}>
        <Container maxW="container.xl">
          <Flex justify="space-between">
            <Text>&copy; 2023 Financial Times</Text>
            <HStack spacing={4}>
              <Link as={RouterLink} to="/contact" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
              <Link as={RouterLink} to="/privacy" _hover={{ textDecoration: "none", color: "gray.400" }}>Privacy Policy</Link>
              <Link as={RouterLink} to="/terms" _hover={{ textDecoration: "none", color: "gray.400" }}>Terms of Service</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;