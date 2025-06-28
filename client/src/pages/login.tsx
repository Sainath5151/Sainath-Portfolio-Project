import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Bug, Mail, Lock } from "lucide-react";

export default function Login() {
  const [, setLocation] = useLocation();
  const { login, isLoginPending } = useAuth();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData);
      toast({
        title: "Welcome back!",
        description: "You have successfully logged in.",
      });
      setLocation("/");
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "Invalid email or password. Please try again.",
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
            Login to Sainath's Portfolio
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
            
            <Button
              type="submit"
              disabled={isLoginPending}
              className="w-full bg-scorpion-yellow text-black py-3 font-bold hover:bg-scorpion-yellow-dark transition-colors duration-300"
            >
              {isLoginPending ? "Logging in..." : "Login"}
            </Button>
            
            <p className="text-center text-gray-300">
              Don't have an account?{" "}
              <Link href="/signup" className="text-scorpion-yellow hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
