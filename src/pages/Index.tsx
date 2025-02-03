import { useEffect } from "react";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const Index = () => {
  useEffect(() => {
    console.log("Portfolio page loaded");
  }, []);

  return (
    <main className="bg-white">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
    </main>
  );
};

export default Index;