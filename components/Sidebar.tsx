import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { SiLeetcode } from "react-icons/si";
import { GiTie } from "react-icons/gi";
import { SiGooglecloud, SiCodechef, SiGmail } from "react-icons/si";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { FcDocument, FcDownload } from "react-icons/fc";
import Image from "next/image";

import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="">
      <div className="pb-3 transition duration-500 ease-in-out hover:bg-green-100 dark:hover:bg-blueCustom-backgroundDark rounded-3xl transform hover:-translate-y-1 ">
        <Image
          // src="/images/Portfolio_DP.jpg"
          src="/images/DP4.jpg"
          alt="profilePicture"
          className=" mx-auto my-2  rounded-3xl  dark:ring-gray-800 ring-2 ring-gray-300  "
          height="128"
          width="128"
          layout="intrinsic"
          quality="100"
          priority
        />

        <h3 className="text-2xl font-large tracking-wider delay-150 duration-3 transition ease-in-outy-4 font-kaushan ">
          <span className="text-greenCustom dark:text-pinkCustom">
            Nikhil{" "}
          </span>
          <span className="text-2xl">Sharma</span>
        </h3>
      </div>

      <p
        className="px-2 py-2 my-3 rounded-full
       bg-gradient-to-r from-green-200 to-blue-400 flex items-center justify-center transition duration-200 ease-in-out transform bg-gray-200 delay-50 hover:-translate-y-1 hover:scale-105
       dark:from-darkButton-blue dark:to-darkButton-green

      "
      >
        {" "}
        Aspiring Software Engineer
      </p>
      <a
        href="/assets/NikhilSharma_Resume.pdf"
        download="NikhilSharma_Resume.pdf"
        className=" bg-gradient-to-r from-green-200 to-blue-400 flex items-center justify-center px-2 py-2 my-4 transition duration-200 ease-in-out transform bg-gray-200  rounded-full delay-50 hover:-translate-y-1 hover:scale-105
         dark:from-darkButton-blue dark:to-darkButton-green
        "
      >
        {" "}
        <FcDocument className="w-8 h-8 mx-2 animate-bounce-custom " />
        <span className="">Download Resume</span>
        <FcDownload className="w-8 h-8 mx-2 animate-bounce-custom" />
      </a>

      {/* {social Icons } */}
      <div className=" transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex justify-around w-9/12 mx-auto my-5 text-greenCustom  dark:text-pinkCustom md:w-full   ">
        <a
          href="https://github.com/nikhilsharma-github"
          target="_blank"
          aria-label="Github"
        >
          <AiFillGithub className="w-8 h-8 cursor-pointer"></AiFillGithub>
        </a>
        <a
          href="https://www.linkedin.com/in/nikhil-sharma-7b32601b6/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer"></AiFillLinkedin>
        </a>
        <a
          href="https://leetcode.com/NikhilSharma_LC/"
          target="_blank"
          aria-label="Leetcode"
        >
          <SiLeetcode className="w-8 h-8 cursor-pointer"></SiLeetcode>
        </a>
        <a
          href="https://www.codechef.com/users/nikhil_cse"
          target="_blank"
          aria-label="Codechef"
        >
          <SiCodechef className="w-8 h-8 cursor-pointer"></SiCodechef>
        </a>
      </div>
      {/* address  */}

      <div
        className=" py-4 my-5 bg-gradient-to-r from-green-200 to-blue-300 
        dark:from-blueCustom-backgroundDark dark:to-blueCustom-backgroundLight
        
        "
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex  items-center justify-center space-x-4 px-2 mx-2">
          <ImLocation2 className="w-5 h-5" />
          <span className="">
            North Delhi
            <br /> Delhi‐110042, India
          </span>
        </div>
        <div className="flex  items-center justify-center space-x-4 px-2 mx-2">
          <SiGmail className="w-5 h-5" />
          <span className="my-2 flex-wrap">
            nikhilsharma.csgeek
            <br />
            @gmail.com
          </span>
        </div>
        <div className=" px-2 mx-2 flex  items-center justify-center space-x-4 ">
          <BsTelephoneInboundFill className="w-5 h-5" />
          <span className="">+91-8929004546</span>
        </div>

        {/* <p className="my-2">+91-8929004546</p> */}
      </div>

      {/* email button  */}

      <button
        className="w-8/12 font-medium px-5 py-2 my-2 text-white transition duration-300 ease-in-out delay-50 transform rounded-full hover:-translate-y-1 hover:scale-110 focus:outline-none bg-gradient-to-r from-greenCustom to-blue-800
        dark:from-darkButton-blue dark:to-darkButton-green
        "
        onClick={() => window.open("mailto:nikhilsharma.csgeek@gmail.com")}
      >
        Email Me
      </button>

      {/* theme button  */}
      <button
        className=" font-medium w-8/12 px-5 py-2 my-2 text-white
       transition duration-300 ease-in-out transform 
       delay-50 hover:-translate-y-1 hover:scale-110 
       rounded-full 
      bg-gradient-to-r from-greenCustom to-blue-800
      dark:from-darkButton-blue dark:to-darkButton-green
      
      "
        onClick={changeTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
