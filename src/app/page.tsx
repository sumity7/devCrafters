import Contact from "@/components/Contact";
import Ecommerce from "@/components/Ecommerce";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import { PlanProvider } from "@/components/PlanContext";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Stack from "@/components/Stack";
import WebsiteTypes from "@/components/WebsiteTypes";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <PlanProvider>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <Services />
        <Ecommerce />
        <WebsiteTypes />
        <Process />
        <Stack />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </PlanProvider>
  );
}
