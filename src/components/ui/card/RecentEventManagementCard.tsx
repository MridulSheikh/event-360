import MoreVerticle from "@/components/icons/MoreVerticle";
import OptionDropDown from "@/components/ui/OptionDropDown";
import UpdateRecentEventModal from "@/components/ui/modal/UpdateRecentEventModal";
import useRecentEventOperation from "@/hooks/useRecentEventOperation";
import { cn } from "@/lib/utils";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import EditeButton from "../button/EditeButton";
import DeleteButton from "../button/DeleteButton";

const OptionButton = ({ id }: { id: string }) => {
  const { handleDeleteRecentEvent } = useRecentEventOperation();
  const { setIsOpen } = useContext(ModalStateContext) as TModalStateContext;
  return (
    <OptionDropDown
      items={[
        <DeleteButton id={id} deleteAction={handleDeleteRecentEvent} />,
        <EditeButton setAction={setIsOpen} />,
      ]}
    >
      <MoreVerticle />
    </OptionDropDown>
  );
};

type TModalStateContext = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const ModalStateContext = createContext<TModalStateContext | null>(null);

const RecentEventManagmentCard = ({ img, id }: { img: string; id: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ModalStateContext.Provider value={{ setIsOpen }}>
      <div className={cn("p-4 rounded-lg bg-primary-foreground")}>
        <div
          className={cn(
            "rounded-lg w-full h-[187px] relative overflow-hidden mb-[12px]"
          )}
        >
          <img src={img} className="object-cover object-center h-full w-full" />
        </div>
        <div className=" flex gap-x-2 items-center">
          <OptionButton id={id} />
        </div>
        <UpdateRecentEventModal
          id={id}
          img={img}
          isOpen={isOpen}
          modalOpenController={() => setIsOpen((prev) => !prev)}
        />
      </div>
    </ModalStateContext.Provider>
  );
};

export default RecentEventManagmentCard;
