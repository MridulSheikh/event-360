import { ReactNode } from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./context-menu";

type TContextItemCard = {
  children: ReactNode;
  items: ReactNode[];
};

const ContextItemCard = ({ children, items }: TContextItemCard) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent>
        {items.map((it) => (
          <ContextMenuItem>{it}</ContextMenuItem>
        ))}
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default ContextItemCard;
