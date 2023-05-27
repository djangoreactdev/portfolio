import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../../typings";

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative w-full px-10 overflow-hidden text-left flex flex-col md:flex-row items-center justify-evenly mx-auto max-w-full"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px]  text-gray-500   text-2xl">
        Experience
      </h3>

      <div className="flex -mb-24 items-center justify-center scrollbar  scrollbar-thumb-[#F7AB0A]/80 space-x-5 w-full overflow-x-scroll snap-x p-10  snap-mandatory">
        {experiences.map((experience) => {
          return (
            <ExperienceCard key={experience._id} experience={experience} />
          );
        })}
      </div>
    </motion.div>
  );
}
