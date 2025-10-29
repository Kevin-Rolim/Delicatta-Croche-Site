import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5517991483104";
    const message = encodeURIComponent("Olá! Gostaria de conhecer mais sobre as peças artesanais da Delicatta.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg animate-pulse-subtle hover:animate-none bg-[#25D366] hover:bg-[#20BD5A] text-white"
      size="icon"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default WhatsAppButton;
