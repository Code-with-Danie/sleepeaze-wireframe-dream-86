import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Moon, Sun, Heart, Brain, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Wellness = () => {
  const tips = [
    {
      icon: Clock,
      title: "Maintain a Sleep Schedule",
      description: "Go to bed and wake up at the same time every day, even on weekends. This helps regulate your body's internal clock."
    },
    {
      icon: Moon,
      title: "Create a Bedtime Ritual",
      description: "Develop a calming pre-sleep routine with activities like reading, gentle stretching, or aromatherapy."
    },
    {
      icon: Sun,
      title: "Manage Light Exposure",
      description: "Get bright light exposure in the morning and dim the lights in the evening to support your circadian rhythm."
    },
    {
      icon: Heart,
      title: "Watch Your Diet",
      description: "Avoid large meals, caffeine, and alcohol before bedtime. Consider herbal teas that promote relaxation."
    },
    {
      icon: Brain,
      title: "Reduce Screen Time",
      description: "Limit exposure to blue light from devices at least an hour before bed. Consider using blue light filters."
    },
    {
      icon: Zap,
      title: "Stay Active",
      description: "Regular physical activity can help you fall asleep faster and enjoy deeper sleep, but avoid vigorous exercise close to bedtime."
    }
  ];

  const aromatherapyGuide = [
    {
      oil: "Lavender",
      benefits: "Promotes relaxation and reduces anxiety",
      usage: "Add 3-5 drops to a diffuser or pillow spray"
    },
    {
      oil: "Chamomile",
      benefits: "Calms the mind and eases tension",
      usage: "Use in tea or add to a warm bath"
    },
    {
      oil: "Bergamot",
      benefits: "Reduces stress and balances mood",
      usage: "Diffuse or apply topically when diluted"
    },
    {
      oil: "Ylang-Ylang",
      benefits: "Lowers blood pressure and promotes peace",
      usage: "Blend with carrier oil for massage"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-hero text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-light mb-6">
              Sleep Wellness
              <span className="block text-primary-glow">Guide</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Discover science-backed strategies and natural approaches to improve your sleep quality
            </p>
          </div>
        </section>

        {/* Sleep Tips Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
                Essential Sleep Tips
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Simple yet effective strategies to transform your sleep experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tips.map((tip, index) => (
                <Card key={index} className="bg-gradient-card border-none shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 rounded-full bg-primary/10">
                        <tip.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-medium text-card-foreground mb-4 text-center">
                      {tip.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed text-center">
                      {tip.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Aromatherapy Guide */}
        <section className="py-20 px-6 bg-gradient-soft">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
                Aromatherapy for Sleep
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Harness the power of essential oils to create a peaceful sleep environment
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aromatherapyGuide.map((item, index) => (
                <Card key={index} className="bg-gradient-card border-none shadow-card">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-medium text-card-foreground mb-4">
                      {item.oil}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.benefits}
                    </p>
                    
                    <div className="bg-primary/5 rounded-lg p-4">
                      <p className="text-sm font-medium text-primary mb-1">How to Use:</p>
                      <p className="text-muted-foreground">{item.usage}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sleep Science Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
                The Science of Sleep
              </h2>
            </div>
            
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <p>
                Sleep isn't just a passive state of rest—it's an active process that's essential for 
                physical health, mental clarity, and emotional well-being. During sleep, your body 
                repairs tissues, consolidates memories, and releases important hormones.
              </p>
              
              <p>
                The sleep cycle consists of several stages, including light sleep, deep sleep, and 
                REM (Rapid Eye Movement) sleep. Each stage serves a unique purpose in restoring 
                your body and mind. Natural sleep aids like aromatherapy can help facilitate 
                these natural processes.
              </p>
              
              <p>
                Research shows that consistent, quality sleep improves immune function, enhances 
                cognitive performance, regulates mood, and supports healthy metabolism. By creating 
                optimal sleep conditions and using natural wellness products, you can work with 
                your body's natural rhythms rather than against them.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-hero text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              Ready to Transform Your Sleep?
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Explore our collection of natural sleep wellness products designed to support 
              your journey to better rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/shop">Shop Collection</Link>
              </Button>
              <Button asChild variant="ghost-hero" size="lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Wellness;