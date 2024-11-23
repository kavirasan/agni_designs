import React from "react";
import { List } from "flowbite-react";
import { HiCheckCircle } from "react-icons/hi";
import bim from "../assets/bim.jpg";

const About_Us = () => {
  return (
    <div className="p-5"  >
      <p className="text-center text-2xl md:text-4xl font-bold mt-10"> About Us</p>
      <div className=" items-center  w-14 md:w-40 h-2 bg-yellow-300 rounded-lg mx-auto mb-5 mt-2"></div>

      <div className="flex flex-col md:flex-row justify-between items-center md:mx-5 md:gap-20">
        <div>
          <p className="text-center md:text-xl ">
            <strong>AGNI Consultants </strong>sets new benchmarks in MEP design,
            blending engineering excellence with innovation. With over
            <strong> 20 years of experience</strong>
          </p>
          <List className="text-sm md:text-lg text-gray-700 mt-5 subpixel-antialiased">
            <List.Item className="" icon={HiCheckCircle}>
              We integrate MEP design with architecture, delivering sustainable,
              eco-friendly solutions using advanced technology.
            </List.Item>
            <List.Item icon={HiCheckCircle}>
              Our mission: Maximize design precision, minimize revisions, and
              turn your vision into reality.
            </List.Item>
            <List.Item icon={HiCheckCircle}>
              Collaborating with clients to create innovative and
              energy-efficient designs that optimize building performance.
            </List.Item>
            <List.Item icon={HiCheckCircle}>
              Adopting the latest technologies to ensure seamless integration of
              MEP systems, from design to execution.
            </List.Item>
          </List>
        </div>
        <div>
          <img src={bim} className="rounded-lg mt-5 md:mt-0" />
        </div>
      </div>
    </div>
  );
};

export default About_Us;
