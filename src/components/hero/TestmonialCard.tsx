import { Star, StarIcon } from "lucide-react";
import React from "react";

const TestmonialCard = ({ className, image, text }) => {
  return (
    <div
      className={`border border-gray-300 p-5 rounded-2xl shadow-sky-300 hover:shadow-sky-800 transition-all duration-300 sm:w-[55%] shadow-lg ${className}`}
    >
      <div className="flex justify-between items-center">
        <div className="border border-gray-400 text-xs  font-semibold  text-gray-500 rounded-3xl p-2">
          User testimonial
        </div>
        <div className="flex gap-2 text-pink-700 ">
          <StarIcon className="h-5 w-5" />
          <StarIcon size={20} /> <StarIcon size={20} /> <StarIcon size={20} />{" "}
          <StarIcon size={20} />
        </div>
      </div>

      <div>
        <h1 className="font-medium text-xs sm:text-sm tracking-wide mt-4 w-full">
          Thanks to this platform, I secured a job in my dream company! I
          couldn't be happier with the support and opportunities this platform
          offered. Highly recommended to anyone serious about finding their
          perfect job!
        </h1>
      </div>

      <hr className="mt-5 text-black" />

      <div className="py-6 ">
        <div className="flex gap-2 items-center">
          <img
            src="./man-1.jpg"
            className="rounded-full sm:h-14 sm:w-14  h-10 w-10 object-cover"
          />
          <div className="flex flex-col">
            <h1 className="font-semibold text-base sm:text-lg">
              Subham Mishra
            </h1>
            <p className="text-gray-500 font-medium text-xs sm:text-sm">
              Software Engineer , Google
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestmonialCard;
