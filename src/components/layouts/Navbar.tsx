import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import navlinks from "@/constant/navlink.constant";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

const ResponsiveBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AnimatePresence>
      <Menu onClick={() => setIsOpen((prev) => !prev)} />
      {isOpen && (
        <motion.div className=" fixed top-24 right-0 w-screen h-screen bg-primary-foreground pb-48  p-10 overflow-y-scroll scrollbar-hide">
          <ul className=" space-y-5 flex flex-col">
            {navlinks.map((nav) => (
              <a
                onClick={() => setIsOpen(false)}
                href={nav.href}
                className="font-medium border-b p-3 hover:bg-slate-300"
              >
                {nav.link}
              </a>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > 10) setIsScrolled(true);
    else setIsScrolled(false);
    if (previous) {
      if (latest > previous && latest > 10) setHidden(true);
      else setHidden(false);
    }
  });
  return (
    <>
      <motion.header
        className={cn("h-[96px] fixed w-full z-[999]", {
          " bg-primary-foreground": isScrolled,
        })}
        variants={{
          visible: { y: 0, opacity: "100%" },
          hidden: { y: "-100%" },
        }}
        initial={{ opacity: "0%" }}
        animate={hidden ? "hidden" : "visible"}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
          opacity: {
            duration: 0.8,
          },
        }}
      >
        <nav className="w-full h-full max-w-[1300px] px-[20px] mx-auto flex justify-between items-center ">
          <span className="text-[32px] font-extrabold">
            Event <span className="text-primary">360</span>
          </span>
          <div className="xl:hidden">
            <ResponsiveBar />
          </div>
          <ul className=" space-x-[24px] hidden xl:flex">
            {navlinks.map((nav) => (
              <li className=" relative">
                <a
                  href={nav.href}
                  className="font-medium after:content-[''] after:bg-primary after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute after:duration-300 hover:after:w-[100%] hover:bg-primary-foreground"
                >
                  {nav.link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </motion.header>
    </>
  );
};

export default Navbar;
