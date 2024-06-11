import React, { useContext } from "react";
import SideBar from "./SideBar";
import { Menu } from "lucide-react";
import { NavbarContext, TNavbarCotext } from "./DashBoardLayout";

type TDashBoardContainer = {
  children: React.ReactNode;
};

type TDashBoardSubContainer = {
  children: React.ReactNode;
  route: string;
};

const SubContainer = ({ children, route }: TDashBoardSubContainer) => {
  const { setIsOpen } = useContext(NavbarContext) as TNavbarCotext;
  return (
    <>
      <div className=" flex items-center gap-x-3 font-extrabold bg-primary-foreground p-5 border-b sticky top-0 z-40">
        <button className="md:hidden">
          <Menu className="w-10" onClick={() => setIsOpen((prev) => !prev)} />
        </button>
        <h2 className="text-secondary text-lg">{route}</h2>
      </div>
      {children}
    </>
  );
};

const DashBoardContainer = ({ children }: TDashBoardContainer) => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full h-screen overflow-y-scroll">{children}</div>
    </div>
  );
};

DashBoardContainer.SubContainer = SubContainer;

export default DashBoardContainer;
