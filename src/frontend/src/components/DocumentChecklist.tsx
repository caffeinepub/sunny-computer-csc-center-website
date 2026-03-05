import { CheckCircle2, CreditCard, FileText, Image, Phone } from "lucide-react";
import { Alert, AlertDescription } from "./ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function DocumentChecklist() {
  const documents = [
    {
      icon: FileText,
      name: "Aadhaar Card",
      description: "Original Aadhaar card or e-Aadhaar printout",
      required: true,
    },
    {
      icon: Image,
      name: "Passport Size Photos",
      description: "Recent color photographs (2-4 copies)",
      required: true,
    },
    {
      icon: CreditCard,
      name: "Bank Passbook",
      description: "First page with account details",
      required: true,
    },
    {
      icon: Phone,
      name: "Linked Mobile Phone",
      description: "For OTP verification and updates",
      required: true,
    },
    {
      icon: FileText,
      name: "Address Proof",
      description: "Utility bill, rent agreement, or similar",
      required: false,
    },
    {
      icon: FileText,
      name: "Income Proof",
      description: "Salary slip or income certificate (if applicable)",
      required: false,
    },
  ];

  return (
    <section id="documents" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
            What to bring to the center?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Keep these documents ready for a smooth and quick application
            process
          </p>
        </div>

        <Alert className="mb-8 border-saffron bg-saffron/5">
          <CheckCircle2 className="h-5 w-5 text-saffron" />
          <AlertDescription className="text-base">
            <strong>Pro Tip:</strong> Bring both original documents and
            photocopies. We provide scanning and photocopying services on-site
            if needed.
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <Card key={doc.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-navy-blue/10 rounded-lg">
                      <doc.icon className="h-6 w-6 text-navy-blue" />
                    </div>
                    <CardTitle className="text-lg">{doc.name}</CardTitle>
                  </div>
                  {doc.required && (
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-semibold">
                      Required
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {doc.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-navy-blue to-navy-blue-dark rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Not Sure What You Need?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Don't worry! Our team will guide you through the exact requirements
            for your specific service. Just bring your basic documents and we'll
            help you with the rest.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919435091694"
              className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call Us Now
            </a>
            <button
              type="button"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors border border-white/30"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
