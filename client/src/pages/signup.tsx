import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Bug, Mail, Lock, User } from "lucide-react";

export default function Signup() {
  const [, setLocation] = useLocation();
  const { signup, isSignupPending } = useAuth();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(formData);
      toast({
        title: "Welcome to Sainath's Portfolio!",
        description: "Your account has been created successfully.",
      });
      setLocation("/");
    } catch (error) {
      toast({
        title: "Signup Failed",
        description: "Unable to create account. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="pt-16 min-h-screen bg-scorpion-dark flex items-center justify-center px-6">
      <Card className="glass-effect border-scorpion-light-gray max-w-md w-full">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Bug className="h-12 w-12 text-scorpion-yellow" />
          </div>
          <CardTitle className="text-2xl font-bold text-scorpion-yellow">
            Join Sainath 
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label className="text-white font-semibold">Full Name</Label>
              <div className="relative mt-2">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="bg-scorpion-gray border-scorpion-light-gray text-white focus:border-scorpion-yellow pl-10"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>
            
            <div>
              <Label className="text-white font-semibold">Email</Label>
              <div className="relative mt-2">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-scorpion-gray border-scorpion-light-gray text-white focus:border-scorpion-yellow pl-10"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            
            <div>
              <Label className="text-white font-semibold">Password</Label>
              <div className="relative mt-2">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="bg-scorpion-gray border-scorpion-light-gray text-white focus:border-scorpion-yellow pl-10"
                  placeholder="Create a password"
                  required
                  minLength={6}
                />
              </div>
            </div>
            
            <Button
              type="submit"
              disabled={isSignupPending}
              className="w-full bg-scorpion-yellow text-black py-3 font-bold hover:bg-scorpion-yellow-dark transition-colors duration-300"
            >
              {isSignupPending ? "Creating Account..." : "Sign Up"}
            </Button>
            
            <p className="text-center text-gray-300">
              Already have an account?{" "}
              <Link href="/login" className="text-scorpion-yellow hover:underline">
                Login
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
