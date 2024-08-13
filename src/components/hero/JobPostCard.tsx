import React from "react";

const JobPostCard = ({ className, companyLogo, JobName, companyName }) => {
  return (
    <div className={`rounded-3xl bg-white py-4 px-4 w-fit absolute  ${className}`}>
      <div className="flex gap-2 items-center">
        <img src={companyLogo} alt="" className=" h-8 sm:h-10" />
        <div>
          <h1 className=" text-xs sm:text-base font-medium">{JobName}</h1>
          <div className="flex gap-2">
            <p className="font-medium text-xs sm:text-sm text-gray-500">{companyName} </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-3">
        <div className="bg-gray-300 px-3 text-gray-500 font-medium rounded-md py-1 text-[10px] sm:text-sm">
          UI Designer{" "}
        </div>
        <div className="bg-gray-300 px-3 text-gray-500 font-medium rounded-md py-1 text-[10px] sm:text-sm">
          Devloper{" "}
        </div>
        <div className="bg-gray-300 px-3 text-gray-500 font-medium rounded-md py-1 text-[10px] sm:text-sm">
          System{" "}
        </div>
      </div>
    </div>
  );
};

export default JobPostCard;
