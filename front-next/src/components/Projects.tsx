import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
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
      <h3 className="absolute top-24 uppercase tracking-[20px]  text-gray-500   text-2xl">
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
      <div className="absolute  bottom-48 ">
        <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
          <FiChevronRight />
        </button>
      </div>
    </motion.div>
  );
}
