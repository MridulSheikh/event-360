import Pencil from "@/components/icons/Pencil";
import { Dispatch, SetStateAction } from "react";

const EditeButton = ({
  setAction,
}: {
  setAction: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <button
      onClick={() => setAction((prev) => !prev)}
      className=" flex gap-x-1 text-green-600 font-semibold items-center"
    >
      <Pencil />
      <span>Edit</span>
    </button>
  );
};

export default EditeButton;
