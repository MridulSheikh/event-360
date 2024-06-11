import Container from "@/components/Container";
import { companyLogo } from "@/constant/companyLogo.constant";

const TurstedCustomerSection = () => {
  return (
    <Container className="mt-[96px]">
      <p className="text-[20px] font-normal text-[#061C3D] text-center">
        We have <span className="text-[#0B63E5]">23k+</span> Satisfied & Trusted
        Customers
      </p>
      <div className=" flex flex-wrap lg:flex-nowrap gap-5 justify-center  lg:justify-between items-center mt-[24px]">
        {companyLogo.map((logo) => (
          <img src={logo} className="w-[112px]" />
        ))}
      </div>
    </Container>
  );
};

export default TurstedCustomerSection;
