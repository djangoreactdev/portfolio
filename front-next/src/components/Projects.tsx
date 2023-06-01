import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { motion } from "framer-motion";

import { Project } from "../../typings";
import CartProjekt from "./CartProjekt";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  const scrollLeft = () => {
    (
      document.getElementById("content-project") as HTMLElement
    ).scrollLeft -= 400;
  };
  const scrollRight = () => {
    (
      document.getElementById("content-project") as HTMLElement
    ).scrollLeft += 400;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative w-full px-5 overflow-hidden text-left flex md:flex-row justify-center items-center mx-auto max-w-full"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px]  text-gray-500   text-2xl">
        Projects
      </h3>

      <div
        id="content-project"
        className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {projects &&
          projects.map((item, index) => {
            return (
              <CartProjekt
                key={item._id}
                index={index}
                item={item}
                projectLength={projects.length}
              />
            );
          })}
      </div>
      <div className="hidden sm:block absolute bottom-48 flex justify-around ">
        <button
          onClick={scrollLeft}
          className="m-2 p-3  rounded-full hover:bg-black"
        >
          <BsArrowLeft style={{ fontSize: "32px" }} />
        </button>
        <button
          onClick={scrollRight}
          className=" m-2 p-3 rounded-full hover:bg-black"
        >
          <BsArrowRight style={{ fontSize: "32px" }} />
        </button>
      </div>
    </motion.div>
  );
}
