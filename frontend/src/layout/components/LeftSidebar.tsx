import { buttonVariants } from "@/components/ui/button";
import { HomeIcon, Film, Star, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useGrid } from "@/context/GridProvider";
import { Slider } from "@/components/ui/slider";

const LeftSidebar = () => {
  const { columns, setColumns } = useGrid();
  return (
    <div className="h-full p-2">
      {/* Navigation */}
      <div className="rounded-lg bg-zinc-900 h-full p-4">
        <div className="space-y-2">
          <Link
            to="/"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-full justify-start text-white hover:bg-zinc-800"
            )}
          >
            <HomeIcon className="mr-2 size-5 shrink-0" />
            <span>Home</span>
          </Link>

          <Link
            to="/popular"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-full justify-start text-white hover:bg-zinc-800"
            )}
          >
            <Film className="mr-2 size-5 shrink-0" />
            <span>Popular</span>
          </Link>

          <Link
            to="/top-rated"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-full justify-start text-white hover:bg-zinc-800"
            )}
          >
            <Star className="mr-2 size-5 shrink-0" />
            <span>Top Rated</span>
          </Link>

          <Link
            to="/upcoming"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-full justify-start text-white hover:bg-zinc-800"
            )}
          >
            <Clock3 className="mr-2 size-5 shrink-0" />
            <span>Upcoming</span>
          </Link>
        </div>
        <div className="rounded-lg bg-zinc-900 p-4 mt-2">
          <h3 className="text-sm font-semibold mb-3">
            Cards Per Row
          </h3>

          <Slider
            value={[columns]}
            min={2}
            max={8}
            step={1}
            onValueChange={(value) =>
              setColumns(value[0])
            }
          />

          <p className="text-sm text-zinc-400 mt-2">
            {columns} cards
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default LeftSidebar;