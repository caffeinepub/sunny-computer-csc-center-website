import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export function WhatsAppButton() {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/918638103439?text=Hi, I need assistance with digital services",
      "_blank",
    );
  };

  return (
    <Button
      onClick={openWhatsApp}
      size="lg"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] text-white z-50 p-0 animate-bounce hover:animate-none"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </Button>
  );
}
