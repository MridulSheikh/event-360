import { ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

type TOptionDropDown = {
  children: ReactNode;
  items: ReactNode[];
};

const OptionDropDown = ({ children, items }: TOptionDropDown) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map((it) => (
          <DropdownMenuItem>{it}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default OptionDropDown;
