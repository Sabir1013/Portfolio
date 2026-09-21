import {Box, Text} from "@chakra-ui/react";
import { ReactNode } from "react";
import { TypeAnimation } from "react-type-animation";

interface Props {
    text? : string;
    children? : ReactNode;
}

function ArticleComponent({text, children} : Props) {
    return (
       <Box as="article" pl={{ base: "4", md: "10" }} pr={{ base: "4", md: "10" }} flex="1" bg="black" color="white" fontFamily="mono" fontSize={{ base: "1em", md: "2em" }} alignContent="center">
            {text && (
                <Text as="p">
                    <TypeAnimation sequence={[text]} repeat={0} speed={{type: "keyStrokeDelayInMs", value: 10}}/>
                </Text>
            )}
          {children} 
      </Box>
    );
}

export default ArticleComponent;