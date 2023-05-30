import { motion } from "framer-motion";
import { Experience } from "../../typings";
import { urlFor } from "../../sanity";
import Image from "next/image";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col m-4 p-3 items-center justify-center rounded-lg  flex-shrink-0 space-y-7  snap-center bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="rounded-lg w-32 h-32 xl:w-[150px] xl:h-[150px] "
        src={urlFor(experience.companyImage && experience.companyImage).url()}
      />

      <div className="flex flex-col items-center justify-center px-0  md:px-5 ">
        <h4 className="text-4xl font-light ">{experience.jobTitle}</h4>
        <p className="text-2xl font-bold mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2 pb-2">
          {experience.technologies.map((technology, index) => {
            return (
              <Image
                key={technology._id}
                className="h-10 w-10 rounded-full object-cover"
                src={urlFor(technology.image).url()}
                alt={technology.title}
                width="100"
                height="100"
                unoptimized={true}
              />
            );
          })}
        </div>
        <p className="uppercase py-1 text-gray-300">
          {experience.dateStarted} / {experience.dateEnded}
        </p>
      </div>
    </article>
  );
}
