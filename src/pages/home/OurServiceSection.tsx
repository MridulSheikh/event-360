import Container from "@/components/Container";
import ServiceCard from "@/components/ui/card/ServiceCard";
import { useQuery } from "@tanstack/react-query";
import axios from "../../config/axios";

type TService = {
  title: string;
  discription: string;
  img: string;
};

const OurServiceSection = () => {
  const { data } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      return await axios.get("/service");
    },
  });
  return (
    <Container className="mt-[76px]" id="services">
      <div className="text-center">
        <h1>Our Services</h1>
        <p className=" font-normal text-[18px] text-secondary-foreground mt-3 md:w-[701px] mx-auto">
          Elevate your events with our bespoke event management services,
          ensuring seamless execution and unforgettable experiences
        </p>
      </div>
      <div className="mt-[54px] grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] justify-center">
        {data?.data?.data.map((service: TService) => (
          <ServiceCard
            cover={service.img}
            title={service.title}
            discription={service.discription}
          />
        ))}
      </div>
    </Container>
  );
};

export default OurServiceSection;
