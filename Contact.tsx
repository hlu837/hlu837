import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageCircle, User } from "lucide-react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using Formspree for independent deployment
      const response = await fetch('https://formspree.io/f/xeozykng', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly at hilinayared140@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground mb-4 tracking-wide">
            Get in Touch
          </h2>
          <p className="quote-text text-base sm:text-lg max-w-2xl mx-auto px-4">
            I'd love to hear your thoughts...
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card 
              className="border-border/50 hover:border-primary/30 transition-all duration-300"
              style={{ boxShadow: 'var(--shadow-elegant)' }}
            >
              <CardHeader className="bg-poetry-background/30 border-b border-border/30 p-4 sm:p-6">
                <CardTitle className="poetry-title text-lg sm:text-xl lg:text-2xl text-foreground">
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label 
                        htmlFor="name" 
                        className="text-foreground font-medium flex items-center gap-2 text-sm"
                      >
                        <User className="w-4 h-4 text-primary" />
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your name"
                        className="border-border/50 focus:border-primary transition-colors duration-300"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label 
                        htmlFor="email" 
                        className="text-foreground font-medium flex items-center gap-2 text-sm"
                      >
                        <Mail className="w-4 h-4 text-primary" />
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        className="border-border/50 focus:border-primary transition-colors duration-300"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label 
                      htmlFor="message" 
                      className="text-foreground font-medium flex items-center gap-2 text-sm"
                    >
                      <MessageCircle className="w-4 h-4 text-primary" />
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Share your thoughts, ask questions, or simply say hello..."
                      className="border-border/50 focus:border-primary transition-colors duration-300 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 lg:space-y-6">
            <Card 
              className="border-border/50"
              style={{ boxShadow: 'var(--shadow-soft)' }}
            >
              <CardContent className="p-4 sm:p-6">
                <h3 className="poetry-title text-lg sm:text-xl mb-3 sm:mb-4 text-foreground">
                  Let's Connect
                </h3>
                <p className="poetry-text text-muted-foreground text-xs sm:text-sm leading-relaxed"> 
                 I am someone who simply appreciates the beauty of language, I welcome 
                  your thoughts and conversations.
                </p>
              </CardContent>
            </Card>
            
            <Card 
              className="border-border/50 bg-poetry-background/30"
              style={{ boxShadow: 'var(--shadow-soft)' }}
            >
              <CardContent className="p-4 sm:p-6">
                <h3 className="poetry-title text-lg sm:text-xl mb-3 sm:mb-4 text-foreground">
                  Response Time
                </h3>
                <p className="poetry-text text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  I typically respond within 24-48 hours.
                </p>
              </CardContent>
            </Card>

            <div className="bg-poetry-background/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-border/30">
              <blockquote className="quote-text text-center text-sm">
                <a 
                  href="mailto:hilinayared140@gmail.com" 
                  className="text-primary hover:text-primary/80 transition-colors duration-300 underline"
                >
                  hilinayared140@gmail.com
                </a>
              </blockquote>
              
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
