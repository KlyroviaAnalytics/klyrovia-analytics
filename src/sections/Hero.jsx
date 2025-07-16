import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground"; // ✅ Correct casing
import { Particles } from "../components/Particles";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden md:justify-start md:items-start c-space">
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
