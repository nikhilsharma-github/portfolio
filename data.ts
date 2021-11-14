// // It will contain all the services which I provide, this data will be shown on about page.

import { IProject, IService, ISkill,ICertificates } from "./type";
import { SiGooglecloud,SiUdemy,SiCoursera,SiCodeforces } from "react-icons/si";
import { RiComputerLine } from "react-icons/ri";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import {VscServerProcess} from "react-icons/vsc";


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
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I love to build beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b> and Fronted Frameworks Like <b>React.js</b> ",
  },
  {
    Icon: VscServerProcess,
    title: "Backend Development",
    about:
      "For coding the server side internal Logic for an Application, I usually use <b>Node.js</b> and <b>Express</b> alongwith <b>MongoDB</b> for Database.",
  },

  {
    // Icon: MdDeveloperMode,
    Icon: SiCodeforces,
    title: "Competitive Coder",
    about:
      "I am a regular problem solver on <b>Codechef</b>, <b>Pepcoding</b>, <b>HackerRank</b>  and <b>Leet Code</b>. Currently, 3 star on Codechef",
  },
  {
    Icon: SiGooglecloud,
    title: "Google Cloud Platform Experience",
    about:
      "Learned and Experienced the Fundamental Essential services related to <b>Google Cloud Platform</b>. Learnt about various Terminologies, Tools and Duties in a Cloud Environment.",
  },
];


export const skills: ISkill[] = [
  {
    name: "C++",
    level: "80%",
    Icon: BsCircleFill,
  }
];
export const languages: ISkill[] = [
  {
    name: "C++",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "Java",
    level: "65%",
    Icon: BsCircleFill,
  },
  {
    name: "HTML and CSS",
    level: "85%",
    Icon: BsCircleFill,
  },
  
  {
    name: "JavaScript",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "TypeScript",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "React.js",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Redux",
    level: "50%",
    Icon: BsCircleFill,
  },
  {
    name: "Next.js",
    level: "48%",
    Icon: BsCircleFill,
  },
  {
    name: "Node.js",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "Bootstrap",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Tailwind",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "jQuery",
    level: "50%",
    Icon: BsCircleFill,
  },
  
];


export const projects:IProject[] =[

   {
     
     id:1,
     name:"Text-Utility",
     description:"A React Based App for Text Manipulation. We Can Modify our Text as we want, like converting the textintoUPPERCASE, lower‐case, camelCase,etc.",
     image_path:"/images/TextUtility.jpg",
     deployed_url:"https://nikhilsharma-github.github.io/Text-Utility/#/Text-Utility/",
     github_url:"https://github.com/nikhilsharma-github/Text-Utility",
     category:["React"],
     key_techs:["React","Bootstrap"]
     
    },
    {id:2,
      name:"Portfolio Website",
      description:"This Website is Created using Next.js, tailwind and TypeScript and a lot of Efforts in its UI and Responsiveness. ",
      image_path:"/images/Portfolio.jpg",
      deployed_url:"",
      github_url:"",
      category:["React"],
      key_techs:["React","Next.js","Tailwind","Typescript"]
 
    },
    {id:3,
      name:"Republic News India - RNI",
      description:"A react based app which shows latest news, fetched from newsAPI.org, and presents it in a better way with refreshing UI, mainly used Bootstrap, API and react",
      image_path:"/images/NewsApp.jpg",
      deployed_url:"https://republic-news-india.herokuapp.com/Home",
      github_url:"https://github.com/nikhilsharma-github/NewsAppRNI",
      category:["React"],
      key_techs:["React","Bootstrap","newsAPI.org"]
 
    },
   {
    id:4,
     name:"The Simon Game",
     description:"A simple HTML, CSS and JS based Console Game in which one must remember the older patterns to reach next levels",
     image_path:"/images/Simon.jpg",
     deployed_url:"https://nikhilsharma-github.github.io/Simon_Game/",
     github_url:"https://github.com/nikhilsharma-github/Simon_Game",
     category:["Minor"],
     key_techs:["HTML, CSS, JS"]

   },
   {
    id:5,
     name:"Drum Kit",
     description:"A simple HTML, CSS and JS based Music Generating Console Game in which Various Instruments gets played when Clicked",
     image_path:"/images/DrumKit.jpg",
     deployed_url:"https://nikhilsharma-github.github.io/DrumKit/",
     github_url:"https://github.com/nikhilsharma-github/DrumKit",
     category:["Minor"],
     key_techs:["HTML, CSS, JS"]

   },
   {
    id:6,
     name:"TinDog",
     description:"Tinder for Dogs, Simple Website Created using HTML and CSS only.",
     image_path:"/images/TinDog.jpg",
     deployed_url:"https://nikhilsharma-github.github.io/TinDog/",
     github_url:"https://github.com/nikhilsharma-github/TinDog",
     category:["Minor"],
     key_techs:["HTML","CSS","Bootstrap"]

   },
]

export const certificates:ICertificates[]=[
  {
    name:"Architecting with Google Compute Engine",
    description:"5 Course Specialisation by Coursera, learned to  deploy solution elements, including infrastructure components such as networks, systems and applications services using Google Cloud Platform, with a focus on Compute Engine.",
    type:"Certificate",
    Icon:SiCoursera,
    date:"Mar 21",
    url:"https://www.coursera.org/account/accomplishments/specialization/certificate/4AXVLP4P5B78"

  },
  {
    name:"Crash Course on C++ STL",
    description:"Learned and Implemented useful STL of C++.",
    type:"cert",
    Icon:SiUdemy,
    date:"Mar 21",
    url:"https://udemy-certificate.s3.amazonaws.com/pdf/UC-fbcd961a-2e74-4845-bc88-630e4fea1a1f.pdf"

  },
  {
    name:"Preparing for the Google Cloud ACE Exam",
    description:"Covered Important Aspects required for Clearing this ACE exam.",
    type:"cert",
    Icon:SiCoursera,
    date:"Mar 21",
    url:"https://www.coursera.org/account/accomplishments/certificate/CC9EFMG2CXBU"

  },
  {
    name:"Reliable Google Cloud Infrastructure:Design and Process",
    description:"Learned about important Processes and Design Principles which are important for a Cloud Infrastructure",
    type:"cert",
    Icon:SiCoursera,
    date:"Mar 21",
    url:"https://www.coursera.org/account/accomplishments/certificate/P9DJ94A4BXS6"

  },
  {
    name:"Elastic Google Cloud Infrastructure: Scaling and Automation",
    description:"As per the Users requirements, learned about how to scale our Cloud Servers under excessive traffic using Automation",
    type:"cert",
    Icon:SiCoursera,
    date:"Feb 21",
    url:"https://www.coursera.org/account/accomplishments/certificate/H9MWTZ8HGC3W"

  },
  {
    name:"Essential Google Cloud Infrastructure:Core Services",
    description:"Learned about How to use the Core Services of Compute Engine.",
    type:"cert",
    Icon:SiCoursera,
    date:"Feb 21",
    url:"https://www.coursera.org/account/accomplishments/certificate/X7MYXY5YGQ37"

  },
  {
    name:"Essential Google Cloud Infrastructure:Foundation",
    description:"Covered about the Basic introduction of Compute Engine Services, available in our Google Cloud Console",
    type:"cert",
    
    Icon:SiCoursera,
    date:"Feb 21",
    url:"https://www.coursera.org/account/accomplishments/certificate/ENDZ4JK7YKGF"

  },
  {
    name:"Google Cloud Platform Fundamentals:Core Infrastructure",
    description:"Gives a brief Introduction about the Google Cloud Console.",
    type:"cert",
    Icon:SiCoursera,
    date:"Jan 21",
    url:"https://www.coursera.org/account/accomplishments/certificate/XVGQA5HRF6P6"

  },
  {
    name:"30 Days of Google Cloud",
    description:"Learned and Experienced the Fundamental Essential services related   to Google Cloud Platform. Completed Both Cloud Engineer and ML AI track. Earned All 12 Badges and completed 72 Labs of Qwiklabs.",
    type:"cert",
    Icon:SiGooglecloud,
    date:"Nov 20",
    url:"https://www.cloudskillsboost.google/public_profiles/a7a5df3d-25eb-46f4-90ac-c62238cfc9e1"

  },
]