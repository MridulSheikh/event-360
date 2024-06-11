import MoreVerticle from "@/components/icons/MoreVerticle";
import OptionDropDown from "../OptionDropDown";
import DeleteButton from "../button/DeleteButton";
import EditeButton from "../button/EditeButton";
import { useState } from "react";
import UpdateServiceModal from "../modal/UpdateServiceModal";
import useService from "@/api/admin/services/useService";

type TServiceManagementCard = {
  title: string;
  img: string;
  discription: string;
  _id: string;
};

const ServiceManagementCard = ({
  title,
  img,
  discription,
  _id,
}: TServiceManagementCard) => {
  const { handleDeleteService } = useService();
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  return (
    <div className=" w-full  h-[full] p-[25px] rounded-md bg-gradient-to-b from-primary-foreground to-white group cursor-pointer transition-all ease-in-out duration-200">
      <div>
        <OptionDropDown
          items={[
            <DeleteButton id={_id} deleteAction={handleDeleteService} />,
            <EditeButton setAction={setIsOpenUpdateModal} />,
          ]}
        >
          <MoreVerticle />
        </OptionDropDown>
        <div className=" relative w-full h-[253px] overflow-hidden rounded-md ease-in-out duration-200 mt-3">
          <img className=" object-cover w-full h-full" src={img} />
        </div>
      </div>

      <div className="w-full mt-[10px]">
        <h2 className="text-[24px] font-semibold">{title}</h2>
        <p className=" my-[12px] text-secondary-foreground">
          {discription.substring(0, 150)}...
        </p>
      </div>
      <UpdateServiceModal
        id={_id}
        isOpen={isOpenUpdateModal}
        title={title}
        img={img}
        discription={discription}
        handleModalController={() => setIsOpenUpdateModal((prev) => !prev)}
      />
    </div>
  );
};

export default ServiceManagementCard;
