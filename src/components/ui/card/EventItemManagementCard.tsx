import MoreVerticle from "@/components/icons/MoreVerticle";
import ContextItemCard from "@/components/ui/ContextItemCard";
import OptionDropDown from "@/components/ui/OptionDropDown";
import UpdateItemModal from "@/components/ui/modal/UpdateItemModal";
import useEventItemOperation from "@/hooks/useEventItemOperation";
import { cn } from "@/lib/utils";
import { createContext, useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import DeleteButton from "../button/DeleteButton";
import EditeButton from "../button/EditeButton";

type TEventItemManagementCard = {
  id: string;
  cover: string;
  title: string;
};

const OptionButton = ({ id }: { id: string }) => {
  const { handleModalOpenController } = useContext(
    EventItemCardContext
  ) as TEventItemCardContext;
  const { handleDeleteItem } = useEventItemOperation();
  return (
    <OptionDropDown
      items={[
        <DeleteButton id={id} deleteAction={handleDeleteItem} />,
        <EditeButton setAction={handleModalOpenController} />,
      ]}
    >
      <MoreVerticle />
    </OptionDropDown>
  );
};

export type TEventItemCardContext = {
  isOpen: boolean;
  handleModalOpenController: () => void;
};

export const EventItemCardContext = createContext<TEventItemCardContext | null>(
  null
);

const EventItemManagementCard = ({
  id,
  cover,
  title,
}: TEventItemManagementCard) => {
  const [isOpen, setIsOpen] = useState(false);
  const { handleDeleteItem } = useEventItemOperation();

  const handleModalOpenController = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <EventItemCardContext.Provider
      value={{ isOpen, handleModalOpenController }}
    >
      <ContextItemCard
        items={[
          <DeleteButton id={id} deleteAction={handleDeleteItem} />,
          <EditeButton setAction={handleModalOpenController} />,
        ]}
      >
        <div className={cn("p-4 rounded-lg bg-primary-foreground")}>
          <div
            className={cn(
              "rounded-lg w-full h-[187px] relative overflow-hidden mb-[12px]"
            )}
          >
            <img
              src={cover}
              className="object-cover object-center h-full w-full"
            />
          </div>
          <div className=" flex gap-x-2 items-center">
            <OptionButton id={id} />
            <span className="text-sm">{title}</span>
          </div>
        </div>
        <UpdateItemModal
          title={title}
          img={cover}
          id={id}
          isOpen={isOpen}
          modalOpenController={handleModalOpenController}
        />
        <ToastContainer />
      </ContextItemCard>
    </EventItemCardContext.Provider>
  );
};

export default EventItemManagementCard;
