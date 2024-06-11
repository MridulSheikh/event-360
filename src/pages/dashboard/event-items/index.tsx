import DashBoardContainer from "@/components/layouts/DashBoardContainer";
import { CalendarPlus } from "lucide-react";
import EventItemManagementCard from "../../../components/ui/card/EventItemManagementCard";
import CreateItemModal from "@/components/ui/modal/CreateItemModal";
import SckeletonCard from "@/components/ui/card/SckeletonCard";
import axios from "../../../config/axios";
import { useQuery } from "@tanstack/react-query";

const EventItemsManagementPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["event-items"],
    queryFn: async () => {
      return await axios.get("/event-item");
    },
  });

  return (
    <DashBoardContainer.SubContainer route="Event Items">
      <div className=" py-5 px-8">
        <div className=" flex justify-between">
          <span>{data?.data?.data?.length || 0} items</span>
          <CreateItemModal>
            <button className="flex justify-center items-center gap-x-2  active:text-gray-500 duration-150">
              <CalendarPlus />
              <span>Add New</span>
            </button>
          </CreateItemModal>
        </div>
        <>
          {isLoading ? (
            <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-4 gap-5">
              {[...Array(8)].map((_, index) => (
                <SckeletonCard key={index} />
              ))}
            </div>
          ) : (
            <>
              {isError ? (
                <div className=" h-full w-full flex justify-start items-center">
                  <h2>0 items found!</h2>
                </div>
              ) : (
                <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {data?.data?.data?.map(
                    (dt: { img: string; title: string; _id: string }) => (
                      <EventItemManagementCard
                        key={dt._id}
                        id={dt._id}
                        cover={dt.img}
                        title={dt.title}
                      />
                    )
                  )}
                </div>
              )}
            </>
          )}
        </>
      </div>
    </DashBoardContainer.SubContainer>
  );
};

export default EventItemsManagementPage;
