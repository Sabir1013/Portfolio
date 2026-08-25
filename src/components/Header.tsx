import { Box, Flex, List, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [title, setTitle] = useState("Sabir");

  useEffect(() => {
    const eggs = ["Sabir!", "Sabir?", "Random Guy", "ERROR", "SABIR SABIR SABIR BOY"];
    if (Math.random() < 0.05) {
      setTitle(eggs[Math.floor(Math.random() * eggs.length)]);
    }
  }, []);

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
        {title}
      </Text>
      <Box as="nav">
        <List.Root display="flex" flexDirection="row" listStyleType="none" gap="10">
          <List.Item><Link color="white" to="/">Home</Link></List.Item>
          <List.Item><Link color="white" to="/interests">Interests</Link></List.Item>
          <List.Item><Link color="white" to="/projects">Projects</Link></List.Item>
        </List.Root>
      </Box>
    </Flex>
  );
}

export default Header;