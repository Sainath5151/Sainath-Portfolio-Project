import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="pt-16">
      <section className="py-20 bg-scorpion-darker">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to collaborate? Let's create something amazing together
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-scorpion-yellow mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-scorpion-yellow text-black p-3 rounded-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-gray-300">contact@scorpionsworld.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-scorpion-yellow text-black p-3 rounded-lg">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Phone</h4>
                    <p className="text-gray-300">+91 9515151939</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-scorpion-yellow text-black p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Location</h4>
                    <p className="text-gray-300">Available for Remote Work</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 pt-6">
                {[
                  { icon: Linkedin, href: "#" },
                  { icon: Github, href: "#" },
                  { icon: Twitter, href: "#" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-scorpion-gray hover:bg-scorpion-yellow hover:text-black text-white p-3 rounded-lg transition-all duration-300"
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
            
            <Card className="glass-effect border-scorpion-light-gray">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-scorpion-yellow">
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-white font-semibold">First Name</Label>
                      <Input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="bg-scorpion-gray border-scorpion-light-gray text-white focus:border-scorpion-yellow mt-2"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <Label className="text-white font-semibold">Last Name</Label>
                      <Input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="bg-scorpion-gray border-scorpion-light-gray text-white focus:border-scorpion-yellow mt-2"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-white font-semibold">Email</Label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-scorpion-gray border-scorpion-light-gray text-white focus:border-scorpion-yellow mt-2"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label className="text-white font-semibold">Subject</Label>
                    <Input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      className="bg-scorpion-gray border-scorpion-light-gray text-white focus:border-scorpion-yellow mt-2"
                      placeholder="Project Collaboration"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label className="text-white font-semibold">Message</Label>
                    <Textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="bg-scorpion-gray border-scorpion-light-gray text-white focus:border-scorpion-yellow resize-none mt-2"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-scorpion-yellow text-black py-3 font-bold hover:bg-scorpion-yellow-dark transition-colors duration-300 transform hover:scale-105"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
