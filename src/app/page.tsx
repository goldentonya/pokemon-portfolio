import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Origin from "@/components/Origin";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Origin />
      <Skills />
      <Experience />
      <CaseStudies />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
