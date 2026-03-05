import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "./ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Services", id: "services" },
    { label: "Document Checklist", id: "documents" },
    { label: "About Us", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/assets/generated/sunny-computer-logo.dim_200x200.png"
            alt="Sunny Computer CSC Center"
            className="h-10 w-10"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-navy-blue">
              Sunny Computer
            </span>
            <span className="text-xs text-muted-foreground">CSC Center</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-foreground/80 hover:text-navy-blue transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Quick Actions */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="tel:+919435091694"
            className="p-2 bg-navy-blue/10 hover:bg-navy-blue/20 rounded-lg transition-colors"
            aria-label="Call us"
          >
            <Phone className="h-5 w-5 text-navy-blue" />
          </a>
          <a
            href="https://wa.me/918638103439"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 rounded-lg transition-colors"
            aria-label="WhatsApp us"
          >
            <SiWhatsapp className="h-5 w-5 text-[#25D366]" />
          </a>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Desktop Menu Button (hidden on mobile) */}
        <Button variant="ghost" size="icon" className="hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <nav className="container flex flex-col py-4 gap-2">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left px-4 py-2 text-sm font-medium text-foreground/80 hover:text-navy-blue hover:bg-accent rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
