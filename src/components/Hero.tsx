import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-sleep.jpg";
import logoImage from "@/assets/sleepease-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      
      {/* Floating Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary-glow rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-primary-glow rounded-full opacity-40 animate-bounce" />
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-primary-glow rounded-full opacity-50 animate-pulse" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src={logoImage} 
            alt="Sleep Ease" 
            className="h-24 w-24 md:h-32 md:w-32 drop-shadow-glow"
          />
        </div>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-wide">
          Peaceful Sleep
          <span className="block text-3xl md:text-5xl text-primary-glow mt-2">
            Naturally Yours
          </span>
        </h1>
        
        {/* Description */}
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Discover our curated collection of natural sleep wellness products, 
          crafted to help you unwind and find your perfect night's rest.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild variant="hero" size="lg" className="transition-bounce hover:scale-105">
            <Link to="/shop">Shop Collection</Link>
          </Button>
          <Button asChild variant="ghost-hero" size="lg" className="transition-bounce hover:scale-105">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;