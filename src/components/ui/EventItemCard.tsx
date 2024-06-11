import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type TEventItemCard = {
  index: number;
  title: string;
  img: string;
};

const ChildVariant = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

const EventItemCard = ({ index, title, img }: TEventItemCard) => {
  const ref = useRef(null);
  const inVew = useInView(ref, {
    once: true,
  });
  return (
    <motion.div
      ref={ref}
      variants={ChildVariant}
      initial={"hidden"}
      animate={inVew ? "visible" : "hidden"}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.3 * index,
      }}
      className={cn("p-4 rounded-lg bg-[#D9D9D9] col-span-4", {
        "xl:col-span-2": index === 4 || index === 5,
        "xl:row-span-2": index === 3,
      })}
    >
      <div
        className={cn(
          "rounded-lg w-full h-[187px] relative overflow-hidden mb-[12px]",
          {
            "xl:h-auto": index === 3,
          }
        )}
      >
        <img src={img} className="object-cover object-center h-full w-full" />
      </div>
      <span className="text-[20px]">{title}</span>
    </motion.div>
  );
};

export default EventItemCard;
