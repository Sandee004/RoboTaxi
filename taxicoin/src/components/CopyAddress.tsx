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
    <div className="w-[80%] bg-gray-100 rounded-lg flex items-center px-4 py-2">
      <input
        type="text"
        value={address}
        readOnly
        className="flex-1 bg-transparent outline-none text-sm text-gray-800"
      />
      <button onClick={handleCopy} className="ml-2 text-gray-500 hover:text-black">
        {copied ? <Check className="w-4 h-4" /> : <ClipboardCopy className="w-4 h-4" />}
      </button>
    </div>
  );
}
