import Container from "@/components/Container";
import PricingCard from "@/components/ui/PricingCard";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { fake_price_plane } from "@/constant/priceplane.constant";

const gridCardVariant = {
  hidden: { opacity: 0, y: 500 },
  visible: { opacity: 1, y: 0 },
};

const ExplorePricingSection = () => {
  const ref = useRef(null);
  const inVew = useInView(ref, {
    once: true,
  });
  return (
    <Container className="mt-[116px]" id="pricing">
      <div className="text-center">
        <h1>Explore our pricing plans</h1>
        <p className=" font-normal text-[18px] text-secondary-foreground mt-3 mx-auto">
          Dive into the Spectrum of Pricing Plans Curated Just for You. Our
          Comprehensive Options Offer Flexibility, Value, and a Seamless
          Experience. From Basic Packages to Premium Bundles, Explore the Tiers
          that Align Perfectly with Your Unique Event Requirements. Your Vision,
          Your Budget – Let's Shape Memorable Experiences Together.
        </p>
      </div>
      <motion.div
        ref={ref}
        variants={gridCardVariant}
        animate={inVew ? "visible" : "hidden"}
        transition={{
          ease: "easeInOut",
          duration: 0.8,
        }}
        className="mt-[76px] grid md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-[25px]"
      >
        {fake_price_plane.map((dt) => (
          <PricingCard
            key={dt.id}
            name={dt.name}
            price={dt.price}
            about={dt.about}
          />
        ))}
      </motion.div>
    </Container>
  );
};

export default ExplorePricingSection;
