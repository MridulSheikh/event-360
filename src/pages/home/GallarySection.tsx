import Container from "@/components/Container";
import { gallaryData } from "@/constant/gallery.constant";
import { cn } from "@/lib/utils";

const GallarySection = () => {
  return (
    <Container className="mt-[116px]" id="gallery">
      <div className="text-center">
        <h1>Gallery</h1>
        <p className=" font-normal text-[18px] text-secondary-foreground mt-3">
          Welcome to the Enchanted Event Farm Gallery – a whimsical showcase of
          moments that never took place on any farm! Explore our fantastical
          collection where pigs soar through the clouds, and crops blossom into
          colorful confetti.
        </p>
      </div>
      <div className=" columns-4 lg:grid lg:grid-cols-7 align-middle gap-[16px] mt-[78px] max-w-[999px] mx-auto">
        {gallaryData.map((src, index) => (
          <div
            className={cn("flex w-full", {
              "row-span-2 items-center": index === 1 || index === 5,
              "items-end":
                index === 0 || index === 2 || index === 4 || index === 6,
            })}
          >
            <div
              className={cn(
                "overflow-hidden rounded-md w-full h-[171px] mx-auto relative",
                {
                  "h-[215px]": index === 3 || index === 9,
                }
              )}
            >
              <img src={src} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default GallarySection;
