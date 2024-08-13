"use client";
import JobPostCard from "@/components/hero/JobPostCard";
import People from "@/components/hero/People";
import TestmonialCard from "@/components/hero/TestmonialCard";
import Nav from "@/components/Nav";
import { MessageSquareIcon } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const addLines = () => {
      const horizontalLines = document.querySelector(".horizontal-lines");
      const verticalLines = document.querySelector(".vertical-lines");
      const numHorizontalLines = 10;
      const numVerticalLines = 15;

      for (let i = 0; i < numHorizontalLines; i++) {
        const line = document.createElement("div");
        line.classList.add("absolute", "w-full", "h-[1px]", "bg-gray-200");
        line.style.top = `${(i + 1) * (100 / (numHorizontalLines + 1))}%`;
        horizontalLines.appendChild(line);
      }

      for (let i = 0; i < numVerticalLines; i++) {
        const line = document.createElement("div");
        line.classList.add("absolute", "h-full", "w-[1px]", "bg-gray-200");
        line.style.left = `${(i + 1) * (100 / (numVerticalLines + 1))}%`;
        verticalLines.appendChild(line);
      }
    };

    addLines();
  }, []);

  return (
    <main className="">
      <section className="relative flex flex-col  items-center sm:h-screen min-h-[85vh] overflow-hidden  ">
        <Nav />

        <People
          className="absolute top-28 left-10 sm:top-36 sm:left-20 h-20 w-16  md:h-36  md:w-28"
          image="./man-1.jpg "
        />
        <People
          className="absolute bottom-32 sm:bottom-20 h-20 w-16  left-10 sm:left-32 md:h-36  md:w-28"
          image="./man-2.jpg"
        />
        <People
          className="absolute  top-32 sm:top-36  right-8  h-20 w-16 md:h-36  md:w-28"
          image="./man-3.jpg"
        />
        <People
          className="absolute  right-10 bottom-20 sm:right-32 h-20 w-16 sm:h-36  sm:w-28"
          image="./man-4.jpg"
        />

        <div className="flex items-center absolute  top-48 sm:top-44 px-4 py-2 space-x-2 bg-blue-100 rounded-full">
          <ThumbsUpIcon className="w-4 h-4 text-blue-500" />
          <span className="sm:text-sm text-xs text-blue-500">
            #1 Top greatest on Product Hunt
          </span>
        </div>
        <div className="text-center text-gray-800 max-w-3xl p-8 bg-white  absolute top-56 bg-opacity-80 rounded-lg">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Supporting Job Seekers Every Step of the Way
          </h1>
          <p className="text-base md:text-xl mb-6">
            Unlock your true potential and discover a world of opportunities
            that align with your skills, interests, and aspirations
          </p>
          <a
            href="#"
            className="inline-block sm:px-6 sm:py-3 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
        <div className="absolute w-full inset-0 z-[-1] ">
          <div className="horizontal-lines relative w-full h-full"></div>
          <div className="vertical-lines absolute w-full h-full inset-0"></div>
        </div>
      </section>{" "}
      <section className="p-8 bg-[#FAFBFA] h-[400px] ">
        <h3 className=" text-xl sm:text-2xl font-bold text-center">
          More about Jobstera
        </h3>
        <p className="text-center sm:text-lg text-xs text-gray-600">
          Unlock Your True Potential And Discover A World Of Opportunities That
          Align With Your Skills, Interests, And Aspirations
        </p>
        <div className="flex justify-center items-center  space-x-5 sm:space-x-10  mt-10">
          <img
            src="/spotify.svg"
            alt="Spotify"
            className="sm:w-10 sm:h-10 w-7 h-7"
            width="40"
            height="40"
            style={{ aspectRatio: "40/40", objectFit: "cover" }}
          />
          <img
            src="/amazon.svg"
            alt="Microsoft"
            className="sm:w-10 sm:h-10 w-7 h-7"
            width="40"
            height="40"
            style={{ aspectRatio: "40/40", objectFit: "cover" }}
          />
          <img
            src="/apple.svg"
            alt="McAfee"
            className="sm:w-10 sm:h-10 w-7 h-7"
            width="40"
            height="40"
            style={{ aspectRatio: "40/40", objectFit: "cover" }}
          />
          <img
            src="/twitter.svg"
            alt="Google"
            className="sm:w-10 sm:h-10 w-7 h-7"
            width="40"
            height="40"
            style={{ aspectRatio: "40/40", objectFit: "cover" }}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8 md:grid-cols-4">
          <div className="text-center">
            <h4 className="text-2xl font-bold">400K</h4>
            <p className="text-gray-600">Job list</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold">800K</h4>
            <p className="text-gray-600">People hired</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold">20K</h4>
            <p className="text-gray-600">Company</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold">120</h4>
            <p className="text-gray-600">Available country</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row   items-center  justify-between h-full  p-6 md:p-12  ">
        <div className="md:w-[50%]   flex flex-col gap-7 sm:justify-start justify-center items-center md:items-start  sm:p-5">
          <p className="text-blue-600 font-semibold flex gap-2 items-center md:justify-start justify-center ">
            {" "}
            <MessageSquareIcon size={20} />
            Testimonial
          </p>

          <h1 className="text-2xl text-center md:text-start sm:text-4xl font-semibold">
            Reviews of people who get jobs using Jobstera
          </h1>

          <p className="text-gray-500 text-center md:text-start">
            Unlock Your True Potential And Discover A World Of Opportunities
            That Align With Your Skills, Interests, And Aspirations
          </p>

          <button className="px-4 py-2  w-fit  text-white bg-blue-600 border-2 rounded-full text-sm">
            More stories
          </button>
        </div>
        <div className="relative w-full   h-[500px] p-3">
          {" "}
          <TestmonialCard
            image={"./man-1.jpg"}
            className={"sm:absolute top-0 sm:left-10 left-5 "}
          />
          <TestmonialCard
            image={"./man-2.jpg"}
            className={"sm:absolute  bottom-0 mt-3 right-0 bg-white "}
          />
        </div>
      </section>
      <section className="p-6 md:p-12 mt-20 md:mt-0">
        <div className="bg-blue-500 w-full h-fit rounded-3xl p-7 sm:p-10 flex md:flex-row flex-col">
          <div className="md:w-1/2  flex flex-col items-center md:items-start gap-5 h-full ">
            {" "}
            <h1 className="text-white  text-center md:text-start text-2xl sm:text-4xl">
              Join our community of ambitious professionals today and unlock the
              doors to your dream career.
            </h1>{" "}
            <p className="text-white text-center md:text-start ">
              Unlock your true potential and discover a world of opportunities
              that align with your skills, interests, and aspirations
            </p>
            <button className="bg-black rounded-3xl text-white w-fit px-4 py-3  text-sm">
              Get started now
            </button>
          </div>
          <div className="md:w-1/2 relative mt-20 md:mt-0  h-[250px] ">
            <JobPostCard
              companyLogo={"./spotify.svg"}
              JobName="Product Designer"
              companyName="Spotify"
              className=" absolute top-[-50px] right-0  rotate-12 shadow-md shadow-gray-700 "
            />
            <JobPostCard
              companyLogo={"./twitter.svg"}
              JobName="System Engineer"
              companyName="Twitter"
              className=" -rotate-3 shadow-md shadow-gray-700"
            />
            <JobPostCard
              companyLogo={"./apple.svg"}
              JobName="Senior Software Developer"
              companyName="Apple"
              className="bottom-[-50px] right-0 rotate-12 shadow-md shadow-gray-700"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function ThumbsUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}
