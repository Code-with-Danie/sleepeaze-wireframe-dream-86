import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const categoryData = {
  "scented-candles": {
    title: "Scented Candles",
    description: "Hand-poured soy candles infused with premium essential oils for a peaceful ambiance",
    icon: "🕯️",
    products: [
      {
        id: 1,
        name: "Lavender Dreams Candle",
        price: 24.99,
        rating: 4.8,
        reviews: 127,
        image: "/placeholder.svg",
        description: "Hand-poured soy candle with pure lavender essential oil for ultimate relaxation"
      },
      {
        id: 2,
        name: "Vanilla Serenity Candle",
        price: 22.99,
        rating: 4.7,
        reviews: 89,
        image: "/placeholder.svg",
        description: "Warm vanilla scent that creates a cozy, peaceful atmosphere"
      },
      {
        id: 3,
        name: "Eucalyptus Mint Candle",
        price: 26.99,
        rating: 4.9,
        reviews: 156,
        image: "/placeholder.svg",
        description: "Refreshing blend that clears the mind and promotes deep breathing"
      }
    ]
  },
  "herbal-teas": {
    title: "Herbal Teas",
    description: "Organic tea blends crafted to support your natural sleep cycle",
    icon: "🍃",
    products: [
      {
        id: 4,
        name: "Chamomile Night Tea",
        price: 16.99,
        rating: 4.9,
        reviews: 203,
        image: "/placeholder.svg",
        description: "Classic chamomile flowers for gentle, natural sleep support"
      },
      {
        id: 5,
        name: "Sleepy Time Blend",
        price: 18.99,
        rating: 4.8,
        reviews: 174,
        image: "/placeholder.svg",
        description: "Proprietary blend of passionflower, lemon balm, and valerian root"
      }
    ]
  },
  "essential-oils": {
    title: "Essential Oils",
    description: "Pure, therapeutic-grade oils for aromatherapy and topical application",
    icon: "💧",
    products: [
      {
        id: 6,
        name: "Sleep Serenity Oil",
        price: 32.99,
        rating: 4.7,
        reviews: 156,
        image: "/placeholder.svg",
        description: "Premium blend of lavender, bergamot, and ylang-ylang"
      },
      {
        id: 7,
        name: "Pure Lavender Oil",
        price: 19.99,
        rating: 4.8,
        reviews: 234,
        image: "/placeholder.svg",
        description: "100% pure Bulgarian lavender essential oil"
      }
    ]
  },
  "sleep-mints": {
    title: "Sleep Mints",
    description: "Natural mints infused with calming herbs for bedtime relaxation",
    icon: "🌿",
    products: [
      {
        id: 8,
        name: "Tranquil Mint Blend",
        price: 12.99,
        rating: 4.6,
        reviews: 73,
        image: "/placeholder.svg",
        description: "Natural mints with passionflower and lemon balm extracts"
      }
    ]
  },
  "aromatherapy-incense": {
    title: "Aromatherapy Incense",
    description: "Hand-rolled incense sticks and cones made with natural resins and oils",
    icon: "🔥",
    products: [
      {
        id: 9,
        name: "Dreamy Incense Set",
        price: 19.99,
        rating: 4.8,
        reviews: 94,
        image: "/placeholder.svg",
        description: "Hand-rolled incense sticks with sandalwood and vanilla"
      }
    ]
  },
  "relaxation-kits": {
    title: "Relaxation Kits",
    description: "Curated bundles combining multiple products for the ultimate bedtime routine",
    icon: "📦",
    products: [
      {
        id: 10,
        name: "Complete Rest Kit",
        price: 79.99,
        rating: 4.9,
        reviews: 203,
        image: "/placeholder.svg",
        description: "Everything you need for the perfect bedtime routine - candle, tea, oil, and more"
      }
    ]
  }
};

const Category = () => {
  const { category } = useParams();
  const categoryInfo = categoryData[category as keyof typeof categoryData];

  if (!categoryInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
          <Link to="/shop" className="text-primary hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-hero text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">{categoryInfo.icon}</div>
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              {categoryInfo.title}
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              {categoryInfo.description}
            </p>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="py-6 px-6 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto">
            <Link 
              to="/shop" 
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Shop
            </Link>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-light text-foreground mb-4">
                Our {categoryInfo.title} Collection
              </h2>
              <p className="text-muted-foreground">
                {categoryInfo.products.length} product{categoryInfo.products.length !== 1 ? 's' : ''} available
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryInfo.products.map((product) => (
                <Card key={product.id} className="group bg-gradient-card border-none shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-muted rounded-t-lg mb-4 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                    </div>
                    
                    <div className="p-6">
                      <Badge variant="secondary" className="mb-3">
                        {categoryInfo.title}
                      </Badge>
                      
                      <h3 className="text-xl font-medium text-card-foreground mb-2">
                        {product.name}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 text-sm">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-semibold text-foreground">
                          ${product.price}
                        </span>
                        <Button className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {categoryInfo.products.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">No products available in this category yet.</p>
                <Link to="/shop" className="text-primary hover:underline mt-4 inline-block">
                  Browse all products
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Category;