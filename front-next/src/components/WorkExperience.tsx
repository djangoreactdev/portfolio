import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../../typings";

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
  const scrollLeft = () => {
    (document.getElementById("content") as HTMLElement).scrollLeft -= 400;
  };
  const scrollRight = () => {
    (document.getElementById("content") as HTMLElement).scrollLeft += 400;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative w-full px-5 overflow-hidden text-left flex flex-col md:flex-row items-center justify-evenly mx-auto max-w-full"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px]  text-gray-500   text-2xl">
        Experience
      </h3>

      <div
        id="content"
        className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide"
      >
        {experiences &&
          experiences.map((experience) => {
            return (
              <ExperienceCard key={experience._id} experience={experience} />
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
