import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid/index";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { PageInfo } from "../../typings";

type Props = {
  pageInfo: PageInfo;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto: feramiz.bahadinnov@gmail.com?subject${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-center justify-evenly mx-auto px-5 items-center max-w-7xl   md:text-left md:flex-row"
    >
      <h4 className="uppercase  tracking-[20px] absolute text-gray-500 top-24  text-2xl">
        ContactMe
      </h4>
      <div className="-mb-32   flex flex-col space-y-4">
        <h4 className="pt-4 font-semibold text-2xl md:text-4xl text-center">
          I have got just what you need{" "}
          <span className="underline decoration-[#F7AB0A]/50">Lets talk!</span>
        </h4>

        <div className=" space-y-0 md:space-y-10">
          <div className="flex justify-center items-center space-x-5">
            <PhoneIcon className="text-[#F7AB0A] animate-pulse h-7 w-7" />
            <p className="texr-2xl">{pageInfo.phoneNumber}</p>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <EnvelopeIcon className="text-[#F7AB0A] animate-pulse h-7 w-7" />
            <p className="texr-2xl">{pageInfo.email}</p>
          </div>

          <div className="flex justify-center items-center space-x-5">
            <MapPinIcon className="text-[#F7AB0A] animate-pulse h-7 w-7" />
            <p className="texr-2xl">{pageInfo.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col   space-y-2  w-[250px] sm:w-fit mx-auto"
        >
          <div className="flex  flex-col md:flex-row  space-y-2 md:space-x-2 md:space-y-0 ">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email "
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-5 text-black font-bold  text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}
