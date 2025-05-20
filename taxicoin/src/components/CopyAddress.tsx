import { useState } from "react";
import { ClipboardCopy, Check } from "lucide-react"; // or any icon library you like

export default function CopyAddress() {
  const address = "0x2597342ff387B63846eb456419590781C4bfCdAF";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2s
  };

  return (
    <div className="bg-[#39437E] w-[82%] lg:w-[35%] lg:text-center rounded-sm flex items-center px-3 py-1 md:py-3">
      
      <input
        type="text"
        value={address}
        readOnly
        className="flex-1 bg-transparent outline-none text-sm text-gray-200"
      />
      <button
        onClick={handleCopy}
        className="ml-2 text-[#0cc0df] hover:cursor-pointer"
      >
        {copied ? (
          <Check className="w-6 h-6" />
        ) : (
          <ClipboardCopy className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
