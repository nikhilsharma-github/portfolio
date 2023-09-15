import Bar from "../components/Bar";
import { languages } from "../data";
import {motion} from 'framer-motion'
import { fadeInUp } from "../animations";
import Head from 'next/head'

const resume = () => {

  

  return (
    <div className="px-6 py-2">
      {/* //educationa and experience */}
      <Head>
        <title>Portfolio - Resume</title>
      </Head>
      <div className="grid md:grid-cols-1 gap-6">
        <motion.div variants={fadeInUp } initial="initial" animate="animate" >
          <h5 className="my-3 text-2xl font-bold text-blue-900 dark:text-pinkCustom ">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold dark:text-blue-400">

             B.Tech in Computer Science Engineering.
            </h5>
            <p className="font-semibold">University School of Information and Communication Technology, GGSIPU, New Delhi.</p>
            <p className="my-3 text-justify">(USICT_GGSIPU) | Batch 2019 - 2023 | Graduated in June 2023 | Final CGPA: 8.8/10.0 </p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold dark:text-blue-400">

            Senior Secondary Education - CBSE, Delhi.
            </h5>
            <p className="font-semibold">Rajkiya Pratibha Vikas Vidyalaya, Shalimar Bagh, New Delhi.</p>
            <p className="my-3 text-justify"> Batch 2017 - 2019 | Class 12th : 86% | Class 10th : 10.0 CGPA</p>
          </div>
        </motion.div>
      </div>
      {/* langauges and tools  */}

      <div className="grid gap-6 md:grid-cols-1">
          <div>
              <h5 className="my-3 text-2xl font-bold text-blue-900 dark:text-pinkCustom ">
                  Languages and Frameworks
                      </h5>
                  <div className="my-2  
                   md:text-base text-xs lg:space-x-2 space-x-0
                  ">

                      {
                          languages.map((language=><Bar data={language} key={language.name}/>)
                          )}
                  </div>
          </div>
      </div>
    </div>
  );
};

export default resume;
