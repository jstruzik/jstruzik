import { useEffect } from "react";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const Index = () => {
  useEffect(() => {
    console.log("Resume template loaded");
  }, []);

  return (
    <main className="bg-white dark:bg-gray-800">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
    </main>
  );
};

export default Index;