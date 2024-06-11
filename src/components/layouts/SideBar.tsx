import { CalendarCheck, Menu, PartyPopper } from "lucide-react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Wrench from "../icons/Wrench";
import { NavbarContext, TNavbarCotext } from "./DashBoardLayout";
import { cn } from "@/lib/utils";

const linkData = [
  {
    text: "Event Items",
    icon: <PartyPopper />,
    link: "/dashboard/event-items",
  },
  {
    text: "Recent Event",
    icon: <CalendarCheck />,
    link: "/dashboard/recent-event",
  },
  {
    text: "Service Management",
    icon: <Wrench />,
    link: "/dashboard/service-management",
  },
];

const SideBar = () => {
  const { isOpen, setIsOpen } = useContext(NavbarContext) as TNavbarCotext;
  return (
    <aside
      className={cn(
        " fixed top-0 left-0 w-full md:static z-50 md:w-[300px] bg-gray-900 h-screen shadow-md text-white overflow-hidden ease-in-out duration-300",
        {
          "w-0": !isOpen,
        }
      )}
    >
      <div className="p-5 border-b border-b-gray-800 flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold">
          Event <span className="text-primary text-2xl">360</span>{" "}
          <sup className="text-primary text-sm">Admin</sup>
        </Link>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden"
        >
          <Menu className="w-10" />
        </button>
      </div>
      <div className=" text-white">
        {linkData.map((dt) => (
          <NavLink
            to={dt.link}
            className={`flex gap-x-2 items-end p-5 border-b border-b-gray-800 ease-in-out duration-200 ${(
              isActive: boolean
            ) => (isActive ? "bg-gray-100" : "bg-transparent")}`}
          >
            {dt.icon}
            <span>{dt.text}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
