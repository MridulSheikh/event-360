import DashBoardContainer from "@/components/layouts/DashBoardContainer";
import AddNewService from "./AddNewService";
import axios from "../../../config/axios";
import { useQuery } from "@tanstack/react-query";
import SckeletonCard from "@/components/ui/card/SckeletonCard";
import ServiceManagementCard from "@/components/ui/card/ServiceManagementCard";
import { ToastContainer } from "react-toastify";

const ServiceManagementPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      return await axios.get("/service");
    },
  });
  return (
    <DashBoardContainer.SubContainer route="Service Management">
      <div className=" py-5 px-8">
        <div className=" flex justify-between">
          <span>{data?.data?.data.length || 0} items</span>
          <AddNewService />
        </div>
        <>
          {isLoading ? (
            <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
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
                <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                  {data?.data?.data?.map(
                    (dt: {
                      img: string;
                      _id: string;
                      title: string;
                      discription: string;
                    }) => (
                      <ServiceManagementCard
                        key={dt._id}
                        title={dt.title}
                        discription={dt.discription}
                        img={dt.img}
                        _id={dt._id}
                      />
                    )
                  )}
                </div>
              )}
            </>
          )}
        </>
      </div>
      <ToastContainer />
    </DashBoardContainer.SubContainer>
  );
};

export default ServiceManagementPage;
