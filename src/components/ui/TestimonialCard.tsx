import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

type TTestimonialCard = {
  index: number;
  name: string;
  avatar: string;
  position: string;
  review: string;
  logo: string;
  companyName: string;
  colorPlate: string;
};

const cardVariant = {
  hidden: { x: -150, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const TestimonialCard = ({
  index,
  name,
  avatar,
  position,
  review,
  logo,
  companyName,
  colorPlate,
}: TTestimonialCard) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <motion.div
      ref={ref}
      variants={cardVariant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.3 * index,
      }}
      className={cn(
        "p-[40px] rounded-[24px] flex flex-col justify-between",
        `bg-[${colorPlate}]`,
        {
          "bg-[#F5F6F7]": companyName === "YouTube",
          "bg-[#E7F5E8]": companyName === "Google",
        }
      )}
    >
      <div className=" flex gap-x-[12px] items-center">
        <div className="w-[48px] h-[48px] relative overflow-hidden rounded-full">
          <img
            src={avatar}
            className=" object-cover w-full h-full object-center"
          />
        </div>
        <div>
          <span className=" text-[16px] font-medium text-[#061C3D]">
            {name}
          </span>
          <p className="text-[#42526B] font-normal">
            {position} of <span className="text-[#7534FF]">{companyName}</span>
          </p>
        </div>
      </div>
      <div className="mt-[24px] text-[18px] text-[#061C3D]">
        <p>{review}</p>
      </div>
      <div className="w-[80px] relative mt-[40px]">
        <img src={logo} className="object-contain w-full" />
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
