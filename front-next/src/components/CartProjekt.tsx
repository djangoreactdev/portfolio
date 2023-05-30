import { motion } from "framer-motion";
import { Experience, Project } from "../../typings";
import { urlFor } from "../../sanity";
import Image from "next/image";
import Link from "next/link";

type Props = {
  item: Project;
  index: number;
  projectLength: number;
};

export default function CartProjekt({ item, index, projectLength }: Props) {
  return (
    <article className="flex flex-col m-4 p-3 items-center justify-center rounded-lg  flex-shrink-0 space-y-7  snap-center bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <Link href={item.linkToBuild}>
        <motion.img
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="rounded-lg w-32 h-32 xl:w-[150px] xl:h-[150px] "
          src={urlFor(item.image && item.image).url()}
        />
      </Link>
      <div className="flex flex-col items-center justify-center px-0 w-72">
        <h4 className="text-center text-2xl xl:text-4xl font-semibold">
          <span className="underline decoration-[#F7AB0A]/50">
            Case Study {index + 1} of {projectLength}:{" "}
          </span>
          {item.title}
        </h4>

        <p className=" py-1 text-gray-300 ">{item.summary}</p>
      </div>
    </article>
  );
}
