import { Outlet } from "react-router-dom";
import DashBoardContainer from "./DashBoardContainer";
import { Dispatch, SetStateAction, createContext, useState } from "react";

export type TNavbarCotext = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const NavbarContext = createContext<TNavbarCotext | null>(null);

const DashBoardLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
      <DashBoardContainer>
        <Outlet />
      </DashBoardContainer>
    </NavbarContext.Provider>
  );
};

export default DashBoardLayout;
