import Container from "@/components/Container";
import Cpu from "@/components/icons/Cpu";
import Stack from "@/components/icons/Stack";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const imgVariant = {
  hidden: { x: 150, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const ParentVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const childrenVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const UpcommingEventSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <Container className="mt-[161px] overflow-hidden" id="upcoming-event">
      <div className="grid lg:grid-cols-2 gap-[92px]">
        <motion.div
          ref={ref}
          variants={ParentVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{
            duration: 0.8,
            delayChildren: 0,
            staggerChildren: 0.5,
          }}
          className=" flex flex-col justify-center"
        >
          <motion.h1 variants={childrenVariant}>Upcoming Events</motion.h1>
          <motion.p
            variants={childrenVariant}
            className="text-[#566B84] font-normal text-[18px] mt-[24px]"
          >
            Whether it's a corporate summit, a creative workshop, or a social
            mixer, we turn visions into reality. Join us in crafting moments
            that linger in the hearts and memories of all who attend. Elevate
            your events with Where Every Occasion Is an Extraordinary Story.
          </motion.p>
          <motion.div
            variants={childrenVariant}
            transition={{
              delayChildren: 0.5,
              staggerChildren: 0.5,
            }}
            className="mt-[48px] bg-[#FFF9EE] rounded-[16px]"
          >
            <motion.div
              variants={childrenVariant}
              className="flex space-x-[20px] p-[32px]"
            >
              <div>
                <Stack />
              </div>
              <div>
                <h3 className="text-[20px] font-medium text-[#061C3D]">
                  Golf Clubbers Annual Agenda
                </h3>
                <p className=" text-[16px] text-[#42526B] mt-[8px]">
                  Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim
                  tortor in tellus dictum pellentesque.{" "}
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={childrenVariant}
              className="mx-[32px] h-[2px] bg-[#061C3D] bg-opacity-10"
            />
            <motion.div
              variants={childrenVariant}
              className="flex space-x-[20px] p-[32px]"
            >
              <div>
                <Cpu />
              </div>
              <div>
                <h3 className="text-[20px] font-medium text-[#061C3D]">
                  Music Events at LA
                </h3>
                <p className=" text-[16px] text-[#42526B] mt-[8px]">
                  Vivamus dignissim tortor in tellus dictum pellentesque.
                  Praesent mauris metus, dictum quis velit non.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          ref={ref}
          variants={imgVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{
            duration: 0.8,
          }}
          className=" w-full h-[300px] lg:h-[648px] rounded-[26px] overflow-hidden relative"
        >
          <motion.img
            src="/images/upcomming_event.png"
            className=" object-cover object-center w-full h-full"
          />
        </motion.div>
      </div>
    </Container>
  );
};

export default UpcommingEventSection;
