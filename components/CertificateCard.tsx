import { FunctionComponent } from "react";
import { ICertificates } from "../type";

const CertificateCard: FunctionComponent<{ certificate: ICertificates }> = ({
  certificate: {
    name,
    description,
    type,
    Icon,
    date,
    url,
  },
}) => {
  
  return (
    <div className=" flex items-center space-x-1 p-1 shadow-greenCustom shadow-3xl ">
      <Icon className="h-12 w-2/12 text-greenCustom  dark:text-pinkCustom  " />

      <div className="w-10/12 ">
        <h6 className=" px-2 font-bold text-green-800 dark:text-pinkCustom ">
          {name}
        </h6>
        <p className="font-normal text-sm lg:text-base  leading-tight  " >{description}</p>
        <div className="top-0">
          <span className=" lg:font-normal font-light   text-blue-900 lg:px-4 px-1 dark:text-green-200">{date}</span>
        <a href={url} target="_blank" className=" lg:px-4 px-1 text-blue-700 lg:font-normal font-light   hover:text-blue-900 ">See Credentials</a>

        </div>

      
      </div>
    </div>
  );
};

export default CertificateCard;
