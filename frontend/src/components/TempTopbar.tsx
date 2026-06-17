import { Film } from "lucide-react";
import SearchBar from "../components/skeletons/SearchBar";

const Topbar = () => {
  return (
    <div className="m-2 rounded-lg bg-zinc-900/75 backdrop-blur-md p-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Film className="size-6 text-red-500" />
        <h1 className="text-xl font-bold text-white">
          MovieHub
        </h1>
      </div>

      <SearchBar />
    </div>
  );
};

export default Topbar;