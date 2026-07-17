import PublicLayout from "../../layouts/PublicLayout";
import Navbar from "../../components/navigation/Navbar";
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
      <Hero />
      <Statistics />
      <FeaturesSection />
      <WhyKizuna />
      <ProductPreview />
      <Testimonials />
      <CTASection />
      <Footer />
    </PublicLayout>
  );
};

export default LandingPage;
