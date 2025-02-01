import React from "react";
import mem1 from "../assets/new_agni_images/Mahendiran_principle.jpg";
import mem2 from "../assets/new_agni_images/kamal_raja.jpg";
import mem3 from "../assets/new_agni_images/denis_dias.jpg";
import client from "../assets/new_agni_images/office2.jpg"

const TeamCard = ({ img, name, title, description }) => {
  return (
    <div className="rounded-lg bg-gray-100 shadow-lg p-6 text-center">
      <img
        src={img}
        alt={name}
        className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
      />
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600 text-sm">{title}</p>
      <div className="flex justify-center gap-3 mt-4">
        <a
          href="#"
          className="text-gray-500 hover:text-blue-500 transition-colors"
        >
          <i className="fab fa-twitter text-sm">{description}</i>
        </a>
      </div>
    </div>
  );
};

const members = [
  {
    img: mem3,
    name: "DENIS DIAS",
    title: "Chief Consultant",
    description:
      " 17 + Years experience in MEP design. Works as a senior Mechanical Engineer in building  services design, Supervision, Project Management, Processes and systems controlling the  assist of maintenance and up-dating Mechanical specifications. ",
  },
  {
    img: mem1,
    name: "MAHENDIRAN T",
    title: "Principal Consultant",
    description:
      "19+ Years of construction experience professional with practical and design experience,  and solid understanding of MEP application. Demonstrated calibre ability of MEP  Engineering and awareness of latest construction standards and codes. High caliber  presentation, self-motivated negotiation and closing skills, decision making",
  },
  {
    img: mem2,
    name: "KAMAAL  RAJA  ( Eng  M I M e c h E )",
    title: "Chief Consultant",
    description:
      "16+ Years Experience in Mechanical Design. Specialized in BIM Modeling and HVAC  system design. Expertise in Industrial, Commercial, Retail projects and also Handled  Metro projects in Middle East and UK.",
  }
];

const MeetOurTeam = () => {
  return (
    <div className=" bg-gradient-to-r from-orange-50 via-yellow-350 to-yellow-50">
      <section className="min-h-screen py-16 px-6 ">
        <div className="container mx-auto">
          <div className="text-center mb-12 mt-20">
            <h6 className="text-lg font-semibold text-blue-600">
              Meet the Team
            </h6>
            <h2 className="text-3xl font-bold text-gray-800 mt-2">
              Behind the Success: Our Dedicated Team
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              From visionary leadership to creative talent, and technical
              wizards, each team member plays a pivotal role in delivering
              exceptional service and innovative solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
            {members.map((member, index) => (
              <TeamCard
                key={index}
                img={member.img}
                name={member.name}
                title={member.title}
                description={member.description}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-xl">
              <p className="text-base/7 font-semibold text-indigo-600">
                Meet the Minds Behind Our Software Excellence
              </p>
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Behind Every Innovation Is an Incredible Team
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
                Our team is a blend of visionaries, strategists, and technical
                experts, all dedicated to creating transformative software
                solutions. With diverse expertise, ranging from developers and
                designers to project managers, each member brings unique skills
                and perspectives to the table. Driven by a passion for
                innovation, we thrive on solving complex problems using
                creativity and cutting-edge technologies. Strong teamwork and
                seamless communication are at the heart of what we do,
                empowering us to deliver exceptional results and ensure the
                success of every project.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src={client}
            className="w-[48rem] max-w-none rounded-xl bg-white/20 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] h-[30rem] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
