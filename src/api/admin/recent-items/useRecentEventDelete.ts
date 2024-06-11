import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteRecentEvent } from "./recentItemApi";

const useRecentEventDelete = () => {
  const queryClient = useQueryClient();

  // delete recent event using useMutation
  const mutation = useMutation({
    mutationFn: async (id: string) => {
      return await deleteRecentEvent(id as string);
    },
    onSuccess: () => {
      console.log("deleted");
      queryClient.invalidateQueries({ queryKey: ["recent-events"] });
    },
    onError: () => {},
    onSettled: () => {},
  });
  return mutation;
};

export default useRecentEventDelete;
