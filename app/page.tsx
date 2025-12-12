import About from "@/components/About";
import Applications from "@/components/Applications";
import BeeRating from "@/components/BeeRating";
import Contact from "@/components/Contact";
import DesignDevelopment from "@/components/DesignDevelopment";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manufacturing from "@/components/Manufacturing";
import ProductProfile from "@/components/ProductProfile";
import Quality from "@/components/Quality";
import WhyUs from "@/components/WhyUs";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ProductProfile />
        <DesignDevelopment />
        <Manufacturing />
        <Quality />
        <BeeRating />
        <Applications />
        <WhyUs />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
