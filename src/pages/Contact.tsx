import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@sleepease.com",
      description: "We typically respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) SLEEP-99",
      description: "Monday - Friday, 9 AM - 6 PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Wellness Avenue, Peaceful City, PC 12345",
      description: "Our wellness center and showroom"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 9 AM - 6 PM EST",
      description: "Weekend support via email"
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
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Have questions about our products or need wellness guidance? We're here to help.
            </p>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
                Ways to Reach Us
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-gradient-card border-none shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 rounded-full bg-primary/10">
                        <info.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-medium text-card-foreground mb-2">
                      {info.title}
                    </h3>
                    
                    <p className="text-foreground font-medium mb-2">
                      {info.details}
                    </p>
                    
                    <p className="text-muted-foreground text-sm">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-6 bg-gradient-soft">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
                Send Us a Message
              </h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>
            
            <Card className="bg-gradient-card border-none shadow-glow">
              <CardContent className="p-8 md:p-12">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you..."
                      className="min-h-32"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-8">
              <Card className="bg-gradient-card border-none shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-medium text-card-foreground mb-4">
                    How quickly will I receive my order?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Most orders ship within 1-2 business days. Standard shipping takes 3-5 business days, 
                    while expedited shipping options are available for faster delivery.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-none shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-medium text-card-foreground mb-4">
                    Do you offer a satisfaction guarantee?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes! We offer a 30-day satisfaction guarantee. If you're not completely happy with 
                    your purchase, contact us for a full refund or exchange.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-none shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-medium text-card-foreground mb-4">
                    Are your products natural and safe?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All our products are made with carefully sourced natural ingredients. We work with 
                    certified suppliers and conduct rigorous testing to ensure safety and quality.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;