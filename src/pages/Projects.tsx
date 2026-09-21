import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import ArticleComponent from "../components/ArticleComponent";
import { GiGamepad } from "react-icons/gi";
import { TypeAnimation } from "react-type-animation";
import { LuExternalLink } from "react-icons/lu";

function Projects() {
    const txt1 = "Search for your favorite games or game franchises from the IGDB API.";

    return (
        <ArticleComponent>
           <Box border="1px solid white" fontSize="lg" maxW={{ base: "95dvw", md: "70dvw" }} minH="150px" fontFamily="mono">
                <Heading textAlign="center"  mt="5" fontSize="3xl" fontFamily="inherit">
                    <Link href="https://www.gamefinder.games" target="_blank" rel="noopener noreferrer" color="white" _hover={{color: "#B983FF", textDecoration: "underline" }}>Gamefinder <LuExternalLink/></Link>
                </Heading>
                <Flex justify="space-between" align="start" p="4" gap={5}>
                    <Text flex="1">
                        <TypeAnimation sequence={[txt1]} repeat={0} speed={{type: "keyStrokeDelayInMs", value: 10}}/>
                    </Text>
                    <Box animation="spin 1s linear">
                        <GiGamepad size={35}/>
                    </Box>
                </Flex>
           </Box>
        </ArticleComponent> 
    );
}

export default Projects;