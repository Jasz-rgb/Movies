import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <Loader2 className="w-12 h-12 animate-spin text-red-500" />
    </div>
  );
};

export default Loader;