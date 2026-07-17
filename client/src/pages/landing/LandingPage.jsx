import PublicLayout from "../../layouts/PublicLayout";
import Navbar from "../../components/navigation/Navbar";
import RevealOnScroll from "../../components/ui/RevealOnScroll";
import Hero from "../../components/landing/Hero";
import Statistics from "../../components/landing/Statistics";
import FeaturesSection from "../../components/landing/FeaturesSection";
import WhyKizuna from "../../components/landing/WhyKizuna";
import ProductPreview from "../../components/landing/ProductPreview";
import Testimonials from "../../components/landing/Testimonials";
import CTASection from "../../components/landing/CTASection";
import Footer from "../../components/footer/Footer";

const LandingPage = () => {
  return (
    <PublicLayout>
      <Navbar />

      {/* Hero remains immediate - never animate above-the-fold content */}
      <Hero />

      {/* 
        Subsequent sections use RevealOnScroll with cascading delays.
        This creates a subtle, premium waterfall rhythm as the user scrolls,
        naturally enforcing the narrative flow of the page.
      */}
      <RevealOnScroll style={{ transitionDelay: "0ms" }}>
        <Statistics />
      </RevealOnScroll>

      <RevealOnScroll style={{ transitionDelay: "50ms" }}>
        <FeaturesSection />
      </RevealOnScroll>

      <RevealOnScroll style={{ transitionDelay: "100ms" }}>
        <WhyKizuna />
      </RevealOnScroll>

      <RevealOnScroll style={{ transitionDelay: "150ms" }}>
        <ProductPreview />
      </RevealOnScroll>

      <RevealOnScroll style={{ transitionDelay: "200ms" }}>
        <Testimonials />
      </RevealOnScroll>

      <RevealOnScroll style={{ transitionDelay: "250ms" }}>
        <CTASection />
      </RevealOnScroll>

      <Footer />
    </PublicLayout>
  );
};

export default LandingPage;
