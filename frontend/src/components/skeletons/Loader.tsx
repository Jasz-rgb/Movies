// src/components/Loader.tsx

import { Loader } from "lucide-react";

export default function LoaderScreen() {
  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <Loader className="w-10 h-10 animate-spin text-white" />
    </div>
  );
}