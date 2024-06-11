import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "../../config/axios";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const headingVariant = {
  hidden: { x: -150, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const imageVariant = {
  hidden: { x: 150, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const RecentEventSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  const { data } = useQuery({
    queryKey: ["recent-events"],
    queryFn: async () => {
      return await axios.get("/recent-event");
    },
  });
  return (
    <Container className="mt-[166px] overflow-hidden" id="recent-event">
      <div className="grid lg:grid-cols-2 gap-[107px]">
        <motion.div
          ref={ref}
          variants={headingVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{
            duration: 0.8,
          }}
          className=" flex flex-col justify-center"
        >
          <h1>Recent Events</h1>
          <p className="text-[#566B84] font-normal text-[18px] mt-[24px]">
            Step into the heartbeat of excitement at our Recent Events Showcase!
            Immerse yourself in the vibrant energy of our latest gatherings,
            where laughter echoed, connections blossomed, and memories were
            made. From dynamic speakers that sparked inspiration to interactive
            experiences that left a lasting impression.
          </p>
          <div>
            <Button className=" font-bold text-[16px] rounded-none mt-[48px]">
              Learn more
            </Button>
          </div>
        </motion.div>
        <div className=" grid grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {data?.data?.data.map(
            (dt: { _id: string; img: string }, i: number) => (
              <motion.img
                ref={ref}
                variants={imageVariant}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{
                  duration: 0.8,
                  delay: 0.5 * i,
                }}
                key={dt._id}
                src={dt.img}
                alt=""
                className={cn("h-[185px] rounded-2xl", {
                  "rounded-full": i === 2 || i === 3,
                })}
              />
            )
          )}
        </div>
      </div>
    </Container>
  );
};

export default RecentEventSection;
