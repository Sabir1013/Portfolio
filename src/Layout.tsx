import {Flex} from "@chakra-ui/react";
import Header from "./components/Header";
import {Outlet} from "react-router-dom";
import Footer from "./components/Footer";

function Layout() {
    return (
        <Flex minH="100vh" flexDirection="column">
            <Header/>
            <Outlet/>
            <Footer/>
        </Flex>
    );
}

export default Layout;