import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Search, Filter, Star, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Lavender Dreams Candle",
    category: "Scented Candles",
    price: 24.99,
    rating: 4.8,
    reviews: 127,
    image: "/placeholder.svg",
    description: "Hand-poured soy candle with pure lavender essential oil"
  },
  {
    id: 2,
    name: "Chamomile Night Tea",
    category: "Herbal Teas",
    price: 16.99,
    rating: 4.9,
    reviews: 89,
    image: "/placeholder.svg",
    description: "Organic chamomile blend for peaceful evenings"
  },
  {
    id: 3,
    name: "Sleep Serenity Oil",
    category: "Essential Oils",
    price: 32.99,
    rating: 4.7,
    reviews: 156,
    image: "/placeholder.svg",
    description: "Premium blend of lavender, bergamot, and ylang-ylang"
  },
  {
    id: 4,
    name: "Tranquil Mint Blend",
    category: "Sleep Mints",
    price: 12.99,
    rating: 4.6,
    reviews: 73,
    image: "/placeholder.svg",
    description: "Natural mints with passionflower and lemon balm"
  },
  {
    id: 5,
    name: "Dreamy Incense Set",
    category: "Aromatherapy Incense",
    price: 19.99,
    rating: 4.8,
    reviews: 94,
    image: "/placeholder.svg",
    description: "Hand-rolled incense sticks with sandalwood and vanilla"
  },
  {
    id: 6,
    name: "Complete Rest Kit",
    category: "Relaxation Kits",
    price: 79.99,
    rating: 4.9,
    reviews: 203,
    image: "/placeholder.svg",
    description: "Everything you need for the perfect bedtime routine"
  }
];

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const categories = ["all", "Scented Candles", "Herbal Teas", "Essential Oils", "Sleep Mints", "Aromatherapy Incense", "Relaxation Kits"];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-soft">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-light text-foreground mb-6">
              Sleep Wellness
              <span className="block text-primary font-normal">Collection</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated selection of natural sleep aids and wellness products
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 px-6 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full sm:w-48">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
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
                        {product.category}
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
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;