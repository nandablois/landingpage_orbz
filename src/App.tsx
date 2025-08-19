import ContactForm from "./components/ContactForm";
import CreativeTechnology from "./components/CreativeTechnology";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import OurWork from "./components/OurWork";
import Services from "./components/Services";

export default function App() {
  return (
    <>
      <Header />
      <main className="font-urbanist min-h-screen">      
        <section aria-label="Hero">
          <HeroSection />
        </section>
    
        <section aria-label="Serviços">
          <Services />
        </section>
     
        <section aria-label="Our Work">
          <OurWork />
        </section>
     
        <section aria-label="Creative Technology">
          <CreativeTechnology />
        </section>

        <section aria-label="Contato">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}