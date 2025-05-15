import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Showcase from "./sections/Showcase";
import TechStack from "./sections/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Showcase />
      <TechStack />
    </>
  );
}
