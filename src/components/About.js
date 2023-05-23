import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import Image from "../assets/img/gajuahmd.jpg";
import Social from "./Social";

const About = () => {
  return (
    <div className="mb-8 sm:grid sm:grid-cols-3">
      <div className="block sm:col-span-1 sm:flex justify-between items-start mb-4">
        <div className="block mb-3">
          <div className="w-24 h-24 rounded-md shadow-sm shadow-black overflow-hidden mx-auto sm:m-0 sm:mb-3">
            <img className="w-full h-full" alt="Anis" src={Image} />
          </div>
          <div>
            <h3 className="text-xl font-poppins font-light mb-1 text-slate-600 tracking-wider">
              Gaju Ahmed
            </h3>
            <h3 className="text-sm font-poppins font-light mb-1 text-slate-500 tracking-wider">
              Machine Learning Engineer/Researcher
            </h3>
            <p className="text-sm font-poppins font-light mb-1 tracking-wider">
              <span className="text-slate-500">Email:</span>{" "}
              <span className="text-cyan-600 tracking-widest">
                 gajuahmd@gmail.com
              </span>
            </p>
          </div>
          <Social />
        </div>
      </div>
      <div className="block sm:col-span-2">
        <div className="block mb-4">
          <h1 className="text-[#3d4346] font-light text-3xl font-poppins leading-5 break-words mb-2">About</h1>
          <p className="font-poppins text-base font-light leading-6 text-justify text-[#3d4346]">
            {/*<span className="font-medium">AinoviQ</span>*/}
            I am a Machine Learning engineer &  I was a research assistant at{" "}
            <strong>North South University, Bangladesh </strong> and{" "} where I
            spent 1 years and also complete my masters degree. I got my bachelor's degree in computer science from <strong>Daffodil International University, Bangladesh (DIU)</strong>
          </p>
        </div>
        <div className="block mb-4">
          <h1 className="text-[#3d4346] font-light text-2xl font-poppins break-words mb-2">Coursework</h1>
          <ul className="text-[#3d4346] text-base font-poppins list-inside leading-7">
            <li className="list-bullet">Image Processing</li>
            <li className="list-bullet">Machine Learning</li>
            <li className="list-bullet">Deep Learning</li>
            <li className="list-bullet">Advanced Neural Network</li>
            <li className="list-bullet">Artificial Intelligence</li>

          </ul>
        </div>
        <div className="block sm:flex sm:justify-between mb-4">
          <div className="block w-full mb-4 sm:mb-0">
            <h1 className="text-[#3d4346] font-light text-2xl font-poppins break-words mb-2">Interests</h1>
            <ul className="text-[#3d4346] text-base font-poppins list-inside leading-7">
              <li className="list-bullet"> Football</li>
              <li className="list-bullet">Travelling</li>
              <li className="list-bullet">Music</li>
              <li className="list-bullet">Movie</li>
            </ul>
          </div>
          <div className="block w-full">
            <h1 className="text-[#3d4346] font-light text-2xl font-poppins break-words mb-2">Education</h1>
            <div className="text-[#3d4346] text-base font-poppins list-inside leading-7">
              <div className="flex flex-row items-start">
                <span className="rounded-md text-center bg-gradient-to-bl from-teal-500 to-teal-700 text-white text-xl font-mono font-bold mr-1">
                  <FaGraduationCap className="w-6 h-6 p-0.5" />
                </span>
                <span>
                  <span className="block">Computer Science & Engineering, Master's</span>
                  <span className="block text-slate-500 text-sm font-light">North South University, Bangladesh (NSU)</span>
                  <code className="block text-slate-500 text-sm">2020-2023</code>
                </span>
              </div>
            </div>
            <div className="text-[#3d4346] text-base font-poppins list-inside leading-7">
              <div className="flex flex-row items-start">
                <span className="rounded-md text-center bg-gradient-to-bl from-teal-500 to-teal-700 text-white text-xl font-mono font-bold mr-1">
                  <FaGraduationCap className="w-6 h-6 p-0.5" />
                </span>
                <span>
                  <span className="block">Computer Science & Engineering, Bachelor's</span>
                  <span className="block text-slate-500 text-sm font-light">Daffodil International University, Bangladesh (DIU)</span>
                  <code className="block text-slate-500 text-sm">2015-2019</code>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
