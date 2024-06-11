import { Check } from "lucide-react";
import { Button } from "../button";

type TServiceCard = {
  cover: string;
  title: string;
  discription: string;
};

const service = [
  "One day pas access all lecture",
  "Lunch and Snack",
  "Meet Event Speaker",
  "Front Seat",
  "One day pass access all lecture",
];

const ServiceCard = ({ cover, title, discription }: TServiceCard) => {
  return (
    <div className="w-full h-[590px] p-[25px] rounded-md bg-gradient-to-b from-primary-foreground to-white group cursor-pointer transition-all ease-in-out duration-200 flex flex-col justify-between transform hover:scale-105">
      <div className=" relative w-full h-[253px] overflow-hidden rounded-md group-hover:hidden">
        <img className=" object-cover w-full h-full" src={cover} />
      </div>
      <div className="w-full md:w-[362px] mt-[24px]">
        <h2 className="text-[24px] font-semibold">{title}</h2>
        <p className=" hidden group-hover:block my-[12px] text-secondary-foreground">
          {discription}
        </p>
      </div>
      <div className="mt-[24px] flex flex-col space-y-[16px]">
        {service.map((sr) => (
          <div className=" flex space-x-[18px]">
            <Check className="text-green-500 text-sm" />
            <span className="text-[18px]">{sr}</span>
          </div>
        ))}
      </div>
      <Button className="w-full rounded-[0px] mt-[32px] text-lg font-normal hidden group-hover:inline-block">
        Check it out
      </Button>
    </div>
  );
};

export default ServiceCard;
