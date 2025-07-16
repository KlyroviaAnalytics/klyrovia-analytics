import HeroText from "../components/HeroText";
import parallaxBackground from "../components/parallaxBackground"; // ✅ match file casing here
import { Particles } from "../components/Particles";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden md:justify-start md:items-start c-space">
      {/* Background Particles */}
      <Particles />

      {/* Optional Parallax Layer */}
      <parallaxBackground />

      {/* Hero Text */}
      <HeroText />
    </section>
  );
};

export default Hero;
