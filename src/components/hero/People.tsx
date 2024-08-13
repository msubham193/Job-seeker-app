import React from "react";

const People = ({ image, className }) => {
  return (
    <div className={` shadow-xl ${className}`}>
      <img src={image} alt="" className="w-full h-full object-cover rounded-xl" />
    </div>
  );
};

export default People;
