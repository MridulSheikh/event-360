import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import teamImage from "@/assets/teams.jpg";
import PlayButton from "@/components/ui/PlayButton";
import HomeVideoModal from "@/components/ui/modal/HomeVideoModal";
import { useState } from "react";
import { motion } from "framer-motion";

const HeaderParentVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const HeadingVariant = {
  hidden: { y: 150, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const ButtonVariant = {
  hidden: { y: 150, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const discriptionVariant = {
  hidden: { x: 150, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const videoVariant = {
  hidden: { scale: "50%", opacity: 0 },
  visible: { scale: "100%", opacity: 1 },
};

const HeroSection = () => {
  const [isPlay, setIsPlay] = useState(false);
  return (
    <div className="bg-primary-foreground overflow-hidden">
      <Container>
        <motion.div
          variants={HeaderParentVariant}
          initial="hidden"
          animate="visible"
          transition={{ ease: "easeInOut", duration: 1.5 }}
          className="lg:grid grid-cols-2 pt-[129px] place-items-center"
        >
          <motion.h1
            variants={HeadingVariant}
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
            className="text-4xl sm:text-[64px] font-extrabold uppercase text-secondary leading-tight"
          >
            Best Event management firm
          </motion.h1>
          <motion.p
            variants={discriptionVariant}
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
            className="text-secondary text-base sm:text-[20px] lg:w-[520px] mx-auto mt-5 lg:mt-0"
          >
            Crafting unforgettable experiences, we are the premier event
            management firm. From concept to execution, trust us to make your
            events extraordinary
          </motion.p>
        </motion.div>
        <motion.div
          variants={ButtonVariant}
          initial="hidden"
          animate="visible"
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
        >
          <Button className="w-[195px] rounded-[0px] mt-[32px] text-lg font-normal">
            Explore
          </Button>
        </motion.div>

        <motion.div
          variants={videoVariant}
          initial="hidden"
          animate="visible"
          transition={{ ease: "easeInOut", duration: 0.8, delay: 0 }}
          className="h-[300px] md:h-[608px] relative overflow-hidden mt-[48px] w-full"
        >
          <div className=" absolute top-[50%] right-[40%] md:right-[48%] z-20">
            <PlayButton onClick={() => setIsPlay(true)} />
          </div>
          <img src={teamImage} className="object-cover w-full h-full" />
        </motion.div>
        <HomeVideoModal
          isOpen={isPlay}
          modalOpenController={() => setIsPlay((prev) => !prev)}
        />
      </Container>
    </div>
  );
};

export default HeroSection;
