import LogoSection from "./components/LogoSection";
import NavBar from "./components/NavBar";
import Hero from "./sections/hero";
import ShowcaseSection from "./sections/ShowcaseSection";

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <ShowcaseSection></ShowcaseSection>
      <LogoSection></LogoSection>
    </>
  );
};

export default App;
