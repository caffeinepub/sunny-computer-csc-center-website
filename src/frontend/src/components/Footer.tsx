import { Lock, Shield } from "lucide-react";
import { SiFacebook, SiInstagram, SiWhatsapp, SiX } from "react-icons/si";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-navy-blue-dark via-navy-blue to-navy-blue text-white">
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/sunny-computer-logo.dim_200x200.png"
                alt="Sunny Computer"
                className="h-12 w-12"
              />
              <div>
                <h3 className="text-xl font-bold">Sunny Computer</h3>
                <p className="text-sm text-white/80">CSC Center</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Your trusted partner for all government digital services in
              Karimganj. Fast, secure, and reliable assistance.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="h-4 w-4 text-saffron" />
              <span className="text-white/90">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-2">
              <Lock className="h-4 w-4 text-saffron" />
              <span className="text-white/90">Data Protected</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("hero")}
                  className="text-white/80 hover:text-saffron transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("services")}
                  className="text-white/80 hover:text-saffron transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("documents")}
                  className="text-white/80 hover:text-saffron transition-colors"
                >
                  Document Checklist
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("about")}
                  className="text-white/80 hover:text-saffron transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="text-white/80 hover:text-saffron transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Popular Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>PAN Card Services</li>
              <li>Passport Assistance</li>
              <li>Voter ID Services</li>
              <li>Ayushman Bharat Card</li>
              <li>Income Certificate</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <SiX className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/918638103439"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-white/80">
              <strong>Phone:</strong>
              <br />
              <a
                href="tel:+919435091694"
                className="hover:text-saffron transition-colors"
              >
                +91 94350 91694
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center text-sm text-white/80">
          <p>
            © 2025. Built with <span className="text-saffron">♥</span> using{" "}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-saffron hover:underline font-semibold"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
