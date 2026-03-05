import { DocumentChecklist } from "./components/DocumentChecklist";
import { EnquiryForm } from "./components/EnquiryForm";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ServicesGrid } from "./components/ServicesGrid";
import { TrustSection } from "./components/TrustSection";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <TrustSection />
        <DocumentChecklist />
        <EnquiryForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </div>
  );
}

export default App;
