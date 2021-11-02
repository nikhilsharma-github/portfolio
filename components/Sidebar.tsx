import {AiFillGithub, AiFillLinkedin,AiFillYoutube} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go'
import{GiTie} from 'react-icons/gi'

const Sidebar = () => {
  return (
    <div>
      <img
        src="https://media-exp1.licdn.com/dms/image/C5603AQEa6T0CZJrg7g/profile-displayphoto-shrink_200_200/0/1608130453074?e=1641427200&v=beta&t=2UVkhlb43_GonWydM9cJaKHQuS88S8pXUduX4yPsa7Q"
        alt="profilePicture"

        className="w-32 h-32 mx-auto rounded-full"
      />

      <h3  className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-greenCustom">Nikhil </span>
        Sharma
      </h3>
      
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full ">Web Developer</p>
      <a href="" download="name" className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full ">  <GiTie className="w-6 h-6 "/>Download Resume</a>
      
      {/* {social Icons } */}
<div className="flex justify-around w-9/12 mx-auto my-5 text-greenCustom md:w-full ">
         <a href="">
           <AiFillGithub  className="w-8 h-8 cursor-pointer"></AiFillGithub>
         </a>
         <a href="">
           <AiFillYoutube  className="w-8 h-8 cursor-pointer"></AiFillYoutube>
         </a>
         <a href="">
           <AiFillLinkedin  className="w-8 h-8 cursor-pointer"></AiFillLinkedin>
         </a>
</div>
      {/* address  */}

      <div className="py-4 my-5 bg-gray-200 "  style={{ marginLeft:'-1rem', marginRight:'-1rem'}}>
        <div className="flex items-center justify-center space-x-2 ">
          <GoLocation />
          <span className="">Delhi, India</span>
        </div>
        <p className="my-2">nikhilsharma.csgeek@gmail.com</p>
        <p className="my-2">+91-8929004546</p>
      </div>

      {/* email button  */}
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full focus:outline-none bg-gradient-to-r from-greenCustom to-blue-600" onClick={()=>window.open('mailto:nikhilsharma.csgeek@gmail.com')}>Email Me</button>

      {/* theme button  */}
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-greenCustom to-blue-800">Light UI</button>



    
    
    
    </div>
  );
};

export default Sidebar;
