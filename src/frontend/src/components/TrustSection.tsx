import { Award, Clock, Shield, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function TrustSection() {
  const features = [
    {
      icon: Shield,
      title: "Complete Privacy",
      description:
        "Your data is secure with us. We follow strict confidentiality protocols and never share your information.",
      color: "text-blue-600",
    },
    {
      icon: Users,
      title: "Expert Assistance",
      description:
        "Our trained professionals guide you through every step, ensuring accurate and complete applications.",
      color: "text-green-600",
    },
    {
      icon: Award,
      title: "High Success Rate",
      description:
        "99% success rate in application approvals. We double-check everything before submission.",
      color: "text-purple-600",
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description:
        "Quick turnaround times with regular updates on your application status via SMS and WhatsApp.",
      color: "text-orange-600",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-navy-blue via-navy-blue-dark to-navy-blue text-white"
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Sunny Computer?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            We are committed to providing the best digital services experience
            with professionalism and care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all"
            >
              <CardContent className="pt-6 text-center">
                <div className="inline-flex p-4 bg-white/10 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-saffron" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Serving Sarisha and Karimganj
              </h3>
              <p className="text-white/90 mb-4 leading-relaxed">
                At Sunny Computer CSC Center, located in Sarisha, Silchar Road,
                we understand that government paperwork can be overwhelming.
                That's why we're here to simplify the process and ensure your
                applications are completed accurately and efficiently.
              </p>
              <p className="text-white/90 leading-relaxed">
                With years of experience serving the Karimganj community and
                thousands of satisfied customers, we've built a reputation for
                reliability, fast service, and excellence in digital services.
              </p>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/team-photo.dim_400x300.jpg"
                alt="Our Team"
                className="rounded-xl shadow-2xl border-4 border-white/20"
              />
              <div className="absolute -bottom-4 -right-4 bg-saffron text-white px-6 py-3 rounded-lg shadow-xl font-bold">
                Trusted by 10,000+ Customers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
