import Container from "@/components/Container";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { FakeTestimonialData } from "@/constant/testimonial.constant";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TestimonialSection = () => {
  return (
    <Container className=" mt-[116px] pt-[25px]" id="testimonial">
      <div>
        <h1>What client says</h1>
        <div className="mt-[24px] flex justify-between">
          <p className="text-[#566B84] font-normal text-[18px] w-[547px]">
            In the words of our clients, event 360 is synonymous with
            excellence. Their meticulous planning and creative execution turned
            our events into unforgettable experiences.
          </p>
          <div className="hidden lg:flex gap-x-4">
            <button className="w-[50px] h-[50px] bg-[#F0F5FF] text-[#0B63E5] rounded-full flex justify-center items-center">
              <ArrowLeft />
            </button>
            <button className="w-[50px] h-[50px] bg-[#0B63E5] text-white rounded-full flex justify-center items-center">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-[70px]">
        {FakeTestimonialData.map((dt, i: number) => (
          <TestimonialCard
            key={i}
            index={i + 1}
            name={dt.name}
            avatar={dt.avatar}
            position={dt.position}
            review={dt.review}
            logo={dt.logo}
            companyName={dt.companyName}
            colorPlate={dt.colorPlate}
          />
        ))}
      </div>
    </Container>
  );
};

export default TestimonialSection;
