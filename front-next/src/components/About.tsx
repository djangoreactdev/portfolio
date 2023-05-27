import { motion } from "framer-motion";
import { urlFor } from "../../sanity";
import { PageInfo } from "../../typings";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="h-screen flex flex-col md:flex-row relative text-center max-w-7xl justify-evenly px-10 mx-auto items-center">
        <h2 className="uppercase tracking-[20px] absolute text-gray-500 top-24  text-2xl">
          About
        </h2>
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
          }}
          viewport={{ once: true }}
          className="-mb-20 md:mb-0 mt-32 flex-shrink-0 object-cover w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
          src={urlFor(pageInfo.profilePic).url()}
        />
        <div className="px-0 md:px-10  space-y-10">
          <h4 className="text-4xl font-semibold"> Background Circles</h4>
          <p className="text-base">{pageInfo.backGroundInformation}</p>
        </div>
      </div>
    </motion.div>
  );
}
