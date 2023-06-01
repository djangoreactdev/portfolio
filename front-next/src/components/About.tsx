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
      <div className="h-screen flex flex-col md:flex-row relative text-center max-w-7xl justify-evenly px-5 mx-auto items-center">
        <h2 className=" hidden sm:block uppercase tracking-[10px] absolute text-gray-500 top-20  text-2xl">
          About
        </h2>
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
          }}
          viewport={{ once: true }}
          className="-mb-20 md:mb-0  md:mt-32 flex-shrink-0 object-cover w-40 h-64 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[600px]"
          src={urlFor(pageInfo.profilePic).url()}
        />
        <div className="px-0 md:px-5  space-y-5">
          <h4 className="md:text-4xl font-semibold"> Background Circles</h4>
          <p className="text-sm md:text-base">
            {pageInfo.backgroundInformation}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
