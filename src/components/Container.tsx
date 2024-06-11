import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const Container = ({ id, children, className }: TContainerProps) => {
  return (
    <div
      id={id || ""}
      className={cn("w-full max-w-[1300px] px-[20px] mx-auto", className)}
    >
      {children}
    </div>
  );
};

export default Container;
