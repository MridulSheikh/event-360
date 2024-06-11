import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

const ChildVariant = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

type TBlogCardProps = {
  id: number;
  title: string;
  cover: string;
  publishDate: string;
  description: string;
};

const BlogCard = ({
  id,
  title,
  cover,
  publishDate,
  description,
}: TBlogCardProps) => {
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
        delay: 0.3 * id,
      }}
      className="bg-white  shadow-[-9px_7px_52px_0px_rgba(0,0,0,0.09)] rounded-[8px] relative overflow-hidden  p-5 cursor-pointer"
    >
      <div className=" w-full h-56 rounded-[8px] relative overflow-hidden">
        <img src={cover} className="object-cover w-full h-full object-center" />
      </div>
      <div className="mt-5 h-full">
        <h2 className=" text-2xl font-semibold mb-3">{title}</h2>
        <span className="text-sm">
          Posted on <span className="text-primary">{publishDate}</span>
        </span>
        <p className=" mt-5 text-[#566B84] text-base">{description}</p>
      </div>
    </motion.div>
  );
};

export default BlogCard;
