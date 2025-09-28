import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Leaf, Moon, Star, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Natural Ingredients",
      description: "We source only the finest natural and organic ingredients for all our products."
    },
    {
      icon: Heart,
      title: "Wellness First",
      description: "Your well-being is our priority. Every product is designed with your health in mind."
    },
    {
      icon: Moon,
      title: "Sleep Science",
      description: "Our formulations are backed by sleep research and aromatherapy expertise."
    },
    {
      icon: Star,
      title: "Quality Assured",
      description: "Rigorous testing ensures every product meets our high standards of excellence."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "50+", label: "Natural Products" },
    { number: "5 Years", label: "Of Excellence" },
    { number: "99%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-hero text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-light mb-6">
              About Sleep Ease
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Crafting natural wellness products to help you discover the peaceful sleep you deserve
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
                Our Story
              </h2>
            </div>
            
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <p>
                Sleep Ease was born from a simple yet profound realization: in our fast-paced world, 
                quality sleep has become a luxury rather than a necessity. Our founder, struggling with 
                sleepless nights and seeking natural alternatives to synthetic sleep aids, discovered 
                the transformative power of aromatherapy and herbal wellness.
              </p>
              
              <p>
                What began as a personal journey to better sleep evolved into a mission to help others 
                find their path to peaceful rest. We partnered with herbalists, aromatherapists, and 
                sleep specialists to create a curated collection of products that honor both ancient 
                wisdom and modern science.
              </p>
              
              <p>
                Today, Sleep Ease continues to be guided by the belief that everyone deserves restful, 
                rejuvenating sleep. Each product in our collection is thoughtfully crafted with natural 
                ingredients, sustainable practices, and a deep commitment to your wellness journey.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6 bg-gradient-soft">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-gradient-card border-none shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 rounded-full bg-primary/10">
                        <value.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-medium text-card-foreground mb-4">
                      {value.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
                By the Numbers
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-light text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-6 bg-gradient-hero text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90 mb-8">
              To help people rediscover the natural joy of restful sleep through thoughtfully 
              crafted wellness products that honor both tradition and innovation.
            </p>
            <div className="flex justify-center">
              <Award className="h-16 w-16 text-primary-glow" />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;