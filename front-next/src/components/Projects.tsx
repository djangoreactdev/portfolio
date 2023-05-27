import { motion } from "framer-motion";
import { Project } from "../../typings";
import { urlFor } from "../../sanity";
import Link from "next/link";
motion;
type Props = {
  project: Project[];
};

export default function Projects({ project }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col md:flex-row max-w-full overflow-hidden justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px]  text-gray-500   text-2xl">
        Projects
      </h3>
      <div className="w-screen -mb-20  flex relative overflow-y-hidden overflow-x-scroll snap-x snap-mandatory z-20">
        {project &&
          project.map((item, index) => {
            return (
              <div
                key={item._id}
                className="w-screen flex-shrink-0  snap-center flex flex-col items-center justify-center  space-y-5 p-20 md:p-44 h-screen"
              >
                <Link href={item.linkToBuild}>
                  <div className="cursor-pointer">
                    <motion.img
                      initial={{ opacity: 0, y: -300 }}
                      transition={{ duration: 1.2 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="w-36 h-36  sm:w-40 sm:h-40 md:w-42 md:h-42 xl:w-[300px] object-cover xl:h-[300px]"
                      src={urlFor(item.image && item.image).url()}
                      alt={item.title}
                    />
                  </div>
                </Link>

                <div className="space-y-0  md:space-y-10 px-0 md:px-10  max-w-6xl">
                  <h4 className="text-center text-2xl xl:text-4xl font-semibold">
                    <span className="underline decoration-[#F7AB0A]/50">
                      Case Study {index + 1} of {project.length}:{" "}
                    </span>
                    {item.title}
                  </h4>
                  <p className="text-center   text-sm md:text-lg md:text-left">
                    {item.summary}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="w-full top-[30%] absolute bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
