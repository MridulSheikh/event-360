import Trash from "@/components/icons/Trash";

const DeleteButton = ({
  id,
  deleteAction,
}: {
  id: string;
  deleteAction: (id: string) => void;
}) => {
  return (
    <>
      <button
        onClick={() => deleteAction(id)}
        className=" flex gap-x-1 text-red-700 font-semibold items-center"
      >
        <Trash />
        <span>Delete</span>
      </button>
    </>
  );
};

export default DeleteButton;
