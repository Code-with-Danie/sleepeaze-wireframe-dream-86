import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, Coffee, Droplets, Wind, Heart, Package } from "lucide-react";

const categories = [
  {
    icon: Flame,
    title: "Scented Candles",
    description: "Hand-poured candles with calming fragrances",
    color: "text-orange-400"
  },
  {
    icon: Coffee,
    title: "Herbal Teas",
    description: "Organic blends for evening relaxation",
    color: "text-green-500"
  },
  {
    icon: Droplets,
    title: "Essential Oils",
    description: "Pure aromatherapy oils for better sleep",
    color: "text-primary"
  },
  {
    icon: Wind,
    title: "Aromatherapy Incense",
    description: "Natural incense sticks and cones",
    color: "text-purple-400"
  },
  {
    icon: Heart,
    title: "Sleep Mints",
    description: "Soothing mints with natural extracts",
    color: "text-emerald-400"
  },
  {
    icon: Package,
    title: "Relaxation Kits",
    description: "Curated bundles for complete wellness",
    color: "text-primary-glow"
  }
];

const ProductCategories = () => {
  return (
    <section className="py-20 px-6 bg-gradient-soft">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Sleep Wellness
            <span className="block text-primary font-normal">Collection</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each product is carefully selected to support your natural sleep cycle and create a peaceful bedtime routine.
          </p>
        </div>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.title}
              className="group bg-gradient-card border-none shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <category.icon className={`h-8 w-8 ${category.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                </div>
                
                <h3 className="text-xl font-medium text-card-foreground mb-3">
                  {category.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <Button variant="outline-soft" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  Explore Collection
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;