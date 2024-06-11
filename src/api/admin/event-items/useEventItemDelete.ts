import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEventItem } from "./eventItemApi";

const useEventItemDelete = () => {
  const queryClient = useQueryClient();

  // delete event item using useMutation
  const mutation = useMutation({
    mutationFn: async (id: string) => {
      return await deleteEventItem(id as string);
    },
    onSuccess: () => {
      console.log("deleted");
      queryClient.invalidateQueries({ queryKey: ["event-items"] });
    },
    onError: () => {},
    onSettled: () => {},
  });
  return mutation;
};

export default useEventItemDelete;
