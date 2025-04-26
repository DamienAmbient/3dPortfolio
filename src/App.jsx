import LogoSection from "./sections/LogoSection";
import NavBar from "./components/NavBar";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <ShowcaseSection></ShowcaseSection>
      <LogoSection></LogoSection>
      <FeatureCards></FeatureCards>
      <ExperienceSection></ExperienceSection>
      <TechStack></TechStack>
      <Testimonials></Testimonials>
    </>
  );
};

export default App;
