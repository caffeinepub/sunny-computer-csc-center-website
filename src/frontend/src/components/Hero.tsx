import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/918638103439", "_blank");
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-navy-blue via-navy-blue-dark to-navy-blue"
    >
      <div className="absolute inset-0 bg-hero-pattern opacity-10" />
      <div className="container relative py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="inline-block px-4 py-2 bg-saffron/20 rounded-full border border-saffron/30">
              <span className="text-saffron font-semibold text-sm">
                Trusted Digital Services Partner
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Trusted Digital Partner in Karimganj
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Professional assistance for PAN, Passport, Government
              Certificates, and Education forms at Sunny Computer CSC Center.
              Serving you from Sarisha, Silchar Road.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={scrollToServices}
                className="bg-saffron hover:bg-saffron-dark text-white font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                View Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={openWhatsApp}
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Now
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-saffron">50+</div>
                <div className="text-sm text-white/80">Services</div>
              </div>
              <div className="h-12 w-px bg-white/30" />
              <div className="text-center">
                <div className="text-3xl font-bold text-saffron">10K+</div>
                <div className="text-sm text-white/80">Happy Clients</div>
              </div>
              <div className="h-12 w-px bg-white/30" />
              <div className="text-center">
                <div className="text-3xl font-bold text-saffron">99%</div>
                <div className="text-sm text-white/80">Success Rate</div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="/assets/generated/hero-background.dim_1200x600.jpg"
              alt="Digital Services"
              className="rounded-2xl shadow-2xl border-4 border-white/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
