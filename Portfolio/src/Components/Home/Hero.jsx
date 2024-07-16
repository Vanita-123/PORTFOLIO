// import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Hero() {
  const para = [
    "Web Developer",
    "FrontEnd Developer",
    "React Js Developer",
    "BackEnd Developer",
    "Mern Stack",
    "FullStack Developer",
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % para.length);
    }, 2500);

    return () => clearInterval(intervalId);
  });
  return (
    <div className=" md:h-[75vh] flex flex-col md:flex-row  items-center justify-center">
      <div className="w-full lg:w-3/6 md:mb-0 mb-12 items-center flex flex-col lg:items-start justify-center ">
        <h1 className="text-4xl lg:text-6xl font semibold text-center lg:text-left ">
          Hi, I am <span className="text-blue-700">Vanita</span>{" "}
        </h1>
        <p className="my-2 font-semibold text-2xl">
          And. I am a Software developer. I believe in Hard Work and dedication
          toword my work as the key to success. i am contantly learning . My
          Goal set Hard Work and problem Solving
        </p>
        <div className="items-center mt-4">
          {para.map((text, id) => {
            return (
              <div key={id}>
                <Link
                  className="mt-4  text-2xl lg:text-left text-center text-yellow-300  font-semibold"
                  key={id}
                >
                  {index === id && text}
                </Link>
              </div>
            );
          })}
        </div>
        <div>
          <div className="justify-center items-center flex flex-col m-6">
            <h2 className="text-xl font-semibold text-yellow-300">
              Available on
            </h2>
            <div className="flex gap-4  cursor-pointer m-3">
              <Link to="https://www.linkedin.com/in/vanita-barhman-6521201b2">
                <FaLinkedin size={28} />
              </Link>
              <Link to="https://github.com/Vanita-123">
                <FaGithub size={28} />
              </Link>

              <div></div>
            </div>
            <p className="text-blue-600">vanitabarhman9728@gmail.com</p>
            <p className=" items-center">
              <SiGmail size={28} />
            </p>
          </div>
        </div>
        <div className="mt-10 items-center ">
          <Link
            to="https://drive.google.com/file/d/1VRSBs7pDG4opCDQmwAXncXU8uQjEaWPT/view?usp=drivesdk"
            className=" text-yellow-100 justify-center mt-4 py-2  px-2 text-xl  lg:text-2xl   font-semibold border border-yellow-300 hover:bg-zinc-800 rounded-full "
          >
            Download Resume
          </Link>
        </div>
      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtljK8FmZ04Qw9xvK4FDkpUmEm8w9SiB8Ag&s"
        alt="img "
        height="220px"
        width="400px"
      />
    </div>
  );
}

export default Hero;
