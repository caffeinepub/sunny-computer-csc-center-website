import {
  Briefcase,
  FileText,
  GraduationCap,
  Heart,
  Printer,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function ServicesGrid() {
  const services = [
    {
      title: "Identity Services",
      icon: "/assets/generated/pan-card-icon.dim_64x64.png",
      IconComponent: FileText,
      description:
        "Essential identity documents processed with expert guidance",
      items: [
        "PAN Card (New/Correction)",
        "Voter ID (New/Correction)",
        "Passport Application Assistance",
        "Aadhaar Services",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Government Welfare",
      icon: "/assets/generated/welfare-icon.dim_64x64.png",
      IconComponent: Heart,
      description: "Access to government welfare schemes and benefits",
      items: [
        "Ayushman Bharat Card",
        "E-Shram Card Registration",
        "Ration Card Services",
        "Pension Schemes",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      title: "Documentation",
      icon: "/assets/generated/legal-business-icon.dim_64x64.png",
      IconComponent: Briefcase,
      description: "Legal document processing with official verification",
      items: [
        "Caste Certificate",
        "Income Certificate",
        "Domicile Certificate",
        "Udyam Registration (MSME)",
        "E-filing TDS",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Education",
      icon: "/assets/generated/education-icon.dim_64x64.png",
      IconComponent: GraduationCap,
      description: "Educational support and form assistance",
      items: [
        "College & University Admissions",
        "Exam Form Filling",
        "Scholarship Applications",
        "Govt Scheme Applications",
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Utility Services",
      icon: "/assets/generated/utility-icon.dim_64x64.png",
      IconComponent: Printer,
      description: "Basic office services for document preparation",
      items: [
        "Printing Services",
        "Scanning Services",
        "Lamination",
        "Photocopying",
        "Document Binding",
      ],
      color: "from-teal-500 to-teal-600",
    },
  ];

  const openWhatsAppForService = (serviceTitle: string, itemName: string) => {
    const message = encodeURIComponent(
      `Hi, I need assistance with ${itemName} from ${serviceTitle}`,
    );
    window.open(`https://wa.me/918638103439?text=${message}`, "_blank");
  };

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital services to meet all your government
            documentation and registration needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-navy-blue/50 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`} />
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-gradient-to-br from-navy-blue/10 to-navy-blue/5 rounded-lg group-hover:scale-110 transition-transform">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="h-8 w-8"
                    />
                  </div>
                  <CardTitle className="text-xl text-navy-blue">
                    {service.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-between gap-2 text-sm group/item"
                    >
                      <div className="flex items-start gap-2 flex-1">
                        <span className="text-saffron mt-1">✓</span>
                        <span className="text-foreground/80">{item}</span>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() =>
                          openWhatsAppForService(service.title, item)
                        }
                        className="h-7 w-7 p-0 opacity-0 group-hover/item:opacity-100 transition-opacity bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] hover:text-[#25D366] flex-shrink-0"
                        aria-label={`Contact via WhatsApp for ${item}`}
                      >
                        <SiWhatsapp className="h-4 w-4" />
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
