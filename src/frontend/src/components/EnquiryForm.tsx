import { Clock, Loader2, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitContactForm, useSubmitInquiry } from "../hooks/useQueries";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

export function EnquiryForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [serviceNeeded, setServiceNeeded] = useState("");

  const [callbackName, setCallbackName] = useState("");
  const [callbackEmail, setCallbackEmail] = useState("");
  const [callbackPhone, setCallbackPhone] = useState("");
  const [callbackMessage, setCallbackMessage] = useState("");

  const submitInquiry = useSubmitInquiry();
  const submitContactForm = useSubmitContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phoneNumber || !serviceNeeded) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      await submitInquiry.mutateAsync({ name, serviceNeeded, phoneNumber });
      toast.success(
        "Enquiry submitted successfully! We will contact you soon.",
      );
      setName("");
      setPhoneNumber("");
      setServiceNeeded("");
    } catch (_error) {
      toast.error("Failed to submit enquiry. Please try again.");
    }
  };

  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!callbackName || !callbackEmail || !callbackPhone) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      await submitContactForm.mutateAsync({
        name: callbackName,
        email: callbackEmail,
        message: callbackMessage || "Request for call back",
        phoneNumber: callbackPhone,
      });
      toast.success("Call back request submitted! We will contact you soon.");
      setCallbackName("");
      setCallbackEmail("");
      setCallbackPhone("");
      setCallbackMessage("");
    } catch (_error) {
      toast.error("Failed to submit request. Please try again.");
    }
  };

  const services = [
    "PAN Card",
    "Passport",
    "Voter ID",
    "Aadhaar Services",
    "Ayushman Bharat Card",
    "E-Shram Card",
    "Caste Certificate",
    "Income Certificate",
    "Domicile Certificate",
    "Udyam Registration",
    "College Admission",
    "Exam Form",
    "Other",
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
            Get Started Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't struggle with complex forms. Let the experts handle it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="shadow-xl border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-navy-blue">
                  Enquire Now
                </CardTitle>
                <CardDescription className="text-base">
                  Fill out the form and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed *</Label>
                    <Select
                      value={serviceNeeded}
                      onValueChange={setServiceNeeded}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-navy-blue hover:bg-navy-blue-dark text-white"
                    disabled={submitInquiry.isPending}
                  >
                    {submitInquiry.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Submit Enquiry
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-navy-blue">
                  Request a Call Back
                </CardTitle>
                <CardDescription className="text-base">
                  We'll call you at your preferred time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCallbackSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="callback-name">Full Name *</Label>
                    <Input
                      id="callback-name"
                      placeholder="Enter your full name"
                      value={callbackName}
                      onChange={(e) => setCallbackName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="callback-email">Email *</Label>
                    <Input
                      id="callback-email"
                      type="email"
                      placeholder="Enter your email"
                      value={callbackEmail}
                      onChange={(e) => setCallbackEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="callback-phone">Phone Number *</Label>
                    <Input
                      id="callback-phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={callbackPhone}
                      onChange={(e) => setCallbackPhone(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="callback-message">Message (Optional)</Label>
                    <Textarea
                      id="callback-message"
                      placeholder="Any specific requirements or preferred time?"
                      value={callbackMessage}
                      onChange={(e) => setCallbackMessage(e.target.value)}
                      rows={3}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-saffron hover:bg-saffron-dark text-white"
                    disabled={submitContactForm.isPending}
                  >
                    {submitContactForm.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Phone className="mr-2 h-4 w-4" />
                        Request Call Back
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-navy-blue">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-navy-blue mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-sm text-muted-foreground">
                      Sarisha, Silchar Road
                      <br />
                      Karimganj, Assam, 788710
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-navy-blue mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a
                      href="tel:+919435091694"
                      className="text-sm text-navy-blue hover:underline"
                    >
                      +91 94350 91694
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-navy-blue mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Operating Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 7:00 PM
                      <br />
                      Sunday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-gradient-to-br from-navy-blue to-navy-blue-dark text-white">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Visit Our Center</h3>
                <div className="aspect-video rounded-lg overflow-hidden border-2 border-white/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.8!2d92.35!3d24.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUyJzEzLjIiTiA5MsKwMjEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sunny Computer CSC Center Location"
                  />
                </div>
                <p className="text-sm text-white/80 mt-3">
                  Located on Silchar Road in Sarisha, easily accessible from all
                  parts of Karimganj
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
