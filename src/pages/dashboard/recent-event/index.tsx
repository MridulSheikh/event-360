import DashBoardContainer from "@/components/layouts/DashBoardContainer";
import AddRecentEventModal from "@/components/ui/modal/AddRecentEventModal";
import { useQuery } from "@tanstack/react-query";
import { CalendarPlus } from "lucide-react";
import { useState } from "react";
import axios from "../../../config/axios";
import SckeletonCard from "@/components/ui/card/SckeletonCard";
import RecentEventManagmentCard from "../../../components/ui/card/RecentEventManagementCard";
import { ToastContainer } from "react-toastify";

const RecentEventManagementPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalOpenController = () => {
    setIsOpen((prev) => !prev);
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["recent-events"],
    queryFn: async () => {
      return await axios.get("/recent-event");
    },
  });

  return (
    <DashBoardContainer.SubContainer route="Recent Event">
      <div className=" py-5 px-8">
        <div className=" flex justify-between">
          <span>{data?.data?.data.length || 0} items</span>
          <button
            onClick={modalOpenController}
            className="flex justify-center items-center gap-x-2  active:text-gray-500 duration-150"
          >
            <CalendarPlus />
            <span>Add New</span>
          </button>
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
                  {data?.data?.data?.map((dt: { img: string; _id: string }) => (
                    <RecentEventManagmentCard img={dt.img} id={dt._id} />
                  ))}
                </div>
              )}
            </>
          )}
        </>
      </div>
      <AddRecentEventModal
        isOpen={isOpen}
        modalOpenController={modalOpenController}
      />
      <ToastContainer />
    </DashBoardContainer.SubContainer>
  );
};

export default RecentEventManagementPage;
