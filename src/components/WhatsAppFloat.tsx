import { whatsappUrl } from "@/data/site";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppFloat() {
  return (
    <a className="wa-float" href={whatsappUrl("Hi DevCrafter, I want a website")} target="_blank" rel="noopener"
      aria-label="Chat with DevCrafter on WhatsApp">
      <WhatsAppIcon size={28} />
    </a>
  );
}
