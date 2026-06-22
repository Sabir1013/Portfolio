import {Clipboard, Flex, Link, List, Text} from "@chakra-ui/react";
import resumePDF from "../assets/Sabir_Tarique_Resume.pdf";

function Footer() {
    return (
        <Flex 
        as="footer" 
        bg="black" color="white" fontFamily="math"
        py="5" pl="10" pr="10" 
        justifyContent="space-between"  alignItems="center"
        borderTop="2px solid" borderColor="cyan.400"
        >
            <List.Root as="ul" listStyle="none">
                <List.Item><Link color="white" href={resumePDF} target="_blank" rel="noopener noreferrer">My Resume</Link></List.Item>
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
            <Text as="h1">© 2026 Sabir Tarique</Text>
        </Flex>
    );
}

export default Footer;