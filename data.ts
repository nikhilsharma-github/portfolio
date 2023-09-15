// // It will contain all the services which I provide, this data will be shown on about page.

import { IProject, IService, ISkill, ICertificates } from "./type";
import { CgWebsite } from "react-icons/cg";
import {
  FcReadingEbook,
  FcBarChart,
  FcBusinessman,
  FcSmartphoneTablet,
} from "react-icons/fc";
import { MdPersonSearch } from "react-icons/md";
import {
  SiGooglecloud,
  SiUdemy,
  SiCoursera,
  SiCodeforces,
} from "react-icons/si";

import { RiComputerLine } from "react-icons/ri";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { VscServerProcess } from "react-icons/vsc";
import im from "./public/images/DrumKit.jpg";

// import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
// import {  IService } from "./type";

// import { BsCircleFill } from "react-icons/bs";
// import { FaServer } from "react-icons/fa";
//
// export const services:IService[]=[

//     {
//     Icon: RiComputerLine,
//     title:"Frontend Developer",
//     about:"I can build Beautiful and simple SPA using <b>HTML</b>, <b>CSS</b>, <b>JS</b> and <b>React.js</b>",
// },
// {

//     Icon: MdDeveloperMode,
//     title:"Competitive Coder",
//     about:"I am a regular <b>Competitive Coder</b> on Platforms like <b>Codechef</b>, <b>Pepcoding and LeetCode</b>, Currently 3 on Codechef.",

// },
// {

//     Icon: SiGooglecloud,
//     title:"Google Cloud Platform Experience",
//     about:"Learned and Experienced the Fundamental Essential services related to Google Cloud Platform. Learnt about various Terminologies, Tools and Duties in a Cloud Environment.",

// }
// ];

export const services: IService[] = [
  {
    Icon: FcBusinessman,
    title: "Looking for Opportunities",
    about:
      "<b>Actively applying</b> on all <b>Job</b> Portals like Career Pages, LinkedIn, etc. Also participating in Hiring Challenges and preparing for upcoming <b>interviews</b> as well.",
  },
  {
    Icon: FcSmartphoneTablet,
    title: "Web Development",
    about:
      "Currently learning MERN Stack technology and developing some projects in it Using<b> React.js, MongoDB, Node.js, etc.</b>",
  },
  {
    Icon: FcBarChart,
    title: "Practicing DSA problems",
    about:
      "Solving DSA problems consistently on Platforms like <b>Leetcode</b>, <b>GeeksforGeeks</b>, <b>Codestudio</b>. Solved around 300+ Problems on Leetcode and GFG alone. Participating in Coding Contests too.",
  },
  {
    Icon: FcReadingEbook,
    title: "Strenghtening CS Fundamentals",
    about:
      "Revising CS concepts like <b>Object Oriented Programming, Database Management, Operating System,  etc</b>. Also Improving my <b>soft skills and communication skills</b>.",
  },
];

export const skills: ISkill[] = [
  {
    name: "C++",
    level: "80%",
    Icon: BsCircleFill,
  },
];
export const languages: ISkill[] = [
  {
    name: "C++ and STL",
    level: "75%",
    Icon: BsCircleFill,
  },
  {
    name: "Java and Python",
    level: "65%",
    Icon: BsCircleFill,
  },
  {
    name: "HTML, CSS, Bootstrap, Tailwind",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "JavaScript and TypeScript",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "React.js and Next.js",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "MongoDB and MySQL",
    level: "50%",
    Icon: BsCircleFill,
  },
  {
    name: "Node.js and Express",
    level: "40%",
    Icon: BsCircleFill,
  },
  {
    name: "Google Cloud Platform and Qwiklabs",
    level: "40%",
    Icon: BsCircleFill,
  },
  {
    name: "jupyterNotebook",
    level: "35%",
    Icon: BsCircleFill,
  },
  {
    name: "openCV and haarCascade",
    level: "30%",
    Icon: BsCircleFill,
  },
  {
    name: "Python Flask and ML",
    level: "30%",
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "UDF-USICT Discuss Forum",
    description:
      "Developed a Community Platform named UDF-USICT Discuss Forum using MERN Stack, Students can create posts according to their interests like Academics, Coding, Exams, General Discussion, Placements,etc.",
    image_path: "/images/UDF.jpeg",
    deployed_url: "",
    github_url:
      "https://github.com/nikhilsharma-github/UDF_USICT-Discuss-Forum",
    category: ["MERN"],
    key_techs: ["React", "MongoDB", "NodeJS", "ExpressJS", "MaterialUI","July 2022"],
  },
  {
    id: 2,
    name: "License Plate Spotter",
    description:
      "Object Detection based Project is created along with Optical Character Recognition (OCR) Technique. The Actions include training our model with labeled License Plates and Applying the OCR technique to recognize the text written on the License Plate, also Frontend Platform is created to showcase the result",
    image_path: "/images/LPS.png",
    //  image_path:"./public/images/DrumKit.jpg",
    deployed_url: "",
    github_url:
      "https://github.com/nikhilsharma-github/LicensePlateSpotter_License-Plate-Detection-and-OCR-Recognition",
    category: ["ML"],
    key_techs: [
      "Python",
      "tensorflow.keras",
      "sklearn",
      "numpy",
      "pandas",
      "HTML CSS JS",
      "June 2023"
    ],
  },
  {
    id: 3,
    name: "Pairsonality",
    description:
      "An Image Classification based Machine Learning Project Created in jupyterNotebook using haarCascade and openCV. Here, we collected raw images of celebrities, cleaned the data, used supervised learning, trained the model, and deployed it by creating a backend server in Python Flask",
    image_path: "/images/Pairsonality.jpeg",
    deployed_url: "",
    github_url:
      "https://github.com/nikhilsharma-github/Pairsonality---Celebrity-Face-Recognizer",
    category: ["ML"],
    key_techs: ["Python", "openCV", "haarcascade", "Flask","January 2023"],
  },
  {
    id: 4,
    name: "Portfolio Website",
    description:
      "This Website is Created using Next.js, tailwind and TypeScript and a lot of Efforts in its UI and Responsiveness. ",
    image_path: "/images/Portfolio.jpeg",
    deployed_url: "https://portfolio-nikhilsharma-github.vercel.app/",
    github_url: "https://github.com/nikhilsharma-github/portfolio",
    category: ["React"],
    key_techs: ["React", "Next.js", "Tailwind", "Typescript","November 2021"],
  },
  {
    id: 5,
    name: "Text-Utility",
    description:
      "A React Based App for Text Manipulation. We Can Modify our Text as we want, like converting the textintoUPPERCASE, lower‐case, camelCase,etc.",
    image_path: "/images/TextUtility.JPG",
    //  image_path:"./public/images/DrumKit.jpg",
    deployed_url:
      "https://nikhilsharma-github.github.io/Text-Utility/#/Text-Utility/",
    github_url: "https://github.com/nikhilsharma-github/Text-Utility",
    category: ["React"],
    key_techs: ["React", "Bootstrap","July 2021"],
  },
  {
    id: 6,
    name: "Republic News India - RNI",
    description:
      "A react based app which shows latest news, fetched from newsAPI.org, and presents it in a better way with refreshing UI, mainly used Bootstrap, API and react",
    image_path: "/images/NewsApp.JPG",
    deployed_url: "https://republic-news-india.herokuapp.com/Home",
    github_url: "https://github.com/nikhilsharma-github/NewsAppRNI",
    category: ["React"],
    key_techs: ["React", "Bootstrap", "newsAPI.org","Aug 2021"],
  },
  {
    id: 7,
    name: "The Simon Game",
    description:
      "A simple HTML, CSS and JS based Console Game in which one must remember the older patterns to reach next levels",
    image_path: "/images/Simon.JPG",
    deployed_url: "https://nikhilsharma-github.github.io/Simon_Game/",
    github_url: "https://github.com/nikhilsharma-github/Simon_Game",
    category: ["Basic"],
    key_techs: ["HTML, CSS, JS","July 2021"],
  },
  {
    id: 8,
    name: "Drum Kit",
    description:
      "A simple HTML, CSS and JS based Music Generating Console Game in which Various Instruments gets played when Clicked",
    image_path: "/images/DrumKit.JPG",
    deployed_url: "https://nikhilsharma-github.github.io/DrumKit/",
    github_url: "https://github.com/nikhilsharma-github/DrumKit",
    category: ["Basic"],
    key_techs: ["HTML, CSS, JS","July 2021"],
  },
  {
    id: 9,
    name: "TinDog",
    description:
      "Tinder for Dogs, Simple Website Created using HTML and CSS only.",
    image_path: "/images/TinDog.JPG",
    deployed_url: "https://nikhilsharma-github.github.io/TinDog/",
    github_url: "https://github.com/nikhilsharma-github/TinDog",
    category: ["Basic"],
    key_techs: ["HTML", "CSS", "Bootstrap","July 2021"],
  },
];

export const certificates: ICertificates[] = [
  {
    name: "The Complete 2022 Web Development Bootcamp by Angela Yu",
    description:
      "Learnt about Web Development Technologies like HTML, CSS, JS, React.js, Node.js, MongoDB, Deployment, etc.",
    type: "Certificate",
    Icon: SiUdemy,
    date: "Jan 2022",
    url: "https://www.udemy.com/certificate/UC-885488bc-d830-4ccf-aa06-d3b0f2d26b01/",
  },
  {
    name: "Architecting with Google Compute Engine",
    description:
      "5 Course Specialisation by Coursera, learned to  deploy solution elements, including infrastructure components such as networks, systems and applications services using Google Cloud Platform, with a focus on Compute Engine.",
    type: "Certificate",
    Icon: SiCoursera,
    date: "Mar 21",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/4AXVLP4P5B78",
  },
  {
    name: "Crash Course on C++ STL",
    description: "Learned and Implemented useful STL of C++.",
    type: "cert",
    Icon: SiUdemy,
    date: "Mar 21",
    url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-fbcd961a-2e74-4845-bc88-630e4fea1a1f.pdf",
  },
  {
    name: "Preparing for the Google Cloud ACE Exam",
    description:
      "Covered Important Aspects required for Clearing this ACE exam.",
    type: "cert",
    Icon: SiCoursera,
    date: "Mar 21",
    url: "https://www.coursera.org/account/accomplishments/certificate/CC9EFMG2CXBU",
  },
  {
    name: "Reliable Google Cloud Infrastructure:Design and Process",
    description:
      "Learned about important Processes and Design Principles which are important for a Cloud Infrastructure",
    type: "cert",
    Icon: SiCoursera,
    date: "Mar 21",
    url: "https://www.coursera.org/account/accomplishments/certificate/P9DJ94A4BXS6",
  },
  {
    name: "Elastic Google Cloud Infrastructure: Scaling and Automation",
    description:
      "As per the Users requirements, learned about how to scale our Cloud Servers under excessive traffic using Automation",
    type: "cert",
    Icon: SiCoursera,
    date: "Feb 21",
    url: "https://www.coursera.org/account/accomplishments/certificate/H9MWTZ8HGC3W",
  },
  {
    name: "Essential Google Cloud Infrastructure:Core Services",
    description:
      "Learned about How to use the Core Services of Compute Engine.",
    type: "cert",
    Icon: SiCoursera,
    date: "Feb 21",
    url: "https://www.coursera.org/account/accomplishments/certificate/X7MYXY5YGQ37",
  },
  {
    name: "Essential Google Cloud Infrastructure:Foundation",
    description:
      "Covered about the Basic introduction of Compute Engine Services, available in our Google Cloud Console",
    type: "cert",

    Icon: SiCoursera,
    date: "Feb 21",
    url: "https://www.coursera.org/account/accomplishments/certificate/ENDZ4JK7YKGF",
  },
  {
    name: "Google Cloud Platform Fundamentals:Core Infrastructure",
    description: "Gives a brief Introduction about the Google Cloud Console.",
    type: "cert",
    Icon: SiCoursera,
    date: "Jan 21",
    url: "https://www.coursera.org/account/accomplishments/certificate/XVGQA5HRF6P6",
  },
  {
    name: "30 Days of Google Cloud",
    description:
      "Learned and Experienced the Fundamental Essential services related   to Google Cloud Platform. Completed Both Cloud Engineer and ML AI track. Earned All 12 Badges and completed 72 Labs of Qwiklabs.",
    type: "cert",
    Icon: SiGooglecloud,
    date: "Nov 20",
    url: "https://www.cloudskillsboost.google/public_profiles/a7a5df3d-25eb-46f4-90ac-c62238cfc9e1",
  },
];
