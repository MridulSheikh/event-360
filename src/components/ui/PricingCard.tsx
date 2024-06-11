import { Button } from "./button";
import Check from "../icons/Check";
import Close from "../icons/Close";
import { cn } from "@/lib/utils";

type TPricingCard = {
  name: string;
  price: string;
  about: string;
};

const fake_features_data = [
  {
    id: 1,
    feature: "Free Custom Domain",
    isAvailble: true,
  },
  {
    id: 2,
    feature: "Unlimited Bandwith",
    isAvailble: true,
  },
  {
    id: 3,
    feature: "Contributors",
    isAvailble: true,
  },
  {
    id: 4,
    feature: "Basic Website Metrics",
    isAvailble: true,
  },
  {
    id: 5,
    feature: "Squarespace Extension",
    isAvailble: false,
  },
  {
    id: 6,
    feature: "Customer Support",
    isAvailble: false,
  },
  {
    id: 7,
    feature: "Project Roles",
    isAvailble: false,
  },
];

const PricingCard = ({ name, price, about }: TPricingCard) => {
  return (
    <div
      className={cn(
        "bg-white  shadow-[-9px_7px_52px_0px_rgba(0,0,0,0.09)] rounded-[8px] relative overflow-hidden",
        {
          "outline outline-1 outline-[#E2E2E2]": name != "Standard",
        }
      )}
    >
      {name === "Standard" && (
        <div className="bg-[#0B63E5] text-[12px] font-normal text-center py-1.5 text-white absolute w-full top-0">
          Popular Plan
        </div>
      )}
      <div className="px-[36px] pb-[22px] pt-[48px] text-center">
        <h2 className="text-[20px] font-bold">{name}</h2>
        <span className=" text-[25px] text-[#156CFE] font-semibold block">
          {price}
        </span>
        <Button className="w-full text-[15px] font-normal mt-[22px]">
          Get this package
        </Button>
        <p className="mt-[22px] text-[#566B84] text-[12px] font-normal">
          {about}
        </p>
      </div>
      <div className=" text-[12px] font-normal text-center bg-[#E8E8E8] py-1">
        All features options
      </div>
      <ul
        role="list"
        className="space-y-[17px] block px-[36.5px] pt-[22px] pb-[33px]"
      >
        {fake_features_data.map((dt) => (
          <li key={dt.id} className="flex space-x-2 items-center">
            {dt.isAvailble ? <Check /> : <Close />}
            <span className="text-[11px] text-[#454545] font-normal">
              {dt.feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
