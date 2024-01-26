import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { Flex } from "@chakra-ui/react";

const App = () => {
  return (
    <>
      <Flex
        minH="100vh"
        width={"90%"}
        maxW={"1900px"}
        mx={"auto"}
        p={0}
        flexDir={"column"}
      >
        <Navbar />
        <HomePage />
        <About />
        <Projects />
      </Flex>
      <Footer />
    </>
  );
};

export default App;
