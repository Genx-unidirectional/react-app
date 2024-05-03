import { poppins } from "@/components/font";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Mentor from "@/components/Mentor";
import Footer from "@/components/Footer";
import ContactUs from "@/components/Contact";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <div className={`${poppins.className}  min-h-screen w-full`}>
      <Header></Header>
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Mentor />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
