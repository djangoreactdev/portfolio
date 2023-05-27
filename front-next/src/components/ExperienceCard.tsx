import { motion } from "framer-motion";
import { Experience } from "../../typings";
import { urlFor } from "../../sanity";
import Image from "next/image";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col  mt-10 items-center justify-center rounded-lg  flex-shrink-0 space-y-7    w-[400px] h-[500px] md:w-[600px] xl:w-[900px]  snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="rounded-full w-32 h-32 xl:w-[150px] xl:h-[150px] object-cover"
        src={urlFor(experience.companyImage).url()}
      />

      <div className="px-0  md:px-10">
        <h4 className="text-4xl font-light ">{experience.jobTitle}</h4>
        <p className="text-2xl font-bold mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2 pb-2">
          {experience.technologies.map((technology, index) => {
            return (
              <Image
                key={technology._id}
                className="h-10 w-10 rounded-full"
                src={urlFor(technology.image).url()}
                alt={technology.title}
                width="100"
                height="100"
                unoptimized={true}
              />
            );
          })}
        </div>
        <p className="uppercase py- text-gray-300">
          {experience.dateStarted} / {experience.dateEnded}
        </p>
        <ul className="list-disc space-y-4 text-lg ml-5 overflow-y-scroll  scrollbar-thumb-[#F7AB0A]/80 max-w-52  max-h-90 scrollbar   pt-8">
          {experience.point &&
            experience.point.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
        </ul>
      </div>
    </article>
  );
}
