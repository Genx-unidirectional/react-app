import { poppins } from "@/components/font";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Mentor from "@/components/Mentor";
import Footer from "@/components/Footer";
import ContactUs from "@/components/Contact";
export default function Home() {
  return (
    <div
      className={`${poppins.className} bg-radial-gradient min-h-screen w-full`}
    >
      <Header></Header>
      <main>
        <Hero />
        <hr className="bg-slate-900 md:max-w-4xl w-2/3 my-6 mx-auto" />
        <Skills />
        <hr className="bg-slate-900 md:max-w-4xl w-2/3 my-6 mx-auto" />
        <Mentor />
        <hr className="bg-slate-900 md:max-w-4xl w-2/3 my-6 mx-auto" />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
