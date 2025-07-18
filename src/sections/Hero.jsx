import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";
import { Particles } from "../components/Particles";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden md:justify-start md:items-start c-space"
    >
      {/* Background Particles */}
      <Particles />

      {/* Parallax Background */}
      <ParallaxBackground />

      {/* Hero Text */}
      <HeroText />
    </section>
  );
};

export default Hero;
