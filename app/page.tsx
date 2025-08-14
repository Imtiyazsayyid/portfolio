import Footer from "@/components/Footer";
import LightAndGrid from "@/components/LightAndGrid";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Hero from "@/components/ui/Hero";

export default function Home() {
  return (
    <main className="relative bg-black-100 overflow-x-clip -z-2">
      <LightAndGrid showLights extraClasses="min-h-screen" />
      <Hero />
      <Projects />
      <Skills />
      {/* <WorkExperience /> */}
      <LightAndGrid extraClasses="max-h-[30rem] overflow-hidden" />
      <Footer />
    </main>
  );
}
