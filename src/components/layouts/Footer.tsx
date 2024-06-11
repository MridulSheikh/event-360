import Container from "../Container";
import { Link } from "react-router-dom";
import World from "../icons/World";
import Euro from "../icons/Euro";
import Accessbility from "../icons/Accessbility";

const linksData = [
  {
    section: "Product",
    links: ["Pricing", "Overview", "Browse", "Accessibility"],
  },
  {
    section: "Solutions",
    links: ["Brainstorming", "Ideation", "Wireframing", "Research"],
  },
  {
    section: "Resources",
    links: ["Help Center", "Blog", "Tutorials", "FAQs"],
  },
  {
    section: "Support",
    links: ["Contact Us", "Developers", "Documentation", "Integrations"],
  },
  {
    section: "Company",
    links: ["About", "Press", "Events", "Request Demo"],
  },
];

const Footer = () => {
  return (
    <div className=" bg-[#171611] bg-opacity-[85%] mt-[116px]">
      <Container>
        <div className=" grid gap-10 lg:gap-0 lg:grid-cols-6 py-[48px]">
          <div>
            <span className="text-[32px] font-extrabold text-white">
              Event <span className="text-primary">360</span>
            </span>
          </div>
          {linksData.map((dt) => (
            <div>
              <h2 className=" text-white font-semibold">{dt.section}</h2>
              <div className=" flex flex-col gap-y-[15px] mt-[15px] text-[#E2E8F0]">
                {dt.links.map((sc) => (
                  <Link to={`/${sc}`} className=" hover:underline">
                    {sc}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className=" flex flex-wrap items-center justify-between py-[37px] border-t border-[#334155] text-[#E2E8F0] font-normal text-[16px]">
          <span className=" ">@ 2023. All rights reserved.</span>
          <div className=" flex flex-wrap  gap-x-[32px] items-center mt-5 lg:mt-0">
            <span>Terms</span>
            <span>Privacy</span>
            <span>Contact</span>
            <div className=" flex gap-x-[8px]">
              <World />
              <span>EN</span>
            </div>
            <div className=" flex gap-x-[8px]">
              <Euro />
              <span>EUR</span>
            </div>
            <div className=" flex gap-x-[8px]">
              <Accessbility />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
