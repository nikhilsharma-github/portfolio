// import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
import { services } from "../data";
import { TiPointOfInterest } from "react-icons/ti";

import ServiceCard from "../components/ServiceCard";
import { IService } from "../type";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations";
import { routeAnimation } from "../animations";
import { GetServerSidePropsContext } from "next";
const About = ({endpoint}) => {
  // console.log("CLIENT",services)
  console.log(endpoint);

  return (
    <div className="flex flex-col px-6 pt-1 flex-grow ">
      <motion.div variants={fadeInUp} initial="initial" animate="animate">
        <h5 className="my-3 font-normal">
          ✅ I am a <b>Computer Science Undergraduate Student</b>, currently
          pursuing my <b>4 year B.Tech Degree</b> from University School of
          Information and Communication Technology, GGSIPU, Dwarka, located in
          New Delhi <b>(USICT_GGSIPU)</b>.<br />✅ Currently I am in{" "}
          <b>3rd Year</b> and Doing <b>Competitive Programming and DSA</b>,
          alongwith Web Development in MERN stack.
          <br />✅ I love to create unique and creative Fronted and Full Stack
          Websites using current Popular and Trending Technologies, like{" "}
          <b>MERN stack</b>.
          <br />✅ I also have interest in Cloud Computing Technology like{" "}
          <b>Google Cloud Platform</b>.
        </h5>
      </motion.div>
      <div
        className="p-4 mt-5 bg-gradient-to-r from-green-200 to-blue-300 flex-grow   dark:from-blueCustom-backgroundDark dark:to-blueCustom-backgroundLight"
        style={{
          marginLeft: "-1.5rem",
          marginRight: "-1.5rem",
        }}
      >
        <h6
          className="my-3 w-48  font-bold tracking-wide  
       text-green-800 text-xl border-b-2 border-green-700 dark:text-pinkCustom dark:border-greenCustom
      transition duration-300 ease-in-out transform  delay-50 hover:-translate-y-1 hover:scale-100 hover:bg-blue-50 dark:hover:bg-blueCustom-backgroundLight px-2 rounded-md 
      "
        >
          What I am doing
        </h6>

        <motion.div className="grid lg:grid-cols-2 gap-4" variants={stagger}>
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className=" bg-yellow-50 dark:bg-gray-900 rounded-lg lg:col-span-1 "
            >
              <ServiceCard service={service}> </ServiceCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export const GetServerSideProps= async(context:GetServerSidePropsContext)=>{

    const res=await fetch(`${process.env.VERCEL_URL}/api/services`);

    const data=await res.json();

    // console.log("SERVER",services);
    console.log(process.env.VERCEL_URL);

  return{

    props:{
      endpoints:process.env.VERCEL_URL,
    }
  }

}

export default About;
