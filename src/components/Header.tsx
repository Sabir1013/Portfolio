import { rainbow } from "@/animations";
import { Box, Flex, List, Text, Link as ChakraLink } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

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
      pr={{ base: "4", md: "10" }}
      pl={{ base: "4", md: "10" }}
      py="5"
      borderBottom="2px solid"
      flexWrap="wrap"
      gap="3"
      animation={`${rainbow} 10s linear infinite`}
    >
      <Text as="h1" fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight="extrabold" letterSpacing="tight">
        {title}
      </Text>
      <Box as="nav">
        <List.Root display="flex" flexDirection="row" listStyleType="none" gap="10">
          <List.Item><ChakraLink color="white"><RouterLink to="/">Home</RouterLink></ChakraLink></List.Item>
          <List.Item><ChakraLink color="white"><RouterLink to="/interests">Interests</RouterLink></ChakraLink></List.Item>
          <List.Item><ChakraLink color="white"><RouterLink to="/projects">Projects</RouterLink></ChakraLink></List.Item>
        </List.Root>
      </Box>
    </Flex>
  );
}

export default Header;