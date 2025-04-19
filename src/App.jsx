import LogoSection from "./sections/LogoSection";
import NavBar from "./components/NavBar";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/hero";
import ShowcaseSection from "./sections/ShowcaseSection";

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <ShowcaseSection></ShowcaseSection>
      <LogoSection></LogoSection>
      <FeatureCards></FeatureCards>
    </>
  );
};

export default App;
