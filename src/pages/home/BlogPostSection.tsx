import Container from "@/components/Container";
import BlogCard from "@/components/ui/card/BlogCard";
import fakeBlogPostData from "@/constant/BlogPost.constant";
import { motion } from "framer-motion";

const BlogPostSection = () => {
  return (
    <Container
      className=" mt-[116px] pt-[25px] pb-[116px] overflow-hidden"
      id="blog"
    >
      <motion.div>
        <div>
          <h1>Blog Post</h1>
          <p className="text-[#566B84] font-normal text-[18px] mt-[24px] md:w-1/2">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra.Ut posuere felis arcu tellus tempus in in ultricies.
          </p>
        </div>
        <div className="mt-[76px] grid md:grid-cols-2 lg:grid-cols-3  gap-[25px]">
          {fakeBlogPostData.map((dt) => (
            <BlogCard
              id={dt.id}
              key={dt.id}
              title={dt.title}
              description={dt.description}
              cover={dt.cover}
              publishDate={dt.publishDate}
            />
          ))}
        </div>
      </motion.div>
    </Container>
  );
};

export default BlogPostSection;
