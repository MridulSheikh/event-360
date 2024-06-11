import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FakeContactData = [
  {
    address: "+880 1883992408",
    icon: <Phone className=" text-gray-600" />,
  },
  {
    address: "info@event360.com",
    icon: <Mail className=" text-gray-600" />,
  },
  {
    address: "24/12 Dhanmondi, Dhaka, Bangladesh",
    icon: <MapPin className="text-gray-600" />,
  },
];

const leftVariant = {
  hidden: { x: -150, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const rightVariant = {
  hidden: { x: 150, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const ContactusSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <Container className=" pt-[25px] overflow-hidden" id="contact">
      <div className=" grid lg:grid-cols-2">
        <motion.div
          ref={ref}
          variants={leftVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
          }}
          className=" flex flex-col"
        >
          <div>
            <h1>Contact Us</h1>
            <p className="text-[#566B84] font-normal text-[18px] mt-[24px]">
              Ut posuere felis arcu tellus tempus in in ultricies. Gravida id
              nibh ornare viverra.Ut posuere felis arcu tellus tempus in in
              ultricies.
            </p>
          </div>
          <div className=" mt-10">
            {FakeContactData.map((dt) => (
              <div className="flex gap-x-3 items-center text-[#566B84] font-normal text-[18px] mt-4">
                <div className="bg-[#e8e0d1] rounded-full w-10 h-10 flex justify-center items-center">
                  {dt.icon}
                </div>
                <div className="text-secondary">
                  <span>{dt.address}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          variants={rightVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{
            ease: "easeInOut",
            delay: 0.5,
            duration: 0.5,
          }}
          className=" flex flex-col"
        >
          <form
            action=""
            className="p-[30px] rounded-[20px] w-full bg-[#FFF9EE] mt-20 lg:mt-0"
          >
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-7">
              <div>
                <label
                  htmlFor=""
                  className=" text-sm font-normal text-secondary block"
                >
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className=" mt-1 text-base p-2 border rounded-md w-full outline-none focus:outline-pink-300 focus:border-none"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className=" text-sm font-normal text-secondary block"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doie"
                  className=" mt-1 text-base p-2 border rounded-md w-full outline-none focus:outline-pink-300 focus:border-none"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className=" text-sm font-normal text-secondary block"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className=" mt-1 text-base p-2 border rounded-md w-full outline-none focus:outline-pink-300 focus:border-none"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className=" text-sm font-normal text-secondary block"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="+880 1XXXXXXXXX"
                  className=" mt-1 text-base p-2 border rounded-md w-full outline-none focus:outline-pink-300 focus:border-none"
                />
              </div>
              <div className="lg:col-span-2">
                <label
                  htmlFor=""
                  className=" text-sm font-normal text-secondary block"
                >
                  Your message
                </label>
                <textarea className=" mt-1 h-48 text-base p-2 border rounded-md w-full outline-none focus:outline-pink-300 focus:border-none resize-none" />
              </div>
            </div>
            <div className=" flex justify-end mt-5">
              <Button className="w-full lg:w-auto">Send</Button>
            </div>
          </form>
        </motion.div>
      </div>
    </Container>
  );
};

export default ContactusSection;
