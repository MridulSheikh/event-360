import { forwardRef } from "react";
import { motion } from "framer-motion";

type IPlayButton = {
  onClick: () => void;
};

const PlayButton = forwardRef<HTMLButtonElement, IPlayButton>(
  ({ onClick }, ref) => {
    const pulseAnimation = {
      scale: [1, 1.2, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        loop: Infinity,
      },
    };
    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={pulseAnimation}
        className=" bg-transparent cursor-pointer rounded-full"
        ref={ref}
        onClick={onClick}
      >
        <div className="bg-white w-[88px] h-[88px] rounded-full relative">
          <div
            className="w-[24px] h-[24px] bg-primary rotate-90 absolute top-[37%] right-[32%]"
            style={{ clipPath: "polygon(50% 25%, 0% 100%, 100% 100%)" }}
          />
        </div>
      </motion.button>
    );
  }
);

export default PlayButton;
