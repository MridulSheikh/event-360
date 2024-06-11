import Plus from "@/components/icons/Plus";
import AddNewServiceModal from "@/components/ui/modal/AddNewServiceModal";
import { useState } from "react";

const AddNewService = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="flex justify-center items-center gap-x-2  active:text-gray-500 duration-150"
      >
        <Plus />
        <span>Add New</span>
      </button>
      <AddNewServiceModal
        isOpen={isOpen}
        handleModalController={handleOpenModal}
      />
    </>
  );
};

export default AddNewService;
