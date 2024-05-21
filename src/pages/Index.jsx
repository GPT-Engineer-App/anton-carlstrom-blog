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
            Manager, CSM Team | Tech Enthusiast | Blogger
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            About Me
          </Heading>
          <Text fontSize="md">Hello! I'm Anton Carlström, a manager in the CSM team with a love for creating innovative solutions and sharing knowledge through my blog. With a background in computer science and years of experience in the tech industry, I enjoy exploring new technologies and writing about my experiences.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Latest Blog Posts
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">
                Effective Team Management Strategies
              </Heading>
              <Text fontSize="sm" color="gray.500">
                Published on May 1, 2024
              </Text>
              <Text mt={2}>Managing a team effectively requires a blend of leadership skills and strategic planning. This post explores key strategies for leading a successful team.</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">
                The Future of Artificial Intelligence
              </Heading>
              <Text fontSize="sm" color="gray.500">
                Published on April 15, 2024
              </Text>
              <Text mt={2}>Artificial Intelligence is rapidly evolving. This post discusses the future trends in AI and their potential impact on various industries.</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">
                Navigating the Challenges of Remote Work
              </Heading>
              <Text fontSize="sm" color="gray.500">
                Published on March 30, 2024
              </Text>
              <Text mt={2}>Remote work presents unique challenges for managers and employees alike. This post offers practical advice for overcoming these challenges and maintaining productivity.</Text>
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
