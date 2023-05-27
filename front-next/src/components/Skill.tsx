import { motion } from "framer-motion";
import { urlFor } from "../../sanity";
import { Skill } from "../../typings";
type Props = {
  skill: Skill;
  directionLeft: boolean;
};

export default function SkillItems({ skill, directionLeft }: Props) {
  return (
    <div className="group relative  flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: true }}
        className="-mb-4 rounded-full  border object-cover border-gray-500 w-20 h-20  xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-500 ease-in-out"
        src={urlFor(skill?.image).url()}
      />

      <div className="absolute rounded-full opacity-0 group-hover:opacity-80  transition duration-300 ease-in-out group-hover:bg-white  w-20 h-20  xl:w-28 xl:h-28">
        <div className="flex items-center justify-center h-full">
          <p className="text-black text-3xl font-bold">{skill.progress}%</p>
        </div>
      </div>
    </div>
  );
}
