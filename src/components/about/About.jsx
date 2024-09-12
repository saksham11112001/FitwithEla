import HeroSection from "./HeroSection";
import Values from "./Values";
import HeroImages from "./HeroImages";
import GymStory from "./GymStory";
import Trainers from "../trainers/Trainers";
import Certifications from "../classes/Certifications";

const About = () => {
  return (
    <div>
      <HeroSection />
      <HeroImages />
      <GymStory />
      <Certifications/>
      <Values />
      
    </div>
  );
};

export default About;
