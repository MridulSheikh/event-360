import useEventItemDelete from "@/api/admin/event-items/useEventItemDelete";
import { toast } from "react-toastify";

const useEventItemOperation = () => {
  const { mutateAsync } = useEventItemDelete();

  // handle Delete event item with tostify loading ui
  const handleDeleteItem = async (id: string) => {
    try {
      const deletionPromise = toast.promise(mutateAsync(id), {
        pending: "Deleting...",
        success: "Successfully deleted",
        error: "Something went wrong!",
      });

      await deletionPromise;
    } catch (error) {
      console.error("Error occurred during deletion:", error);
    }
  };
  return { handleDeleteItem };
};

export default useEventItemOperation;
