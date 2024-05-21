import { Container, Heading, Text, VStack, HStack, IconButton, Image, Box } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwQW50b24lMjBDYXJsc3RyJUMzJUI2bXxlbnwwfHx8fDE3MTYzMDM1MDR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Anton Carlström" mb={4} />
          <Heading as="h1" size="xl">
            Anton Carlström
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Software Developer | Tech Enthusiast | Blogger
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            About Me
          </Heading>
          <Text fontSize="md">Hello! I'm Anton Carlström, a passionate software developer with a love for creating innovative solutions and sharing knowledge through my blog. With a background in computer science and years of experience in the tech industry, I enjoy exploring new technologies and writing about my experiences.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Latest Blog Posts
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">
                Understanding React Hooks
              </Heading>
              <Text fontSize="sm" color="gray.500">
                Published on October 1, 2023
              </Text>
              <Text mt={2}>React Hooks have revolutionized the way we write React components. In this post, we'll dive deep into the most commonly used hooks and how they can simplify your code.</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">
                A Guide to Modern CSS
              </Heading>
              <Text fontSize="sm" color="gray.500">
                Published on September 15, 2023
              </Text>
              <Text mt={2}>CSS has come a long way in recent years. This guide covers the latest features and best practices for writing clean, maintainable CSS.</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">
                Building RESTful APIs with Node.js
              </Heading>
              <Text fontSize="sm" color="gray.500">
                Published on August 30, 2023
              </Text>
              <Text mt={2}>Learn how to build robust and scalable RESTful APIs using Node.js and Express. This tutorial covers everything from setting up your environment to deploying your API.</Text>
            </Box>
          </VStack>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Connect with Me
          </Heading>
          <HStack spacing={4} justify="center">
            <IconButton as="a" href="https://twitter.com/anton_carlstrom" aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            <IconButton as="a" href="https://linkedin.com/in/anton-carlstrom" aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
            <IconButton as="a" href="https://github.com/antoncarlstrom" aria-label="GitHub" icon={<FaGithub />} size="lg" />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
