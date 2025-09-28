import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Moon } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 px-6 bg-gradient-hero">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-glow">
          <CardContent className="p-12 text-center">
            <div className="mb-8 flex justify-center">
              <div className="p-4 rounded-full bg-white/20">
                <Moon className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Sweet Dreams Start Here
            </h2>
            
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join our wellness community and receive exclusive sleep tips, 
              product updates, and special offers for your journey to better rest.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm"
              />
              <Button variant="hero" className="whitespace-nowrap">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-white/70">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;