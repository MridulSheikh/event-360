import Container from "@/components/Container";
import EventItemCard from "@/components/ui/EventItemCard";
import { useQuery } from "@tanstack/react-query";
import axios from "../../config/axios";
import { motion } from "framer-motion";

type TEventItem = {
  title: string;
  img: string;
};

const GridParentVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const EventItemSection = () => {
  const { data } = useQuery({
    queryKey: ["event-items"],
    queryFn: async () => {
      return await axios.get("/event-item");
    },
  });
  return (
    <Container className="mt-[116px]" id={"event-items"}>
      <div className="text-center">
        <h1>Event Items</h1>
        <p className=" font-normal text-[18px] text-secondary-foreground mt-3 md:w-[701px] mx-auto">
          Unforgettable Moments and Unmatched Excitement Await! Join us for an
          extraordinary journey filled with entertainment, innovation, and the
          joy of shared moments.
        </p>
      </div>
      <motion.div
        variants={GridParentVariant}
        initial="hidden"
        animate="visible"
        transition={{
          ease: "easeInOut",
          duration: 1.5,
          staggerChildren: 0.5,
        }}
        className="mt-[54px] grid md:grid-cols-12 gap-[20px]"
      >
        {data?.data?.data.map((dt: TEventItem, index: number) => (
          <EventItemCard index={index + 1} title={dt.title} img={dt.img} />
        ))}
      </motion.div>
    </Container>
  );
};

export default EventItemSection;
