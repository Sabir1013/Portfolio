import {Box, Text} from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";

interface Props {
    text : string;
}

function ArticleComponent({text} : Props) {
    return (
       <Box as="article" pl="10" pr="20em" flex="1" bg="black" color="white" fontFamily="mono" fontSize="2em" alignContent="center">
          <Text as="p">
                <TypeAnimation
                sequence={[text]}
                repeat={0}
                speed={{type: "keyStrokeDelayInMs", value: 10}}
                >
                </TypeAnimation>
          </Text>
      </Box>  
    );
}

export default ArticleComponent;