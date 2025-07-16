import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/Parallaxbackground"; // ✅ match file casing here
import { Particles } from "../components/Particles";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden md:justify-start md:items-start c-space">
      {/* Background Particles */}
      <Particles />

      {/* Optional Parallax Layer */}
      <ParallaxBackground />

      {/* Hero Text */}
      <HeroText />
    </section>
  );
};

export default Hero;
