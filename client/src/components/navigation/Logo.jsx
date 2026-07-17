
import { MessageCircle } from "lucide-react";

const Logo = () => {
  return (
    <a href="/" className="flex items-center gap-2 text-typography-primary">
      <MessageCircle className="w-7 h-7 text-brand-primary" strokeWidth={2.5} />
      <span className="text-xl font-semibold tracking-tight">Kizuna</span>
    </a>
  );
};

export default Logo;
