import ContactForm from "./components/ContactForm";
import CreativeTechnology from "./components/CreativeTechnology";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import OurWork from "./components/OurWork";
import Services from "./components/Services";

export default function App(){
    return(
        <>
        <main className="font-urbanist min-h-screen">
            <Header />
            <HeroSection />
            <Services />
            <OurWork/>
            <CreativeTechnology />
            <ContactForm />
            <Footer />
        </main>
        </>
    )
}