import useRecentEventDelete from "@/api/admin/recent-items/useRecentEventDelete";
import { toast } from "react-toastify";

const useRecentEventOperation = () => {
  const { mutateAsync } = useRecentEventDelete();

  // handle Delete Recent event with tostify loading ui
  const handleDeleteRecentEvent = async (id: string) => {
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
  return { handleDeleteRecentEvent };
};

export default useRecentEventOperation;
