import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ProductCategories />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;