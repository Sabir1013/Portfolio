import { Box, Flex, Link, List, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Flex 
      as="header" 
      bg="black" 
      color="white" 
      fontFamily="monospace" 
      justifyContent="space-between" 
      alignItems="center" 
      pr="10" 
      pl="10" 
      py="5" 
      borderBottom="2px solid" 
      borderBottomColor="cyan.400"
    >
      <Text as="h1" fontSize="2rem" fontWeight="extrabold" letterSpacing="tight">
        Sabir Tarique
      </Text>
      <Box as="nav">
        <List.Root display="flex" flexDirection="row" listStyleType="none" gap="10">
          <List.Item><Link color="white" href="/">Home</Link></List.Item>
          <List.Item><Link color="white" href="/interests">Interests</Link></List.Item>
          <List.Item><Link color="white" href="/experience">Experience</Link></List.Item>
        </List.Root>
      </Box>
      
    </Flex>
  );
}

export default Header;
