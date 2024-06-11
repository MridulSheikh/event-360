import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { deleteServiceApi } from "./servicesApi";

const useService = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: async (id: string) => {
      return await deleteServiceApi(id as string);
    },
    onSuccess: () => {
      console.log("deleted");
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
    onError: () => {},
    onSettled: () => {},
  });
  const handleDeleteService = async (id: string) => {
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
  return {
    handleDeleteService,
  };
};

export default useService;
