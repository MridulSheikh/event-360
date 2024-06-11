import { Menu } from "lucide-react";

const DashboradNavigation = () => {
  return (
    <>
      <nav className="w-full py-2 border px-[20px] mx-auto flex justify-start items-center gap-x-4 bg-primary-foreground">
        <button>
          <Menu />
        </button>
        <span className="text-[32px] font-extrabold">
          Event <span className="text-primary">360</span>
        </span>
      </nav>
    </>
  );
};

export default DashboradNavigation;
