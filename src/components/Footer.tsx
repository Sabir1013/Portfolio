import { rainbow } from "@/animations";
import {Clipboard, Flex, Link, List, Text} from "@chakra-ui/react";

function Footer() {
    return (
        <Flex 
        as="footer" 
        bg="black" color="white" 
        fontFamily="mono"
        fontSize="sm"
        py="5" pr={{ base: "4", md: "10" }}
        pl={{ base: "4", md: "10" }}
        justifyContent="space-between"  
        alignItems="center"
        borderTop="2px solid"
        flexWrap="wrap"
        gap="3"
        animation={`${rainbow} 10s linear infinite`}
        >
            <List.Root as="ul" listStyle="none">
                <List.Item><Link color="white" href="https://github.com/Sabir1013?tab=repositories" target="_blank" rel="noopener noreferrer">My Github</Link></List.Item>
                <List.Item><Link color="white" href="https://www.linkedin.com/in/sabir-tarique-69a170312" target="_blank" rel="noopener noreferrer">My LinkedIn</Link></List.Item>
                <List.Item>
                    <Clipboard.Root value="sabirmtarique@gmail.com">
                        <Clipboard.Trigger asChild>
                            <Link color="white">
                                <Clipboard.ValueText/>
                                <Clipboard.Indicator/>
                            </Link>
                        </Clipboard.Trigger>
                    </Clipboard.Root>
                </List.Item>
            </List.Root>
            <Text as="p" fontSize={{ base: "2xs", md: "xs" }}>© 2026 Sabir Tarique</Text>
        </Flex>
    );
}

export default Footer;