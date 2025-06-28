import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, Bug } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const { user, isAuthenticated, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-scorpion-light-gray">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Bug className="text-scorpion-yellow text-2xl" />
            <h1 className="text-2xl font-bold text-scorpion-yellow">
              Sainath's Portfolio
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-300 ${
                  isActive(link.href)
                    ? "text-scorpion-yellow"
                    : "text-white hover:text-scorpion-yellow"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Auth Section */}
            {!isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className="text-white hover:text-scorpion-yellow transition-colors duration-300"
                >
                  Login
                </Link>
                <Link href="/signup">
                  <Button className="bg-scorpion-yellow text-black font-semibold hover:bg-scorpion-yellow-dark">
                    Sign Up
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <span className="text-scorpion-yellow font-semibold">
                  Welcome, {user?.name}
                </span>
                <Button
                  onClick={handleLogout}
                  variant="ghost"
                  className="text-white hover:text-red-400"
                >
                  Logout
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-scorpion-yellow"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-scorpion-light-gray">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors duration-300 ${
                    isActive(link.href)
                      ? "text-scorpion-yellow"
                      : "text-white hover:text-scorpion-yellow"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {!isAuthenticated ? (
                <div className="flex flex-col space-y-2 pt-2">
                  <Link
                    href="/login"
                    className="text-white hover:text-scorpion-yellow transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="bg-scorpion-yellow text-black font-semibold hover:bg-scorpion-yellow-dark w-full">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col space-y-2 pt-2">
                  <span className="text-scorpion-yellow font-semibold">
                    Welcome, {user?.name}
                  </span>
                  <Button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    variant="ghost"
                    className="text-white hover:text-red-400 w-full justify-start"
                  >
                    Logout
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
